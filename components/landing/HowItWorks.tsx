import { Icon } from "@/components/ui/Icon";
import { WasherIllustration } from "@/components/illustrations/Washer";

type Kind = "camera" | "scan" | "guide";

const STEPS: { n: string; title: string; desc: string; visual: Kind }[] = [
  {
    n: "01",
    title: "비추기",
    desc: "카메라로 문제 상황을 그대로 비춥니다. 따로 검색어를 떠올리지 않아도 됩니다.",
    visual: "camera",
  },
  {
    n: "02",
    title: "AI가 직접 봐요",
    desc: "Gemini 3.1 Pro가 화면을 그대로 봅니다. “이 기기가 무엇이고, 어디가 다른지” 즉시 식별.",
    visual: "scan",
  },
  {
    n: "03",
    title: "쉽게 풀어 줘요",
    desc: "“E13 임피던스 이상” → “회색 호스가 막혔어요.” 위험 단계는 자동으로 멈춥니다.",
    visual: "guide",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="sec">
      <div className="container-page">
        <div className="eyebrow">
          <span className="dot" />
          HOW IT WORKS
        </div>
        <h2 className="h-display" style={{ marginTop: 22 }}>
          <span style={{ fontFamily: "var(--font-cal)", fontSize: "1.1em", color: "var(--color-brown-500)" }}>
            비추면 끝.
          </span>
          <br />
          그 다음은 몰루가 합니다.
        </h2>

        <div
          className="grid-3"
          style={{
            marginTop: 70,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 28,
          }}
        >
          {STEPS.map((s) => (
            <div key={s.n} style={{ display: "flex", flexDirection: "column" }}>
              <HowVisual kind={s.visual} />
              <div
                style={{
                  marginTop: 22,
                  fontFamily: "var(--font-display)",
                  fontSize: 14,
                  fontWeight: 800,
                  color: "var(--color-accent-amber-dark)",
                  letterSpacing: "0.1em",
                }}
              >
                STEP {s.n}
              </div>
              <h3
                style={{
                  marginTop: 6,
                  fontFamily: "var(--font-display)",
                  fontSize: 28,
                  fontWeight: 800,
                  color: "var(--color-brown-700)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.15,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  marginTop: 10,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "var(--muted-strong)",
                  letterSpacing: "-0.01em",
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowVisual({ kind }: { kind: Kind }) {
  if (kind === "camera") {
    return (
      <div
        className="elev-1"
        style={{
          aspectRatio: "4 / 3",
          borderRadius: 24,
          background: "var(--paper-2)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 160,
            height: 250,
            borderRadius: 22,
            background: "#fff",
            border: "4px solid var(--color-brown-700)",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: "rotate(-6deg)",
          }}
          aria-hidden
        >
          <div
            style={{
              position: "absolute",
              top: 8,
              left: "50%",
              transform: "translateX(-50%)",
              width: 60,
              height: 18,
              borderRadius: 10,
              background: "var(--color-brown-700)",
            }}
          />
          <div
            style={{
              width: 90,
              height: 90,
              borderRadius: "50%",
              background: "var(--color-brown-500)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
            }}
          >
            <Icon name="camera" size={36} strokeWidth={1.8} />
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            right: -10,
            bottom: -8,
            opacity: 0.9,
            transform: "rotate(8deg)",
          }}
        >
          <WasherIllustration size={140} color="var(--color-brown-500)" error />
        </div>
      </div>
    );
  }
  if (kind === "scan") {
    return (
      <div
        className="elev-1"
        style={{
          aspectRatio: "4 / 3",
          borderRadius: 24,
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
          <WasherIllustration size={180} color="#F0E0CA" error />
        </div>
        <div
          style={{
            position: "absolute",
            top: "24%",
            left: "20%",
            right: "20%",
            bottom: "24%",
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
              fontSize: 10.5,
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
            bottom: 16,
            left: 16,
            right: 16,
            padding: "10px 12px",
            background: "rgba(28,18,10,0.75)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(245,225,200,0.18)",
            borderRadius: 12,
          }}
        >
          <div
            style={{
              fontSize: 9.5,
              fontWeight: 700,
              color: "var(--color-peach-300)",
              letterSpacing: "0.15em",
            }}
          >
            실시간 분석
          </div>
          <div style={{ fontSize: 12.5, fontWeight: 500, marginTop: 3, lineHeight: 1.4 }}>
            디스플레이에 <b style={{ color: "var(--color-accent-amber)" }}>E13 코드</b>가 떴어요.
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className="elev-1"
      style={{
        aspectRatio: "4 / 3",
        borderRadius: 24,
        background: "#fff",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div
          style={{
            width: 26,
            height: 26,
            borderRadius: "50%",
            background: "var(--color-cream-200)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-cal)",
            color: "var(--color-brown-500)",
            fontWeight: 700,
            fontSize: 13,
          }}
          aria-hidden
        >
          몰?
        </div>
        <div style={{ fontSize: 11, fontWeight: 600, color: "var(--muted-strong)" }}>
          몰루의 진단
        </div>
        <div style={{ flex: 1 }} />
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            padding: "3px 8px",
            borderRadius: 999,
            background: "var(--color-ok-bg)",
            color: "var(--color-ok-fg)",
            fontSize: 10.5,
            fontWeight: 700,
          }}
        >
          <Icon name="check" size={11} strokeWidth={2.5} />
          96%
        </div>
      </div>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 18,
          fontWeight: 700,
          color: "var(--color-brown-700)",
          letterSpacing: "-0.03em",
          lineHeight: 1.35,
        }}
      >
        회색 호스에 물이 막혔어요.
        <br />
        1분짜리 영상으로 같이 풀어볼게요.
      </div>
      <div
        style={{
          marginTop: 4,
          padding: "10px 12px",
          background: "var(--color-warn-bg)",
          borderRadius: 12,
          display: "flex",
          alignItems: "flex-start",
          gap: 10,
        }}
      >
        <div style={{ color: "var(--color-warn-fg)", marginTop: 2 }}>
          <Icon name="warn" size={16} strokeWidth={2.2} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-warn-fg)" }}>
            안전 가드 작동
          </div>
          <div style={{ fontSize: 11, color: "var(--color-brown-700)", marginTop: 2 }}>
            물이 0.5L 정도 쏟아질 수 있어요.
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {["전원 끄고 1분 대기", "회색 호스 점검", "필터 손잡이 풀기"].map((t, i) => (
          <div
            key={t}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 12,
              color: "var(--color-brown-700)",
            }}
          >
            <span
              style={{
                width: 16,
                height: 16,
                borderRadius: 99,
                background: i === 0 ? "var(--color-ok-bg)" : "var(--color-cream-200)",
                color: i === 0 ? "var(--color-ok-fg)" : "var(--muted-strong)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 9,
                fontWeight: 700,
              }}
            >
              {i === 0 ? "✓" : i + 1}
            </span>
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}
