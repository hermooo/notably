import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Notably",
  description: "Notably - Where your notes gets smarter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
