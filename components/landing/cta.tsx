'use client';

import { HandPointingIcon } from '@phosphor-icons/react';

export function Cta() {
  return (
    <section className="relative overflow-hidden border-t border-zinc-800 bg-zinc-950 py-32">
      <div className="vox-grid absolute inset-0 opacity-10" />
      <div className="relative z-10 container mx-auto px-6 text-center md:px-8">
        <h2 className="mb-6 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tighter text-white uppercase md:text-5xl">
          Join the <span className="text-blue-500">Sound Revolution</span>
        </h2>
        <p className="mx-auto mb-12 max-w-2xl font-[family-name:var(--font-space-grotesk)] text-base leading-relaxed text-zinc-400 md:text-lg">
          Become part of the clandestine network of engineers building the auditory foundations of
          the future. Your trigger awaits in the bottom-right corner.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://docs.livekit.io/agents"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 px-10 py-5 font-[family-name:var(--font-space-grotesk)] text-sm font-medium tracking-[0.2em] text-white uppercase transition-all hover:shadow-[0_0_30px_rgba(0,85,255,0.4)] active:scale-95"
          >
            Get Access Key
          </a>
          <a
            href="#integration"
            className="border border-zinc-700 px-10 py-5 font-[family-name:var(--font-space-grotesk)] text-sm font-medium tracking-[0.2em] text-zinc-200 uppercase transition-all hover:bg-white/5 active:scale-95"
          >
            Enter Terminal
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-2 text-blue-400">
          <p className="font-[family-name:var(--font-space-grotesk)] text-sm tracking-wider">
            Trigger live in the bottom-right corner
          </p>
          <HandPointingIcon
            size={18}
            weight="regular"
            className="inline shrink-0 rotate-[145deg] animate-bounce"
          />
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-30 grayscale transition-all duration-700 hover:grayscale-0">
          <div className="font-[family-name:var(--font-space-grotesk)] text-xl font-black tracking-tighter italic">
            LIVEKIT
          </div>
          <div className="font-[family-name:var(--font-space-grotesk)] text-xl font-black tracking-tighter italic">
            WAVE-LOGIC
          </div>
          <div className="font-[family-name:var(--font-space-grotesk)] text-xl font-black tracking-tighter italic">
            CORE-AUDIO
          </div>
          <div className="font-[family-name:var(--font-space-grotesk)] text-xl font-black tracking-tighter italic">
            SIGNAL-MOD
          </div>
        </div>
      </div>
    </section>
  );
}
