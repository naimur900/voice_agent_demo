'use client';

export function Hero() {
  const bars = Array.from({ length: 32 });

  return (
    <header className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="vox-grid absolute inset-0 opacity-20" />
      <div className="vox-scanline absolute inset-0" />

      <div className="relative z-10 container mx-auto grid grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-6">
          <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/5 px-3 py-1 text-[10px] font-bold tracking-[0.3em] text-blue-400 uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-vox-pulse absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
            System Online / v2.4.0
          </div>

          <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl leading-[1.05] font-bold tracking-tighter text-white md:text-6xl lg:text-7xl">
            THE FUTURE
            <br />
            <span className="vox-glow-text text-blue-500">HAS A VOICE</span>
          </h1>

          <p className="max-w-xl font-[family-name:var(--font-space-grotesk)] text-base leading-relaxed text-zinc-400 md:text-lg">
            Embed laboratory-grade voice synthesis into any web surface in seconds. VOX-TERMINAL
            delivers ultra-low-latency, neural vocal orchestration — built on LiveKit Agents for the
            nocturnal era.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#integration"
              className="bg-blue-600 px-6 py-4 font-[family-name:var(--font-space-grotesk)] text-sm font-medium tracking-widest text-white uppercase transition-all hover:brightness-110 active:scale-95 md:px-8"
            >
              Initialize Protocol
            </a>
            <a
              href="#capabilities"
              className="border border-zinc-700 px-6 py-4 font-[family-name:var(--font-space-grotesk)] text-sm font-medium tracking-widest text-zinc-200 uppercase transition-all hover:bg-white/5 active:scale-95 md:px-8"
            >
              Documentation
            </a>
          </div>

          <div className="flex items-center gap-6 pt-6 text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase">
            <div>
              <div className="text-blue-400">&lt; 10MS</div>
              <div className="mt-1 text-zinc-600">Latency</div>
            </div>
            <div className="h-8 w-px bg-zinc-800" />
            <div>
              <div className="text-blue-400">99.99%</div>
              <div className="mt-1 text-zinc-600">Uptime</div>
            </div>
            <div className="h-8 w-px bg-zinc-800" />
            <div>
              <div className="text-blue-400">EDGE/16</div>
              <div className="mt-1 text-zinc-600">Regions</div>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative flex aspect-square w-full items-center justify-center">
            <div className="absolute h-3/4 w-3/4 rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="relative z-10 flex h-full w-full items-center justify-center">
              <div className="absolute inset-8 rounded-full border border-blue-500/20" />
              <div className="absolute inset-16 rounded-full border border-blue-500/10" />
              <div className="absolute inset-24 rounded-full border border-blue-500/5" />

              <div className="relative flex h-40 items-end justify-center gap-1.5 md:h-56">
                {bars.map((_, i) => (
                  <span
                    key={i}
                    className="animate-vox-wave block w-1.5 origin-center rounded-full bg-gradient-to-t from-blue-600 to-blue-400 md:w-2"
                    style={{
                      height: `${30 + Math.abs(Math.sin(i * 0.6)) * 70}%`,
                      animationDelay: `${i * 60}ms`,
                      animationDuration: `${900 + (i % 5) * 120}ms`,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="absolute top-0 right-0 h-12 w-12 border-t border-r border-blue-500/40" />
            <div className="absolute bottom-0 left-0 h-12 w-12 border-b border-l border-blue-500/40" />
            <div className="absolute top-1/2 -right-2 -translate-y-1/2 rotate-90 font-[family-name:var(--font-space-grotesk)] text-[10px] font-bold tracking-[0.5em] text-blue-500/40">
              FREQ_ANALYSIS_ACTIVE
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
