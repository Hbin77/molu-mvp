import { Icon } from "@/components/ui/Icon";

const LINKS = [
  { id: "problem", label: "문제" },
  { id: "how", label: "작동 방식" },
  { id: "demo", label: "데모" },
  { id: "features", label: "기능" },
  { id: "tech", label: "기술" },
  { id: "price", label: "가격" },
  { id: "team", label: "팀" },
];

export function WebNav() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(14px) saturate(140%)",
        WebkitBackdropFilter: "blur(14px) saturate(140%)",
        background: "rgba(253, 250, 243, 0.78)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        className="container-page"
        style={{
          height: 72,
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <a
          href="#top"
          style={{
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "baseline",
            gap: 8,
          }}
          aria-label="몰루 홈으로"
        >
          <span
            style={{
              fontFamily: "var(--font-cal)",
              fontSize: 30,
              fontWeight: 700,
              color: "var(--color-brown-500)",
              letterSpacing: "-0.04em",
              transform: "rotate(-3deg)",
              display: "inline-block",
            }}
          >
            몰루?
          </span>
        </a>
        <div style={{ flex: 1 }} />
        <nav
          aria-label="주요 메뉴"
          className="hide-on-small"
          style={{ gap: 18 }}
        >
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#demo"
          className="btn btn--primary"
          style={{ height: 44, padding: "0 18px", fontSize: 13.5 }}
        >
          <Icon name="camera" size={16} strokeWidth={2.2} />
          데모 사용해 보기
        </a>
      </div>
    </header>
  );
}
