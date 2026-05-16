const TEAM = [
  {
    name: "박현빈",
    role: "기획 · PM · 인프라",
    tools: "Docker · Cloudflare Tunnel · CI/CD · 사업화",
    initial: "박",
  },
  {
    name: "서예슬",
    role: "프론트엔드",
    tools: "React Native (iOS/Android) · TypeScript",
    initial: "서",
  },
  {
    name: "허찬",
    role: "백엔드 · AI",
    tools: "FastAPI · Gemini 3.1 · Tavily Search",
    initial: "허",
  },
  {
    name: "김민수",
    role: "백엔드 · AI",
    tools: "LoRA 파인튜닝 · RAG 파이프라인",
    initial: "김",
  },
  { name: "정연수", role: "디자인 · UX", tools: "Figma · 모바일 UI · 브랜딩", initial: "정" },
];

export function Team() {
  return (
    <section id="team" className="sec sec--paper">
      <div className="container-page">
        <div className="eyebrow">
          <span className="dot" />
          TEAM · LIKELION SCNU · 5
        </div>
        <h2 className="h-display" style={{ marginTop: 22 }}>
          만드는 사람들.
        </h2>

        <div
          className="grid-5"
          style={{
            marginTop: 50,
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 14,
          }}
        >
          {TEAM.map((m) => (
            <div
              key={m.name}
              style={{
                padding: 22,
                background: "#fff",
                borderRadius: 22,
                border: "1px solid var(--line)",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                minHeight: 220,
              }}
            >
              <div
                aria-hidden
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "var(--color-cream-200)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-cal)",
                  fontSize: 28,
                  color: "var(--color-brown-500)",
                  fontWeight: 700,
                }}
              >
                {m.initial}
              </div>
              <div>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: "var(--color-brown-700)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {m.name}
                </div>
                <div
                  style={{
                    marginTop: 3,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--color-accent-amber-dark)",
                  }}
                >
                  {m.role}
                </div>
              </div>
              <div
                style={{
                  fontSize: 11.5,
                  color: "var(--muted-strong)",
                  lineHeight: 1.55,
                  marginTop: "auto",
                }}
              >
                {m.tools}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
