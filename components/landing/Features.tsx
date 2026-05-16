import { Icon } from "@/components/ui/Icon";
import { WasherIllustration } from "@/components/illustrations/Washer";

type FeatureVisual = "scan" | "diagnosis" | "trust" | "safety";

type Feature = {
  n: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  visual: FeatureVisual;
  accent: string;
};

const FEATURES: Feature[] = [
  {
    n: "01",
    eyebrow: "카메라 진단",
    title: "AI가 직접 봅니다.",
    body: "검색어를 떠올릴 필요가 없어요. 스마트폰 카메라로 비추면 Gemini 3.1 Pro가 화면을 그대로 보고 “어떤 기기이며 지금 어디가 평소와 다른지”까지 사진 한 장으로 식별합니다.",
    bullets: [
      "멀티모달 벤치마크 1위 모델 (2026.05 기준)",
      "실시간 바운딩 박스 + 라벨 표시",
      "전문가 직무 시간을 26~75% 단축 (arXiv:2403.05530)",
    ],
    visual: "scan",
    accent: "var(--color-brown-700)",
  },
  {
    n: "02",
    eyebrow: "비전문가 번역기",
    title: "“E13” → “회색 호스가 막혔어요.”",
    body: "매뉴얼이 알아들을 수 없는 말로 적어두어도, 몰루는 일상의 말로 풀어드립니다. 전문 용어는 그 자리에서 풀어주고, 부품은 사진으로 함께 보여줍니다.",
    bullets: [
      "오류 코드 → 현실의 문장으로 자동 변환",
      "난이도 · 예상 시간 · 부품 위치를 함께 안내",
      "단계마다 사진 또는 짧은 영상 제공",
    ],
    visual: "diagnosis",
    accent: "var(--color-accent-amber-dark)",
  },
  {
    n: "03",
    eyebrow: "신뢰도 그라운딩",
    title: "근거 없는 답은 하지 않아요.",
    body: "Tavily Search API로 근거 매뉴얼을 실시간 검색하고, Corrective RAG의 신뢰도 점수 기반 액션 분기를 적용합니다. 출처가 약한 답엔 노란 경고 배지가 자동으로 붙습니다.",
    bullets: [
      "0.95↑ 채택 / 0.5~0.95 경고 / 0.5↓ 재검색",
      "의료·안전 사실 검증에서 표준 RAG +36.6% 정확도",
      "제조사 공식 매뉴얼 · iFixit · Open Repair Data 우선",
    ],
    visual: "trust",
    accent: "var(--color-ok-fg)",
  },
  {
    n: "04",
    eyebrow: "안전 가드",
    title: "위험한 단계 앞에선 멈춥니다.",
    body: "가스 밸브 조작, 고전압 부품, 회전 칼날, 뜨거운 표면 등 사고 위험이 큰 작업 앞에서는 진행을 자동으로 멈춥니다. 사용자가 끝까지 듣고 싶어 해도 만류하고 전문가 호출을 안내합니다.",
    bullets: [
      "4가지 위험 카테고리 자동 식별",
      "대안 단계 또는 전문가 호출 옵션 제공",
      "보험사 안전 도구 연계 검토 중",
    ],
    visual: "safety",
    accent: "var(--color-warn-fg)",
  },
];

