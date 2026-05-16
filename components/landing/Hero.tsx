import { Icon } from "@/components/ui/Icon";
import { PhoneMockup } from "@/components/landing/PhoneMockup";

const TRUST_TAGS = [
  "GEMINI 3.1 PRO",
  "TAVILY SEARCH",
  "iFixit MyFixit",
  "HowTo100M",
  "AI-HUB KOREA",
  "CRAG (arXiv:2401.15884)",
];

export function Hero() {
  return (
    <section
      id="top"
      className="paper-bg"
      style={{
        paddingTop: 84,
        paddingBottom: 60,
        overflow: "hidden",
      }}
    >
      <div
        className="container-page hero-grid"
        style={{
          display: "grid",
          gap: 60,
          alignItems: "center",
        }}
      >
        {/* LEFT */}
        <div className="fade">
          <div className="eyebrow" style={{ marginBottom: 24 }}>
            <span className="dot" />
            2026 LIKELION UNIV. 14TH IDEATHON · TEAM 5
          </div>

          <h1
            style={{
              fontFamily: "var(--font-cal)",
              fontSize: "var(--t-d1)",
              fontWeight: 700,
              color: "var(--color-brown-500)",
              letterSpacing: "-0.04em",
              margin: 0,
              transform: "rotate(-3deg)",
              display: "inline-block",
              lineHeight: 0.95,
            }}
            aria-label="몰루?"
          >
            몰루
            <span
              style={{
                display: "inline-block",
                transform: "translate(-6px,-18px) rotate(8deg)",
              }}
            >
              ?
            </span>
          </h1>

          <p
            className="h-display"
            style={{
              marginTop: 8,
              fontSize: "var(--t-d2)",
              lineHeight: 1.05,
            }}
          >
            방법을 알려줄게.
          </p>

          <p className="lead" style={{ marginTop: 22, maxWidth: 520 }}>
            세탁기 에러코드, 컴퓨터 부품 교체, 가구 조립.
            <br />
            “이거 어떻게 하지...” 멈칫하는 순간, 스마트폰으로 비추기만 하세요.
            멀티모달 AI가 직접 보고 어디가 평소와 다른지 짚어드립니다.
          </p>

          <div
            style={{
              marginTop: 32,
              display: "flex",
              gap: 12,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <a href="#demo" className="btn btn--accent">
              <Icon name="play" size={16} strokeWidth={2.5} />
              AI 진단 체험해보기
            </a>
            <a href="#how" className="btn btn--ghost">
              어떻게 작동하나요?
            </a>
          </div>

          <div
            style={{
              marginTop: 40,
              display: "flex",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 99,
                  background: "var(--color-ok-fg)",
                }}
                aria-hidden
              />
              <span
                style={{
                  fontSize: 13,
                  color: "var(--muted-strong)",
                  fontWeight: 500,
                }}
              >
                Gemini 3.1 Pro · 2026.05 멀티모달 1위
              </span>
            </div>
            <span
              aria-hidden
              style={{
                width: 1,
                height: 14,
                background: "var(--line-strong)",
              }}
            />
            <span
              style={{
                fontSize: 13,
                color: "var(--muted-strong)",
                fontWeight: 500,
              }}
            >
              CRAG 신뢰도 분기 적용
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="fade fade-2 hero-mock"
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 760,
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              width: 540,
              height: 540,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, var(--color-peach-200) 0%, transparent 65%)",
              top: 60,
              left: "50%",
              transform: "translateX(-50%)",
              opacity: 0.7,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 30,
              right: 0,
              padding: "6px 14px",
              background: "var(--color-cream-200)",
              border: "1.5px solid rgba(74,46,24,0.4)",
              transform: "rotate(6deg)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "var(--color-brown-700)",
            }}
          >
            SCREEN 01 · SPLASH
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 40,
              left: -20,
              padding: "10px 14px",
              background: "#fff",
              border: "1px solid var(--line)",
              borderRadius: 16,
              transform: "rotate(-3deg)",
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "var(--font-ui)",
              boxShadow: "0 6px 14px rgba(74,46,24,0.08)",
              zIndex: 1,
            }}
            role="note"
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 10,
                background: "var(--color-cream-200)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-brown-500)",
                fontFamily: "var(--font-cal)",
                fontWeight: 700,
                fontSize: 16,
              }}
              aria-hidden
            >
              몰?
            </div>
            <div>
              <div
                style={{
                  fontSize: 12.5,
                  fontWeight: 700,
                  color: "var(--color-brown-700)",
                }}
              >
                회색 호스에 물이 막혔어요
              </div>
              <div
                style={{ fontSize: 11, color: "var(--muted)" }}
              >
                매뉴얼: “E13 임피던스 이상”
              </div>
            </div>
          </div>

          <div style={{ transform: "scale(0.82)", transformOrigin: "center" }}>
            <PhoneMockup />
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div
        className="container-page"
        style={{
          marginTop: 60,
          paddingTop: 32,
          borderTop: "1px solid var(--line)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            flexWrap: "wrap",
            fontFamily: "var(--font-ui)",
            fontSize: 12,
            color: "var(--muted-strong)",
            letterSpacing: "0.08em",
            fontWeight: 600,
          }}
        >
          <span style={{ color: "var(--muted)" }}>POWERED BY</span>
          {TRUST_TAGS.map((t, i) => (
            <span
              key={t}
              style={{ display: "inline-flex", alignItems: "center", gap: 18 }}
            >
              <span>{t}</span>
              {i < TRUST_TAGS.length - 1 && (
                <span aria-hidden style={{ opacity: 0.3 }}>
                  /
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
