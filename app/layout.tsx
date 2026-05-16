import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "몰루? — AI가 직접 봅니다",
  description:
    "스마트폰으로 비추기만 하세요. 멀티모달 AI가 화면을 직접 보고 어디가 다른지 짚어드립니다. — 2026 멋쟁이사자처럼 대학 14기 아이디어톤 · LikeLion_SCNU 5팀",
  openGraph: {
    title: "몰루? — 방법을 알려줄게.",
    description:
      "세탁기 에러 코드, PC 부품 교체, 가구 조립. 멈칫하는 순간 AI가 옆에 있어요.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
