import Image from "next/image";

// Designer-provided splash mockup (uploads/목업1.png, 467 × 880).
// Replaces the previous hand-built phone frame.
export function PhoneMockup() {
  return (
    <Image
      src="/mockups/splash-a.png"
      width={467}
      height={880}
      priority
      alt="몰루? 앱 스플래시 화면 — AI THAT SEES WHAT YOU SEE · 방법을 알려줄게."
      style={{
        display: "block",
        width: "min(420px, 100%)",
        height: "auto",
        filter: "drop-shadow(0 30px 60px rgba(74, 46, 24, 0.22))",
      }}
    />
  );
}
