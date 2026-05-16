import { Icon } from "@/components/ui/Icon";

export function Demo() {
  return (
    <section id="demo" className="sec sec--cream2">
      <div className="container-page">
        <div className="eyebrow">
          <span className="dot" />
          LIVE DEMO
        </div>
        <h2 className="h-display" style={{ marginTop: 22 }}>
          사진 업로드 → AI 진단.
          <br />
          <span className="accent">곧 공개됩니다.</span>
        </h2>
        <p className="lead" style={{ marginTop: 20, maxWidth: 620 }}>
          본선 데모에서는 가전 사진을 업로드하면 Gemini 3.1 Pro가 직접 보고, Tavily가 매뉴얼을
          찾고, CRAG가 신뢰도 점수를 매겨 한국어로 풀어줍니다. 지금은 인프라 준비 단계라
          곧 이 자리에 진짜 업로더가 들어옵니다.
        </p>

        <div
          className="elev-1"
          style={{
            marginTop: 48,
            padding: 56,
            background: "#fff",
            borderRadius: 28,
            border: "2px dashed var(--line-strong)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 18,
            textAlign: "center",
          }}
        >
          <div
            aria-hidden
            style={{
              width: 88,
              height: 88,
              borderRadius: 24,
              background: "var(--color-cream-200)",
              color: "var(--color-brown-500)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="camera" size={44} strokeWidth={1.6} />
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 24,
              color: "var(--color-brown-700)",
              letterSpacing: "-0.02em",
            }}
          >
            업로더 준비 중
          </div>
          <p
            style={{
              maxWidth: 480,
              fontSize: 14,
              color: "var(--muted-strong)",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            본선 전까지 백엔드(FastAPI + Gemini 3.1 Pro + Tavily + CRAG)와
            연결해 실제 진단 결과를 보여드릴 예정입니다. 그동안은 위쪽 “기능” 섹션에서 흐름을
            먼저 확인해보세요.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 4 }}>
            <a href="#features" className="btn btn--primary" style={{ height: 44 }}>
              기능 보기
            </a>
            <a href="#tech" className="btn btn--ghost" style={{ height: 44 }}>
              기술 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
