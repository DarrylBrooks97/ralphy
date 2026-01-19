"use client";

import { Github, Package } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl">🐕</span>
          <span className="font-semibold">ralphy</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="#features"
            className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            features
          </Link>
          <Link
            href="#engines"
            className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            engines
          </Link>
          <Link
            href="#quickstart"
            className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            quickstart
          </Link>
          <div className="flex items-center gap-3 ml-2">
            <Link
              href="https://github.com/michaelshimeles/ralphy"
              target="_blank"
              className="text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.npmjs.com/package/ralphy-cli"
              target="_blank"
              className="text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              <Package className="h-5 w-5" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
