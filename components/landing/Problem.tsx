import { Icon, type IconName } from "@/components/ui/Icon";

const STATS = [
  { big: "36.1%", sub: "한국 1인 가구 비중", note: "804만 5천 가구 · 역대 최대 (국가데이터처 2025)" },
  { big: "28,000원~", sub: "AS 출장비 1회", note: "부품·수리비 별도 — 단순 문제도 5~10만 원" },
  { big: "19.8%", sub: "70세 이상 1인 가구", note: "옆에서 도와줄 사람이 사라지고 있어요" },
];

const MOMENTS: { icon: IconName; title: string; q: string }[] = [
  { icon: "sparkle", title: "세탁기 에러 코드", q: "“E13이 뭐야...” 매뉴얼은 알아들을 수 없는 말뿐" },
  { icon: "bolt", title: "PC 부품 교체", q: "“이 슬롯이 맞나?” 영상 속 PC와 내 PC가 같은지 확신이 없어요" },
  { icon: "book", title: "가구 조립", q: "“6번 나사가 안 맞아요” 설명서엔 그런 경우가 없어요" },
  { icon: "shield", title: "보일러 멈춤", q: "AS 부르긴 부담스럽고, 잘못 만지면 더 무서워요" },
];

export function Problem() {
  return (
    <section id="problem" className="sec sec--cream2">
      <div className="container-page">
        <div className="eyebrow">
          <span className="dot" />
          THE PROBLEM
        </div>
        <h2 className="h-display" style={{ marginTop: 22, maxWidth: 800 }}>
          옆에서 도와줄 사람이
          <br />
          점점 <span className="accent">사라지고 있어요.</span>
        </h2>
        <p className="lead" style={{ marginTop: 22, maxWidth: 640 }}>
          유튜브로 해결을 시도해도 영상 속 상황과 내 상황이 같은지 확신할 방법이 없고,
          무턱대고 따라 하다 가스 · 전기 · 칼날에 다치는 사고도 끊이지 않습니다.
        </p>

        <div
          className="grid-3"
          style={{
            marginTop: 60,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              className="elev-1"
              style={{
                background: "#fff",
                borderRadius: 24,
                padding: 32,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 56,
                  fontWeight: 800,
                  color: "var(--color-brown-700)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                }}
              >
                {s.big}
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "var(--color-brown-700)" }}>
                {s.sub}
              </div>
              <div style={{ fontSize: 13, color: "var(--muted-strong)", lineHeight: 1.55 }}>
                {s.note}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 80 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
            <h3 className="h-display" style={{ fontSize: "var(--t-d3)" }}>
              그 멈칫하는 순간들
            </h3>
            <div
              style={{
                flex: 1,
                height: 1,
                background: "var(--line)",
                position: "relative",
                top: -8,
              }}
              aria-hidden
            />
          </div>
          <div
            className="grid-4"
            style={{
              marginTop: 28,
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 14,
            }}
          >
            {MOMENTS.map((m, i) => (
              <div
                key={i}
                style={{
                  padding: 22,
                  background: "var(--paper)",
                  borderRadius: 20,
                  border: "1px solid var(--line)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  minHeight: 200,
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: "var(--color-cream-200)",
                    color: "var(--color-brown-600)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon name={m.icon} size={22} strokeWidth={1.8} />
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{ fontSize: 15, fontWeight: 700, color: "var(--color-brown-700)" }}
                  >
                    {m.title}
                  </div>
                  <div
                    style={{
                      marginTop: 8,
                      fontFamily: "var(--font-serif)",
                      fontSize: 14.5,
                      lineHeight: 1.5,
                      color: "var(--color-brown-700)",
                      fontStyle: "italic",
                    }}
                  >
                    {m.q}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
