const engines = [
  {
    name: "Claude Code",
    flag: "--claude",
    description: "Anthropic's coding agent",
    default: true,
  },
  {
    name: "OpenCode",
    flag: "--opencode",
    description: "Open-source alternative",
  },
  {
    name: "Cursor",
    flag: "--cursor",
    description: "AI-first code editor",
  },
  {
    name: "Codex",
    flag: "--codex",
    description: "OpenAI's coding model",
  },
  {
    name: "Qwen-Code",
    flag: "--qwen",
    description: "Alibaba's coding model",
  },
  {
    name: "Factory Droid",
    flag: "--droid",
    description: "Factory's autonomous agent",
  },
];

export function Engines() {
  return (
    <section id="engines" className="py-20 px-6 bg-zinc-50">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold mb-2">Supported AI Engines</h2>
        <p className="text-zinc-600 mb-8">
          Use whichever AI coding tool you prefer. Ralphy works with all of
          them.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {engines.map((engine) => (
            <div
              key={engine.name}
              className="relative rounded-lg border border-zinc-200 bg-white p-4 hover:border-zinc-300 transition-colors"
            >
              {engine.default && (
                <span className="absolute -top-2 right-3 rounded-full bg-zinc-900 px-2 py-0.5 text-xs text-white">
                  default
                </span>
              )}
              <h3 className="font-medium mb-1">{engine.name}</h3>
              <p className="text-sm text-zinc-500 mb-2">{engine.description}</p>
              <code className="text-xs bg-zinc-100 px-2 py-1 rounded text-zinc-700">
                {engine.flag}
              </code>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
