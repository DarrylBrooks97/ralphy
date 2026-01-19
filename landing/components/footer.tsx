import Link from "next/link";
import { Github, Package } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-12 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🐕</span>
              <span className="font-semibold">ralphy</span>
            </div>
            <p className="text-sm text-zinc-500">
              Autonomous AI Coding Loop. MIT License.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/michaelshimeles/ralphy"
              target="_blank"
              className="flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href="https://www.npmjs.com/package/ralphy-cli"
              target="_blank"
              className="flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              <Package className="h-4 w-4" />
              npm
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-100">
          <p className="text-sm text-zinc-400 text-center">
            Built by{" "}
            <a
              href="https://github.com/michaelshimeles"
              className="underline hover:text-zinc-600"
            >
              Michael Shimeles
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
