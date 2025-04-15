import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/app/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ViewModel 아키텍처 예시",
  description: "JSONPlaceholder API를 사용한 포스트 CRUD 예제",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <ReactQueryProvider>
          <main className="container mx-auto py-8 px-4">
            {children}
          </main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
