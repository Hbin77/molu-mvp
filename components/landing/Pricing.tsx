import { Icon } from "@/components/ui/Icon";

type CompareTone = "muted" | "accent" | "ok";

function CompareRow({ label, amt, tone }: { label: string; amt: string; tone: CompareTone }) {
  const c =
    tone === "accent"
      ? "var(--color-accent-amber-dark)"
      : tone === "ok"
        ? "var(--color-ok-fg)"
        : "var(--muted-strong)";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 10,
      }}
    >
      <span style={{ fontSize: 13.5, color: "var(--color-brown-700)" }}>{label}</span>
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 18,
          fontWeight: 800,
          color: c,
          letterSpacing: "-0.02em",
        }}
      >
        {amt}
      </span>
    </div>
  );
}

export function Pricing() {
  return (
    <section id="price" className="sec">
      <div className="container-page">
        <div className="eyebrow">
          <span className="dot" />
          PRICING
        </div>
        <h2 className="h-display" style={{ marginTop: 22 }}>
          수리는 매달 발생하지 않아요.
          <br />
          그래서 <span className="accent">건당 결제.</span>
        </h2>
        <p className="lead" style={{ marginTop: 20, maxWidth: 600 }}>
          평소엔 부담 없이 설치만 해두고, 필요한 순간에만 결제합니다. 한 번의 사용만으로도 AS
          출장비 대비 절감 효과가 명확합니다.
        </p>

        <div
          className="pricing-grid"
          style={{
            marginTop: 60,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1.2fr",
            gap: 18,
          }}
        >
          {/* Single */}
          <div
            className="elev-1"
            style={{
              padding: 36,
              background: "#fff",
              borderRadius: 28,
              border: "1px solid var(--line)",
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--color-brown-600)",
                letterSpacing: "0.12em",
              }}
            >
              SINGLE
            </div>
            <div
              style={{
                marginTop: 10,
                fontFamily: "var(--font-display)",
                fontSize: 56,
                fontWeight: 800,
                color: "var(--color-brown-700)",
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              ₩1,900
            </div>
            <div style={{ marginTop: 6, fontSize: 14, color: "var(--muted-strong)" }}>
              1회 진단
            </div>
            <ul
              style={{
                marginTop: 24,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                fontSize: 14,
                color: "var(--color-brown-700)",
              }}
            >
              {["카메라 진단 1회", "단계별 가이드 + 안전 가드", "근거 매뉴얼 출처 표시"].map(
                (t) => (
                  <li key={t} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <Icon name="check" size={16} color="var(--color-ok-fg)" strokeWidth={2.4} />
                    {t}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Pack */}
          <div
            className="elev-2"
            style={{
              padding: 36,
              background: "var(--color-brown-700)",
              color: "#fff",
              borderRadius: 28,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                padding: "5px 11px",
                borderRadius: 999,
                background: "var(--color-accent-amber)",
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.1em",
                color: "#fff",
              }}
            >
              17% OFF
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--color-peach-300)",
                letterSpacing: "0.12em",
              }}
            >
              PACK · 5
            </div>
            <div
              style={{
                marginTop: 10,
                fontFamily: "var(--font-display)",
                fontSize: 56,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              ₩7,900
            </div>
            <div style={{ marginTop: 6, fontSize: 14, opacity: 0.7 }}>
              5회 묶음 · 1회당 ₩1,580
            </div>
            <ul
              style={{
                marginTop: 24,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                fontSize: 14,
              }}
            >
              {[
                "카메라 진단 5회",
                "재진단 무료 (24h 이내)",
                "결제 수수료 포함",
                "진단 기록 무제한 보관",
              ].map((t) => (
                <li key={t} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Icon
                    name="check"
                    size={16}
                    color="var(--color-peach-300)"
                    strokeWidth={2.4}
                  />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Compare card */}
          <div
            style={{
              padding: 36,
              background: "var(--color-cream-200)",
              borderRadius: 28,
              position: "relative",
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--color-brown-600)",
                letterSpacing: "0.12em",
              }}
            >
              VS · AS 출장비
            </div>
            <div
              style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 14 }}
            >
              <CompareRow label="삼성 · LG AS 출장비 (평절기)" amt="28,000원~" tone="muted" />
              <CompareRow label="성수기" amt="33,000원~" tone="muted" />
              <CompareRow label="부품비 · 수리비 별도" amt="5~10만원" tone="muted" />
              <div
                aria-hidden
                style={{ height: 1, background: "var(--line-strong)", margin: "4px 0" }}
              />
              <CompareRow label="몰루? 한 번" amt="1,900원" tone="accent" />
              <CompareRow label="실제 차이" amt="−93%" tone="ok" />
            </div>
            <div
              style={{
                marginTop: 22,
                fontSize: 12,
                color: "var(--muted-strong)",
                lineHeight: 1.5,
              }}
            >
              API · 검색 원가는 결제가의 <b>3% 미만</b>으로, 결제 수수료 제외해도 안정적인
              마진.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
