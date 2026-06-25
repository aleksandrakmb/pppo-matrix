import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PPO Matrix",
  description: "Impact vs Effort prioritization tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="min-h-screen bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
