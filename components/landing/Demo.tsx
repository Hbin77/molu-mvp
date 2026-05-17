"use client";

import { useCallback, useRef, useState, type ChangeEvent, type DragEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import { diagnose } from "@/lib/api";
import type {
  DiagnosisResponse,
  SafetyAction,
  Step,
  TrustAction,
  WarnKind,
} from "@/lib/schema";

type Phase = "idle" | "previewing" | "analyzing" | "done" | "error";

const ACCEPTED = ["image/jpeg", "image/png", "image/webp"];
const MAX_MB = 10;

const WARN_LABEL: Record<WarnKind, string> = {
  gas: "가스 — 작업 중단",
  electric: "고전압 — 작업 중단",
  blade: "회전 칼날 — 보호장구",
  heat: "뜨거운 표면 — 식힌 뒤",
};

const SAFETY_TONE: Record<SafetyAction, { bg: string; fg: string; label: string }> = {
  proceed: { bg: "var(--color-ok-bg)", fg: "var(--color-ok-fg)", label: "안전 — 진행 가능" },
  warn: { bg: "#FBEFD3", fg: "#8A6314", label: "주의 — 천천히 진행" },
  stop_call_expert: {
    bg: "var(--color-warn-bg)",
    fg: "var(--color-warn-fg)",
    label: "위험 — 전문가 호출 권장",
  },
};

const TRUST_TONE: Record<TrustAction, { bg: string; fg: string; label: string }> = {
  accept: {
    bg: "var(--color-ok-bg)",
    fg: "var(--color-ok-fg)",
    label: "근거가 충분해요",
  },
  warn_badge: { bg: "#FBEFD3", fg: "#8A6314", label: "출처가 약합니다" },
  research_again: {
    bg: "var(--color-warn-bg)",
    fg: "var(--color-warn-fg)",
    label: "근거 부족 — 다시 비춰주세요",
  },
};

export function Demo() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [hint, setHint] = useState("");
  const [result, setResult] = useState<DiagnosisResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const pickFile = useCallback((f: File) => {
    if (!ACCEPTED.includes(f.type)) {
      setError(`지원하지 않는 파일 형식입니다 (${f.type}). JPG/PNG/WebP만 가능해요.`);
      setPhase("error");
      return;
    }
    if (f.size > MAX_MB * 1024 * 1024) {
      setError(`이미지가 너무 큽니다 (${(f.size / 1024 / 1024).toFixed(1)}MB). ${MAX_MB}MB 이하로 올려주세요.`);
      setPhase("error");
      return;
    }
    setFile(f);
    setPreviewUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return URL.createObjectURL(f);
    });
    setError(null);
    setResult(null);
    setPhase("previewing");
  }, []);

  const onFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) pickFile(f);
  };
  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f) pickFile(f);
  };
  const onDragOver = (e: DragEvent<HTMLDivElement>) => e.preventDefault();

  const onAnalyze = async () => {
    if (!file) return;
    setError(null);
    setResult(null);
    setPhase("analyzing");
    abortRef.current = new AbortController();
    try {
      const data = await diagnose(file, hint, abortRef.current.signal);
      setResult(data);
      setPhase("done");
    } catch (e) {
      if ((e as Error).name === "AbortError") {
        setPhase("previewing");
        return;
      }
      setError((e as Error).message || "알 수 없는 오류가 발생했어요.");
      setPhase("error");
    }
  };

  const reset = () => {
    abortRef.current?.abort();
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setFile(null);
    setPreviewUrl(null);
    setHint("");
    setResult(null);
    setError(null);
    setPhase("idle");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <section id="demo" className="sec sec--cream2">
      <div className="container-page">
        <div className="eyebrow">
          <span className="dot" />
          LIVE DEMO
        </div>
        <h2 className="h-display" style={{ marginTop: 22 }}>
          사진 한 장 → <span className="accent">AI 진단.</span>
        </h2>
        <p className="lead" style={{ marginTop: 20, maxWidth: 620 }}>
          가전·가구·기기 사진을 올리시면 Gemini 3.1이 직접 보고 어디가 다른지, 어떻게 풀어야
          하는지 한국어로 짚어드려요. 위험한 단계 앞에선 자동으로 멈춰요.
        </p>

        {/* Upload box */}
        <div style={{ marginTop: 48 }}>
          {(phase === "idle" || phase === "previewing" || phase === "error") && (
            <UploadBox
              previewUrl={previewUrl}
              file={file}
              hint={hint}
              error={error}
              onPick={() => inputRef.current?.click()}
              onDrop={onDrop}
              onDragOver={onDragOver}
              onHintChange={setHint}
              onAnalyze={onAnalyze}
              onReset={reset}
              canAnalyze={!!file}
            />
          )}

          {phase === "analyzing" && previewUrl && <AnalyzingCard previewUrl={previewUrl} />}

          {phase === "done" && result && (
            <ResultCard data={result} previewUrl={previewUrl} onReset={reset} />
          )}
        </div>

        {/* Hidden file input */}
        <input
          ref={inputRef}
          type="file"
          accept={ACCEPTED.join(",")}
          onChange={onFileInputChange}
          style={{ display: "none" }}
          aria-hidden
        />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// UploadBox — empty drop zone or preview
// ─────────────────────────────────────────────────────────────
function UploadBox({
  previewUrl,
  file,
  hint,
  error,
  onPick,
  onDrop,
  onDragOver,
  onHintChange,
  onAnalyze,
  onReset,
  canAnalyze,
}: {
  previewUrl: string | null;
  file: File | null;
  hint: string;
  error: string | null;
  onPick: () => void;
  onDrop: (e: DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: DragEvent<HTMLDivElement>) => void;
  onHintChange: (v: string) => void;
  onAnalyze: () => void;
  onReset: () => void;
  canAnalyze: boolean;
}) {
  return (
    <div
      className="elev-1"
      style={{
        padding: 32,
        background: "#fff",
        borderRadius: 28,
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      {previewUrl ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
            gap: 24,
            alignItems: "center",
          }}
          className="feature-row"
        >
          <div
            style={{
              position: "relative",
              borderRadius: 18,
              overflow: "hidden",
              background: "var(--paper-2)",
              aspectRatio: "4 / 3",
            }}
          >
            {/* user-uploaded preview; intentionally not next/image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={previewUrl}
              alt="업로드한 사진 미리보기"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                fontSize: 13,
                color: "var(--muted-strong)",
                fontWeight: 600,
              }}
            >
              {file?.name} · {file ? (file.size / 1024).toFixed(0) : 0} KB
            </div>
            <label
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
                fontSize: 13,
                fontWeight: 600,
                color: "var(--color-brown-700)",
              }}
            >
              힌트 (선택)
              <input
                type="text"
                placeholder="예: 세탁기 디스플레이에 E13이 떴어요"
                value={hint}
                onChange={(e) => onHintChange(e.target.value)}
                style={{
                  padding: "12px 14px",
                  borderRadius: 12,
                  border: "1px solid var(--line-strong)",
                  background: "var(--paper)",
                  fontFamily: "var(--font-ui)",
                  fontSize: 14,
                  color: "var(--color-brown-700)",
                  outline: "none",
                }}
              />
            </label>
            {error && (
              <div
                role="alert"
                style={{
                  padding: "10px 12px",
                  borderRadius: 10,
                  background: "var(--color-warn-bg)",
                  color: "var(--color-warn-fg)",
                  fontSize: 13,
                }}
              >
                {error}
              </div>
            )}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 4 }}>
              <button
                className="btn btn--accent"
                onClick={onAnalyze}
                disabled={!canAnalyze}
                style={{ height: 48, opacity: canAnalyze ? 1 : 0.6 }}
              >
                <Icon name="play" size={16} strokeWidth={2.5} />
                진단 시작
              </button>
              <button
                className="btn btn--ghost"
                onClick={onReset}
                style={{ height: 48 }}
              >
                다른 사진
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          role="button"
          tabIndex={0}
          onClick={onPick}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") onPick();
          }}
          onDrop={onDrop}
          onDragOver={onDragOver}
          style={{
            padding: "56px 24px",
            borderRadius: 20,
            border: "2px dashed var(--line-strong)",
            background: "var(--paper)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14,
            textAlign: "center",
            cursor: "pointer",
            minHeight: 280,
            justifyContent: "center",
          }}
        >
          <div
            aria-hidden
            style={{
              width: 80,
              height: 80,
              borderRadius: 22,
              background: "var(--color-cream-200)",
              color: "var(--color-brown-500)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="camera" size={40} strokeWidth={1.6} />
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 22,
              color: "var(--color-brown-700)",
              letterSpacing: "-0.02em",
            }}
          >
            사진을 올려주세요
          </div>
          <div
            style={{
              fontSize: 13.5,
              color: "var(--muted-strong)",
              maxWidth: 380,
              lineHeight: 1.6,
            }}
          >
            클릭하거나 이 영역으로 끌어다 놓으세요. JPG · PNG · WebP, 10MB까지.
          </div>
          {error && (
            <div
              role="alert"
              style={{
                marginTop: 6,
                padding: "8px 12px",
                borderRadius: 10,
                background: "var(--color-warn-bg)",
                color: "var(--color-warn-fg)",
                fontSize: 13,
              }}
            >
              {error}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Analyzing card — shown during the API call
// ─────────────────────────────────────────────────────────────
function AnalyzingCard({ previewUrl }: { previewUrl: string }) {
  return (
    <div
      className="elev-1"
      style={{
        padding: 32,
        background: "#fff",
        borderRadius: 28,
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
        gap: 24,
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          borderRadius: 18,
          overflow: "hidden",
          background: "#1c130b",
          aspectRatio: "4 / 3",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={previewUrl}
          alt="분석 중인 사진"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.6,
            filter: "blur(1px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            className="shimmer"
            style={{
              padding: "8px 14px",
              borderRadius: 999,
              background: "rgba(28,18,10,0.7)",
              backdropFilter: "blur(10px)",
              color: "#fff",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.04em",
            }}
          >
            AI가 보고 있어요…
          </span>
        </div>
      </div>
      <div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 26,
            fontWeight: 800,
            color: "var(--color-brown-700)",
            letterSpacing: "-0.03em",
          }}
        >
          잠시만요…
        </div>
        <p
          style={{
            marginTop: 10,
            fontSize: 14,
            color: "var(--muted-strong)",
            lineHeight: 1.6,
          }}
        >
          멀티모달 AI가 사진을 분석하고 한국어로 풀어쓰는 중이에요. 보통 5~15초 걸립니다.
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Result card — diagnosis output
// ─────────────────────────────────────────────────────────────
function ResultCard({
  data,
  previewUrl,
  onReset,
}: {
  data: DiagnosisResponse;
  previewUrl: string | null;
  onReset: () => void;
}) {
  const safety = SAFETY_TONE[data.safety.action];
  const trust = TRUST_TONE[data.trust.action];

  return (
    <div
      className="elev-1"
      style={{
        padding: 32,
        background: "#fff",
        borderRadius: 28,
        display: "flex",
        flexDirection: "column",
        gap: 22,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: previewUrl ? "180px minmax(0,1fr)" : "minmax(0,1fr)",
          gap: 22,
          alignItems: "flex-start",
        }}
        className="feature-row"
      >
        {previewUrl && (
          <div
            style={{
              borderRadius: 14,
              overflow: "hidden",
              background: "var(--paper-2)",
              aspectRatio: "1 / 1",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={previewUrl}
              alt="진단한 사진"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        )}
        <div style={{ minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <span
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "var(--color-accent-amber-dark)",
              }}
            >
              MOLLU&apos;S DIAGNOSIS
            </span>
            <span
              style={{
                padding: "3px 8px",
                borderRadius: 999,
                background: trust.bg,
                color: trust.fg,
                fontSize: 11.5,
                fontWeight: 700,
              }}
            >
              {trust.label} · {Math.round(data.trust.score * 100)}%
            </span>
          </div>
          <div
            style={{
              marginTop: 8,
              fontFamily: "var(--font-display)",
              fontSize: 22,
              fontWeight: 800,
              color: "var(--color-brown-700)",
              letterSpacing: "-0.03em",
            }}
          >
            {data.device.name}{" "}
            <span style={{ color: "var(--muted)", fontSize: 14, fontWeight: 600 }}>
              · {Math.round(data.device.confidence * 100)}%
            </span>
          </div>
          <p
            style={{
              marginTop: 10,
              fontFamily: "var(--font-display)",
              fontSize: 18,
              fontWeight: 700,
              color: "var(--color-brown-700)",
              lineHeight: 1.45,
              letterSpacing: "-0.02em",
            }}
          >
            {data.symptom.plain}
          </p>
          {data.symptom.code && (
            <div style={{ marginTop: 8, fontSize: 13, color: "var(--muted-strong)" }}>
              에러 코드: <b>{data.symptom.code}</b>
            </div>
          )}
          <div
            style={{
              marginTop: 12,
              display: "flex",
              gap: 6,
              flexWrap: "wrap",
              fontSize: 11.5,
            }}
          >
            <Pill>난이도 · {data.difficulty}</Pill>
            <Pill>예상 {data.estimated_minutes}분</Pill>
            <Pill>응답 {(data.latency_ms / 1000).toFixed(1)}s</Pill>
          </div>
          {data.technical && (
            <details style={{ marginTop: 14 }}>
              <summary
                style={{
                  cursor: "pointer",
                  fontSize: 12.5,
                  color: "var(--muted)",
                  fontWeight: 600,
                }}
              >
                전문 용어로 보기
              </summary>
              <div
                style={{
                  marginTop: 6,
                  padding: 12,
                  borderRadius: 10,
                  background: "var(--paper)",
                  fontFamily: "ui-monospace, monospace",
                  fontSize: 13,
                  color: "var(--color-brown-700)",
                  lineHeight: 1.6,
                }}
              >
                {data.technical}
              </div>
            </details>
          )}
        </div>
      </div>

      {/* Safety banner */}
      {data.safety.triggered && (
        <div
          role="alert"
          style={{
            padding: "14px 16px",
            borderRadius: 14,
            background: safety.bg,
            color: safety.fg,
            display: "flex",
            alignItems: "flex-start",
            gap: 12,
            border: "1px solid rgba(179,58,29,0.18)",
          }}
        >
          <Icon name="warn" size={20} strokeWidth={2.2} />
          <div style={{ flex: 1, color: "var(--color-brown-700)" }}>
            <div style={{ fontSize: 13.5, fontWeight: 800, color: safety.fg }}>
              {safety.label}
            </div>
            {data.safety.reason && (
              <div style={{ marginTop: 4, fontSize: 13, lineHeight: 1.55 }}>
                {data.safety.reason}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Steps */}
      {data.steps.length > 0 && (
        <div>
          <div
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 12,
              fontWeight: 700,
              color: "var(--muted-strong)",
              letterSpacing: "0.08em",
              marginBottom: 10,
            }}
          >
            단계 — {data.steps.length}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {data.steps.map((s) => (
              <StepRow key={s.n} step={s} isLast={s.n === data.steps.length} />
            ))}
          </div>
        </div>
      )}

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 4 }}>
        <button className="btn btn--primary" onClick={onReset} style={{ height: 48 }}>
          <Icon name="camera" size={16} strokeWidth={2.4} />
          다른 사진으로
        </button>
      </div>
    </div>
  );
}

function StepRow({ step, isLast }: { step: Step; isLast: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 14,
        alignItems: "flex-start",
        padding: "14px 0",
        borderBottom: isLast ? "none" : "1px solid var(--line)",
      }}
    >
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-ui)",
          fontWeight: 700,
          fontSize: 12,
          background: step.warn ? "var(--color-warn-bg)" : "var(--color-cream-200)",
          color: step.warn ? "var(--color-warn-fg)" : "var(--muted-strong)",
        }}
      >
        {step.n}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <div
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 14.5,
              fontWeight: 700,
              color: "var(--color-brown-700)",
            }}
          >
            {step.title}
          </div>
          {step.warn && step.warn_kind && (
            <span
              style={{
                padding: "3px 8px",
                borderRadius: 8,
                background: "var(--color-warn-bg)",
                color: "var(--color-warn-fg)",
                fontSize: 11,
                fontWeight: 700,
              }}
            >
              {WARN_LABEL[step.warn_kind]}
            </span>
          )}
          {step.requires_expert && (
            <span
              style={{
                padding: "3px 8px",
                borderRadius: 8,
                background: "var(--color-warn-fg)",
                color: "#fff",
                fontSize: 11,
                fontWeight: 700,
              }}
            >
              전문가 필요
            </span>
          )}
        </div>
        <div
          style={{
            marginTop: 4,
            fontSize: 13.5,
            color: "var(--muted-strong)",
            lineHeight: 1.55,
          }}
        >
          {step.desc}
        </div>
      </div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        padding: "4px 10px",
        background: "var(--color-cream-200)",
        borderRadius: 99,
        fontWeight: 600,
        color: "var(--muted-strong)",
      }}
    >
      {children}
    </span>
  );
}
