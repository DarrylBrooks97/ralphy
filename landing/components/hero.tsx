"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const installCommand = "npm install -g ralphy-cli";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6">
          <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700">
            v4.1.0 — Now available on npm
          </span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          Autonomous AI Coding Loop
        </h1>

        <p className="text-xl text-zinc-600 mb-4 max-w-2xl">
          Run AI agents on your tasks until done. Give it a PRD, a task list, or
          just tell it what to build. Ralphy handles the rest.
        </p>

        <p className="text-lg text-zinc-500 mb-8 max-w-2xl">
          Supports Claude Code, OpenCode, Codex, Cursor, Qwen-Code, and Factory
          Droid. Run sequentially or in parallel with git worktrees.
        </p>

        <button
          onClick={copyToClipboard}
          className="group flex w-full max-w-md items-center justify-between rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-800 transition-colors"
        >
          <code className="text-sm font-mono">{installCommand}</code>
          {copied ? (
            <Check className="h-4 w-4 text-green-400" />
          ) : (
            <Copy className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
          )}
        </button>

        <p className="mt-3 text-sm text-zinc-500">
          Or clone from{" "}
          <a
            href="https://github.com/michaelshimeles/ralphy"
            className="underline hover:text-zinc-700"
          >
            GitHub
          </a>{" "}
          to use the bash script directly.
        </p>
      </div>
    </section>
  );
}
