import { WasherIllustration } from "@/components/illustrations/Washer";
import { MolluLogo } from "@/components/ui/MolluLogo";

export function PhoneMockup() {
  const frameW = 360;
  const frameH = 720;
  return (
    <div
      style={{
        width: frameW,
        height: frameH,
        borderRadius: 56,
        background: "#1c130b",
        padding: 9,
        boxShadow:
          "0 30px 60px -20px rgba(74, 46, 24, 0.35), 0 12px 24px -12px rgba(74, 46, 24, 0.25)",
        position: "relative",
      }}
      role="img"
      aria-label="몰루? 앱 스플래시 화면"
    >
      {/* Notch */}
      <div
        style={{
          position: "absolute",
          top: 18,
          left: "50%",
          transform: "translateX(-50%)",
          width: 110,
          height: 28,
          borderRadius: 18,
          background: "#000",
          zIndex: 2,
        }}
      />
      {/* Screen */}
      <div
        className="paper-bg"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 48,
          overflow: "hidden",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "78px 24px 36px",
        }}
      >
        {/* Status time */}
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 28,
            fontFamily: "var(--font-ui)",
            fontWeight: 600,
            fontSize: 14,
            color: "var(--color-brown-700)",
          }}
        >
          9:41
        </div>

        {/* Eyebrow */}
        <div
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.28em",
            color: "var(--muted-strong)",
            marginBottom: 28,
          }}
        >
          AI THAT SEES WHAT YOU SEE
        </div>

        {/* Subject illustration with soft halo */}
        <div style={{ position: "relative", marginTop: 16, marginBottom: 36 }}>
          <div
            style={{
              position: "absolute",
              inset: -28,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, var(--color-peach-200) 0%, transparent 70%)",
              opacity: 0.7,
            }}
          />
          <WasherIllustration
            size={180}
            color="var(--color-brown-500)"
            error
          />
        </div>

        {/* Logo + subtitle */}
        <div style={{ textAlign: "center" }}>
          <MolluLogo size={72} variant="mark" />
          <div
            style={{
              marginTop: 16,
              fontFamily: "var(--font-display)",
              fontSize: 22,
              fontWeight: 800,
              color: "var(--color-brown-700)",
              letterSpacing: "-0.03em",
            }}
          >
            방법을 알려줄게.
          </div>
          <div
            style={{
              marginTop: 8,
              fontFamily: "var(--font-ui)",
              fontSize: 12,
              color: "var(--muted-strong)",
            }}
          >
            비추기만 하세요. AI가 직접 봅니다.
          </div>
        </div>

        {/* Bottom version chip */}
        <div style={{ flex: 1 }} />
        <div
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: 11,
            color: "var(--muted)",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span>v 1.0.2</span>
          <span style={{ width: 4, height: 4, background: "var(--muted)", borderRadius: 99 }} />
          <span>Powered by Gemini 3.1</span>
        </div>
      </div>
    </div>
  );
}
