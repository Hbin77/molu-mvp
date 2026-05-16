const LAYERS = [
  {
    n: "01",
    title: "Gemini 3.1 Pro",
    sub: "멀티모달 백본",
    desc: "2026년 5월 기준 멀티모달 벤치마크 1위. 사전학습 비용 없이 그대로 활용합니다.",
    tag: "BASE",
  },
  {
    n: "02",
    title: "LoRA 파인튜닝",
    sub: "수리·DIY 도메인",
    desc: "Low-Rank Adaptation으로 수리 매뉴얼 도메인에 적응. 산업 유지보수 매뉴얼 생성에서 정확도 91.59% 달성 (arXiv:2411.04476).",
    tag: "TUNE",
  },
  {
    n: "03",
    title: "CRAG + Tavily",
    sub: "실시간 RAG 파이프라인",
    desc: "신제품·새 에러 코드는 재학습 없이 Tavily가 공식 문서를 실시간 검색해 보강. 신뢰도 점수 기반 액션 분기로 환각을 차단합니다.",
    tag: "GROUND",
  },
];

const DATASETS = [
  { name: "MyFixit Dataset", meta: "31,601개 수리 매뉴얼 · 15개 기기 카테고리 · LREC 2020" },
  { name: "Open Repair Data", meta: "15년치 20만 건 이상의 실제 수리 기록 · 표준화된 스키마" },
  { name: "HowTo100M", meta: "유튜브 작업 영상 1.2M개 · 자막 포함 · 23k 활동" },
  { name: "AI-Hub Korea", meta: "가전 사용 모션 캡처 · 손동작 3D · Korpora 한국어 코퍼스" },
];

export function Tech() {
  return (
    <section id="tech" className="sec sec--cream2">
      <div className="container-page">
        <div className="eyebrow">
          <span className="dot" />
          TECH
        </div>
        <h2 className="h-display" style={{ marginTop: 22 }}>
          3단계 파이프라인 +
          <br />
          4개의 학습 데이터.
        </h2>
        <p className="lead" style={{ marginTop: 20, maxWidth: 620 }}>
          처음부터 모델을 학습하지 않습니다. 검증된 백본 위에 도메인을 얹고,
          출시 이후의 변화는 실시간 검색으로 보강합니다.
        </p>

        <div
          className="grid-3"
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
        >
          {LAYERS.map((l) => (
            <div
              key={l.n}
              className="elev-1"
              style={{
                padding: 28,
                background: "#fff",
                borderRadius: 24,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 22,
                  right: 22,
                  padding: "4px 10px",
                  borderRadius: 6,
                  background: "var(--color-cream-300)",
                  fontSize: 10.5,
                  fontWeight: 800,
                  color: "var(--color-brown-700)",
                  letterSpacing: "0.15em",
                }}
              >
                {l.tag}
              </div>
              <div
                aria-hidden
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 56,
                  fontWeight: 800,
                  color: "var(--color-brown-700)",
                  letterSpacing: "-0.05em",
                  lineHeight: 0.9,
                  opacity: 0.18,
                }}
              >
                {l.n}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    fontWeight: 800,
                    color: "var(--color-brown-700)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.2,
                  }}
                >
                  {l.title}
                </div>
                <div
                  style={{
                    marginTop: 4,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--color-accent-amber-dark)",
                  }}
                >
                  {l.sub}
                </div>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 13.5,
                  lineHeight: 1.6,
                  color: "var(--muted-strong)",
                }}
              >
                {l.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 60 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
            <h3 className="h-display" style={{ fontSize: "var(--t-d3)" }}>
              학습 데이터 — 4 갈래
            </h3>
            <div
              aria-hidden
              style={{
                flex: 1,
                height: 1,
                background: "var(--line)",
                position: "relative",
                top: -8,
              }}
            />
          </div>
          <div
            className="grid-2"
            style={{
              marginTop: 22,
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 14,
            }}
          >
            {DATASETS.map((d, i) => (
              <div
                key={d.name}
                style={{
                  padding: 22,
                  background: "var(--paper)",
                  borderRadius: 18,
                  border: "1px solid var(--line)",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    fontWeight: 800,
                    color: "var(--color-brown-500)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    width: 36,
                    flexShrink: 0,
                  }}
                >
                  0{i + 1}
                </div>
                <div>
                  <div
                    style={{ fontSize: 15.5, fontWeight: 700, color: "var(--color-brown-700)" }}
                  >
                    {d.name}
                  </div>
                  <div
                    style={{
                      marginTop: 4,
                      fontSize: 13,
                      color: "var(--muted-strong)",
                      lineHeight: 1.55,
                    }}
                  >
                    {d.meta}
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
