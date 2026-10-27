import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Foodle ICP · USP 가이드 | 대행사 공유용",
  description:
    "Foodle(주식회사 푸들)의 ICP 5종과 USP를 정리한 마케팅 대행사 공유용 페이지. Beautifully Everyday.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
