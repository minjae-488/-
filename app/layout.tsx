import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "신주장학재단 - Shinjoo Scholarship Foundation",
  description: "젊은 인재가 우리나라의 미래다. 신주장학재단은 학생들의 꿈과 희망을 응원합니다.",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSansKR.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <Header />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

