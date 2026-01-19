export function Quickstart() {
  return (
    <section id="quickstart" className="py-20 px-6 bg-zinc-50">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold mb-2">Quick Start</h2>
        <p className="text-zinc-600 mb-8">
          Get up and running in seconds.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Single Task */}
          <div>
            <h3 className="font-medium mb-3">Single Task</h3>
            <div className="rounded-lg bg-zinc-900 p-4 font-mono text-sm">
              <div className="text-zinc-400 mb-2"># Just tell it what to do</div>
              <div className="text-green-400">$ ralphy "add dark mode toggle"</div>
              <div className="text-zinc-400 mt-3 mb-2"># Use a different engine</div>
              <div className="text-green-400">$ ralphy "fix the auth bug" --cursor</div>
            </div>
          </div>

          {/* PRD Mode */}
          <div>
            <h3 className="font-medium mb-3">Task List (PRD Mode)</h3>
            <div className="rounded-lg bg-zinc-900 p-4 font-mono text-sm">
              <div className="text-zinc-400 mb-2"># Work through a PRD file</div>
              <div className="text-green-400">$ ralphy --prd PRD.md</div>
              <div className="text-zinc-400 mt-3 mb-2"># Or GitHub issues</div>
              <div className="text-green-400">$ ralphy --github owner/repo</div>
            </div>
          </div>

          {/* Parallel */}
          <div>
            <h3 className="font-medium mb-3">Parallel Execution</h3>
            <div className="rounded-lg bg-zinc-900 p-4 font-mono text-sm">
              <div className="text-zinc-400 mb-2"># Run 5 agents in parallel</div>
              <div className="text-green-400">$ ralphy --parallel --max-parallel 5</div>
              <div className="text-zinc-400 mt-3 mb-2"># Each agent gets its own worktree</div>
              <div className="text-zinc-500 text-xs">
                Agent 1 → ralphy/agent-1-create-auth<br />
                Agent 2 → ralphy/agent-2-add-dashboard
              </div>
            </div>
          </div>

          {/* Config */}
          <div>
            <h3 className="font-medium mb-3">Project Config</h3>
            <div className="rounded-lg bg-zinc-900 p-4 font-mono text-sm">
              <div className="text-zinc-400 mb-2"># Initialize project config</div>
              <div className="text-green-400">$ ralphy --init</div>
              <div className="text-zinc-400 mt-3 mb-2"># Add a rule the AI must follow</div>
              <div className="text-green-400">$ ralphy --add-rule "use TypeScript"</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
