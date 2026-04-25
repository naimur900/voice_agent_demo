'use client';

import { GitBranchIcon, PulseIcon } from '@phosphor-icons/react';

export function NavBar({ onInitialize }: { onInitialize: () => void }) {
  return (
    <nav className="fixed top-0 z-50 flex h-16 w-full items-center justify-between border-b border-zinc-800 bg-zinc-950/90 px-6 backdrop-blur-md md:px-8">
      <div className="flex items-center gap-2">
        <span className="font-[family-name:var(--font-space-grotesk)] text-xl font-black tracking-tighter text-blue-500 italic md:text-2xl">
          VOX-TERMINAL
        </span>
      </div>

      <div className="hidden items-center gap-8 font-[family-name:var(--font-space-grotesk)] text-[12px] font-bold tracking-widest uppercase md:flex">
        <a className="border-b-2 border-blue-600 pb-1 text-blue-500" href="#terminal">
          Terminal
        </a>
        <a className="text-zinc-500 transition-colors hover:text-zinc-200" href="#capabilities">
          Capabilities
        </a>
        <a className="text-zinc-500 transition-colors hover:text-zinc-200" href="#integration">
          Integration
        </a>
        <a className="text-zinc-500 transition-colors hover:text-zinc-200" href="#archive">
          Archive
        </a>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden gap-2 md:flex">
          <span className="cursor-pointer p-2 text-zinc-400 transition-all duration-75 hover:bg-zinc-900/50 active:scale-95">
            <PulseIcon size={20} />
          </span>
          <span className="cursor-pointer p-2 text-zinc-400 transition-all duration-75 hover:bg-zinc-900/50 active:scale-95">
            <GitBranchIcon size={20} />
          </span>
        </div>
        <button
          onClick={onInitialize}
          className="cursor-pointer bg-blue-600 px-5 py-2 text-xs font-bold tracking-widest text-white uppercase transition-all hover:opacity-90 active:scale-95 md:text-sm"
        >
          Initialize
        </button>
      </div>
    </nav>
  );
}
