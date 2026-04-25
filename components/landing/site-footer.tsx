'use client';

import { DatabaseIcon, PulseIcon, TerminalIcon } from '@phosphor-icons/react';

export function SiteFooter() {
  return (
    <footer className="flex w-full flex-col items-center justify-between gap-6 border-t border-zinc-800 bg-zinc-950 px-6 py-12 md:flex-row md:px-8">
      <div className="flex flex-col items-center gap-2 md:items-start">
        <div className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold tracking-tighter text-blue-500 uppercase">
          VOX-TERMINAL
        </div>
        <p className="font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.2em] text-zinc-600 uppercase">
          ©2026 Voice Agent Embed · Powered by LiveKit Agents
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        <a
          href="https://docs.livekit.io/agents/start/voice-ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.2em] text-zinc-600 uppercase underline-offset-4 transition-all hover:text-blue-400 hover:underline"
        >
          Quickstart
        </a>
        <a
          href="https://docs.livekit.io/agents"
          target="_blank"
          rel="noopener noreferrer"
          className="font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.2em] text-zinc-600 uppercase underline-offset-4 transition-all hover:text-blue-400 hover:underline"
        >
          Documentation
        </a>
        <a
          href="https://livekit.io"
          target="_blank"
          rel="noopener noreferrer"
          className="font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.2em] text-zinc-600 uppercase underline-offset-4 transition-all hover:text-blue-400 hover:underline"
        >
          System_Status
        </a>
      </div>

      <div className="flex gap-4 text-zinc-700">
        <TerminalIcon size={20} className="cursor-pointer transition-colors hover:text-blue-400" />
        <DatabaseIcon size={20} className="cursor-pointer transition-colors hover:text-blue-400" />
        <PulseIcon size={20} className="cursor-pointer transition-colors hover:text-blue-400" />
      </div>
    </footer>
  );
}
