import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "六花の本棚",
  description: "六花の生涯の読書記録",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
