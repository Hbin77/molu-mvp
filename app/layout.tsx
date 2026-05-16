import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://molu.likelionscnu.site";
const SITE_NAME = "몰루?";
const TITLE = "몰루? — 방법을 알려줄게.";
const DESCRIPTION =
  "스마트폰으로 비추기만 하세요. 멀티모달 AI(Gemini 3.1 Pro)가 화면을 직접 보고 어디가 다른지 짚어드립니다. 세탁기 에러 코드, PC 부품 교체, 가구 조립 — 멈칫하는 순간 옆에 있어요.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · 몰루?",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "LikeLion_SCNU Team 5" }],
  keywords: [
    "몰루",
    "AI 가이드",
    "Gemini 3.1 Pro",
    "멀티모달 AI",
    "수리 도우미",
    "DIY AI",
    "Skill Gap",
    "멋쟁이사자처럼 아이디어톤",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "ko_KR",
    type: "website",
    // images: app/opengraph-image.jpg is picked up automatically by file convention
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    // images: app/twitter-image.jpg is picked up automatically
  },
  robots: {
    index: true,
    follow: true,
  },
  // app/icon.png, app/apple-icon.png, app/favicon.ico are auto-detected
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
