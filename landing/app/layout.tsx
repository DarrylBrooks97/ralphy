import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ralphy - Autonomous AI Coding Loop",
  description:
    "Run AI agents on your tasks until done. Supports Claude Code, OpenCode, Codex, Cursor, Qwen-Code and Factory Droid.",
  openGraph: {
    title: "Ralphy - Autonomous AI Coding Loop",
    description:
      "Run AI agents on your tasks until done. Supports Claude Code, OpenCode, Codex, Cursor, Qwen-Code and Factory Droid.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-zinc-900 min-h-screen">{children}</body>
    </html>
  );
}