export function Features() {
  return (
    <section id="features" className="sec">
      <div className="container-page">
        <div className="eyebrow">
          <span className="dot" />
          FEATURES
        </div>
        <h2 className="h-display" style={{ marginTop: 22 }}>
          네 가지가 함께
          <br />
          작동해요.
        </h2>
        <p className="lead" style={{ marginTop: 20, maxWidth: 620 }}>
          “보고 → 풀어주고 → 출처를 대고 → 위험하면 멈추는” 네 단계가 한 진단 안에 차례로 이어집니다.
        </p>

        <div style={{ marginTop: 80, display: "flex", flexDirection: "column", gap: 80 }}>
          {FEATURES.map((f, i) => (
            <FeatureRow key={f.n} feature={f} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureRow({ feature, flip }: { feature: Feature; flip: boolean }) {
  const text = (
    <div style={{ padding: "20px 0" }}>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 64,
          fontWeight: 800,
          color: feature.accent,
          letterSpacing: "-0.05em",
          lineHeight: 0.85,
          opacity: 0.18,
        }}
        aria-hidden
      >
        {feature.n}
      </div>
      <div
        style={{
          marginTop: -34,
          paddingLeft: 4,
          fontSize: 12,
          fontWeight: 700,
          color: feature.accent,
          letterSpacing: "0.15em",
        }}
      >
        {feature.eyebrow}
      </div>
      <h3
        className="h-display"
        style={{ marginTop: 12, fontSize: "var(--t-d3)", lineHeight: 1.15 }}
      >
        {feature.title}
      </h3>
      <p className="lead" style={{ marginTop: 16, maxWidth: 480 }}>
        {feature.body}
      </p>
      <ul
        style={{
          marginTop: 22,
          padding: 0,
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {feature.bullets.map((b) => (
          <li
            key={b}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              fontSize: 14.5,
              color: "var(--color-brown-700)",
              lineHeight: 1.55,
            }}
          >
            <span
              aria-hidden
              style={{
                flexShrink: 0,
                marginTop: 6,
                width: 6,
                height: 6,
                borderRadius: 99,
                background: feature.accent,
              }}
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const visual = <FeatureVisualBox visual={feature.visual} />;

  return (
    <div
      className="feature-row"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 40,
        alignItems: "center",
        direction: flip ? "rtl" : "ltr",
      }}
    >
      <div style={{ direction: "ltr" }}>{flip ? visual : text}</div>
      <div style={{ direction: "ltr" }}>{flip ? text : visual}</div>
    </div>
  );
}

function FeatureVisualBox({ visual }: { visual: FeatureVisual }) {
  if (visual === "scan") {
    return (
      <div
        className="elev-1"
        style={{
          aspectRatio: "4 / 3",
          borderRadius: 28,
          position: "relative",
          overflow: "hidden",
          background: "radial-gradient(120% 80% at 50% 40%, #5a3b22 0%, #2a1b0f 100%)",
          color: "#fff",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0.9,
          }}
        >
          <WasherIllustration size={220} color="#F0E0CA" error />
        </div>
        <div
          style={{
            position: "absolute",
            top: "22%",
            left: "20%",
            right: "20%",
            bottom: "22%",
            border: "1.5px solid var(--color-peach-300)",
            borderRadius: 6,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -22,
              left: -1,
              padding: "3px 8px",
              background: "var(--color-peach-300)",
              color: "var(--color-brown-700)",
              fontSize: 11,
              fontWeight: 700,
              borderRadius: "4px 4px 4px 0",
            }}
          >
            LG 트롬 드럼세탁기 · 97%
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 18,
            left: 18,
            right: 18,
            padding: "12px 14px",
            background: "rgba(28,18,10,0.78)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(245,225,200,0.18)",
            borderRadius: 14,
          }}
        >
          <div
            style={{
              fontSize: 10.5,
              fontWeight: 700,
              color: "var(--color-peach-300)",
              letterSpacing: "0.15em",
            }}
          >
            실시간 분석
          </div>
          <div style={{ fontSize: 14, fontWeight: 500, marginTop: 4, lineHeight: 1.45 }}>
            디스플레이에 <b style={{ color: "var(--color-accent-amber)" }}>E13 코드</b>가
            떴어요. 잠시만요…
          </div>
        </div>
      </div>
    );
  }

  if (visual === "diagnosis") {
    return (
      <div
        className="elev-1"
        style={{
          aspectRatio: "4 / 3",
          borderRadius: 28,
          background: "#fff",
          padding: 28,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            aria-hidden
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "var(--color-cream-200)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-cal)",
              color: "var(--color-brown-500)",
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            몰?
          </div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "var(--muted-strong)" }}>
            몰루의 진단
          </div>
        </div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 22,
            fontWeight: 700,
            color: "var(--color-brown-700)",
            letterSpacing: "-0.03em",
            lineHeight: 1.35,
          }}
        >
          세탁기 아래 <u>회색 호스</u>에 물이 막혔어요.
          <br />
          1분짜리 영상으로 같이 풀어볼게요.
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {["E13 · 배수 펌프", "난이도 쉬움", "예상 6분"].map((t) => (
            <span
              key={t}
              style={{
                padding: "4px 10px",
                background: "var(--color-cream-200)",
                borderRadius: 99,
                fontSize: 11.5,
                fontWeight: 600,
                color: "var(--muted-strong)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <div
          style={{
            marginTop: "auto",
            paddingTop: 12,
            borderTop: "1px dashed var(--line-strong)",
            fontSize: 12,
            color: "var(--muted)",
          }}
        >
          전문 용어로 보기 — “배수 펌프 임피던스 이상” →
        </div>
      </div>
    );
  }

  if (visual === "trust") {
    return (
      <div
        className="elev-1"
        style={{
          aspectRatio: "4 / 3",
          borderRadius: 28,
          background: "#fff",
          padding: 28,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="84" height="84" viewBox="0 0 92 92" aria-hidden>
            <circle cx="46" cy="46" r="38" stroke="var(--color-cream-300)" strokeWidth="9" fill="none" />
            <circle
              cx="46"
              cy="46"
              r="38"
              stroke="var(--color-ok-fg)"
              strokeWidth="9"
              fill="none"
              strokeDasharray={`${0.92 * Math.PI * 76} ${Math.PI * 76}`}
              strokeLinecap="round"
              transform="rotate(-90 46 46)"
            />
            <text
              x="46"
              y="50"
              textAnchor="middle"
              fontFamily="var(--font-display)"
              fontWeight="800"
              fontSize="22"
              fill="var(--color-brown-700)"
              letterSpacing="-1"
            >
              92%
            </text>
          </svg>
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 20,
                color: "var(--color-brown-700)",
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
              }}
            >
              근거가 충분해요
            </div>
            <div
              style={{
                marginTop: 4,
                fontSize: 12.5,
                color: "var(--muted-strong)",
                lineHeight: 1.55,
              }}
            >
              제조사 공식 매뉴얼 2건 + iFixit 검증 데이터.
              <br />
              <b>CRAG 0.95↑</b> 기준 채택했어요.
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { score: 97, title: "LG 트롬 사용설명서", tier: "high" as const },
            { score: 91, title: "iFixit E13 가이드", tier: "high" as const },
            { score: 68, title: "한국 가전 커뮤니티", tier: "mid" as const },
          ].map((s) => (
            <div
              key={s.title}
              style={{
                padding: "10px 12px",
                borderRadius: 12,
                background: "var(--paper)",
                border: "1px solid var(--line)",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  background: s.tier === "high" ? "var(--color-ok-bg)" : "#FBEFD3",
                  color: s.tier === "high" ? "var(--color-ok-fg)" : "#8A6314",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: 11,
                }}
              >
                {s.score}
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-brown-700)" }}>
                {s.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // safety
  return (
    <div
      className="elev-1"
      style={{
        aspectRatio: "4 / 3",
        borderRadius: 28,
        background: "var(--color-warn-bg)",
        padding: 32,
        display: "flex",
        flexDirection: "column",
        gap: 18,
        border: "1px solid rgba(179,58,29,0.18)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "6px 12px",
          borderRadius: 999,
          background: "var(--color-warn-fg)",
          color: "#fff",
          fontSize: 11.5,
          fontWeight: 800,
          letterSpacing: "0.1em",
          alignSelf: "flex-start",
        }}
      >
        <Icon name="warn" size={14} strokeWidth={2.4} />
        SAFETY GUARD
      </div>
      <div
        className="h-display"
        style={{
          color: "var(--color-warn-fg)",
          fontSize: 30,
          letterSpacing: "-0.03em",
          lineHeight: 1.2,
        }}
      >
        가스 밸브 조작 단계입니다.
        <br />
        진행을 중단해주세요.
      </div>
      <p
        style={{
          fontSize: 14,
          color: "var(--color-brown-700)",
          lineHeight: 1.6,
          maxWidth: 360,
        }}
      >
        이 단계는 비전문가가 직접 다루기엔 위험합니다. 가까운 가스
        안전관리원을 호출하시는 걸 권장해요.
      </p>
      <div style={{ marginTop: "auto", display: "flex", gap: 10, flexWrap: "wrap" }}>
        {["가스", "고전압", "회전 칼날", "뜨거운 표면"].map((t) => (
          <span
            key={t}
            style={{
              padding: "5px 10px",
              borderRadius: 8,
              background: "rgba(179,58,29,0.12)",
              color: "var(--color-warn-fg)",
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
