import {
  GitBranch,
  Layers,
  FileText,
  Github,
  Zap,
  Settings,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Multiple Task Sources",
    description:
      "Markdown PRDs, YAML task files, or GitHub Issues. Work through tasks however you define them.",
  },
  {
    icon: Layers,
    title: "Parallel Execution",
    description:
      "Run multiple AI agents in parallel using git worktrees. Each gets its own isolated branch.",
  },
  {
    icon: GitBranch,
    title: "Branch Workflows",
    description:
      "Create a branch per task, auto-commit changes, and automatically create pull requests.",
  },
  {
    icon: Github,
    title: "GitHub Integration",
    description:
      "Pull tasks from GitHub Issues, filter by label, and close issues when complete.",
  },
  {
    icon: Settings,
    title: "Project Config",
    description:
      "Define rules, boundaries, and commands in .ralphy/. AI follows your project's conventions.",
  },
  {
    icon: Zap,
    title: "Retry Logic",
    description:
      "Automatic retries with exponential backoff. Tasks keep running until they succeed.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold mb-2">Features</h2>
        <p className="text-zinc-600 mb-8">
          Everything you need to automate your development workflow.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100">
                  <feature.icon className="h-5 w-5 text-zinc-700" />
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-1">{feature.title}</h3>
                <p className="text-sm text-zinc-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
