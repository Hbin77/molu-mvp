import { Icon } from "@/components/ui/Icon";

export function Footer() {
  return (
    <section
      className="sec sec--dark"
      style={{ paddingTop: 100, paddingBottom: 80, position: "relative", overflow: "hidden" }}
    >
      <div className="container-page" style={{ position: "relative" }}>
        <div style={{ maxWidth: 780 }}>
          <h2
            style={{
              fontFamily: "var(--font-cal)",
              fontSize: "var(--t-d1)",
              fontWeight: 700,
              color: "var(--color-peach-300)",
              letterSpacing: "-0.04em",
              margin: 0,
              transform: "rotate(-3deg)",
              display: "inline-block",
              lineHeight: 0.9,
            }}
            aria-label="몰루?"
          >
            몰루?
          </h2>
          <p
            className="h-display"
            style={{ marginTop: 16, fontSize: "var(--t-d2)" }}
          >
            이제, 멈칫하지 말아요.
          </p>
          <p className="lead" style={{ marginTop: 18, maxWidth: 540 }}>
            본선까지 서비스 소개와 핵심 기능 시연을 겸한 웹 프로토타입을 배포합니다. 사진 업로드
            기반 AI 진단 데모를 통해 “몰루?”의 가치와 차별성을 직접 체험해보세요.
          </p>
          <div style={{ marginTop: 30, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#demo" className="btn btn--accent">
              <Icon name="play" size={16} strokeWidth={2.5} />
              AI 진단 체험해보기
            </a>
            <a
              href="#features"
              className="btn btn--ghost"
              style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}
            >
              기능 다시 보기
            </a>
          </div>
        </div>
      </div>

      <div
        className="container-page"
        style={{
          marginTop: 80,
          paddingTop: 30,
          borderTop: "1px solid rgba(255,255,255,0.12)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
          fontSize: 12,
          color: "rgba(255,255,255,0.55)",
          letterSpacing: "-0.01em",
        }}
      >
        <div>© 2026 LikeLion University 14th Ideathon · Team 5</div>
        <div style={{ display: "flex", gap: 18, letterSpacing: "0.05em" }}>
          <a
            href="https://github.com/Hbin77/molu-mvp"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            GitHub
          </a>
          <span aria-hidden style={{ opacity: 0.4 }}>
            ·
          </span>
          <span>몰루? v1.0.2</span>
          <span aria-hidden style={{ opacity: 0.4 }}>
            ·
          </span>
          <span>Powered by Gemini 3.1 · Tavily · CRAG</span>
        </div>
      </div>
    </section>
  );
}
