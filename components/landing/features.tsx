'use client';

import {
  BrainIcon,
  ChartLineIcon,
  CloudIcon,
  LockIcon,
  PlugsConnectedIcon,
  TerminalWindowIcon,
} from '@phosphor-icons/react';

const features = [
  {
    Icon: BrainIcon,
    title: 'Neural Synthesis',
    body: 'Advanced deep-learning models recreate the most subtle human vocal inflections with zero perceptible latency.',
  },
  {
    Icon: TerminalWindowIcon,
    title: 'Command Core',
    body: 'A robust, CLI-first interface for orchestrating massive vocal agent arrays through a unified low-level control plane.',
  },
  {
    Icon: LockIcon,
    title: 'Secure Stream',
    body: 'End-to-end encryption ensures your voice protocols remain strictly within your local or cloud perimeter.',
  },
  {
    Icon: PlugsConnectedIcon,
    title: 'Hardware Link',
    body: 'Direct integration with studio-grade audio hardware and embedded systems via specialized nocturnal drivers.',
  },
  {
    Icon: ChartLineIcon,
    title: 'Live Analysis',
    body: 'Real-time spectral visualization and diagnostic data streams for every active vocal pathway in the terminal.',
  },
  {
    Icon: CloudIcon,
    title: 'Cloud Lattice',
    body: 'Decentralized compute distribution allowing for infinite scaling of voice processing across global edge nodes.',
  },
];

export function Features() {
  return (
    <section id="capabilities" className="relative border-y border-zinc-800 bg-[#0c0e17] py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mb-16 flex flex-col items-end justify-between gap-4 md:flex-row">
          <div>
            <div className="mb-3 font-[family-name:var(--font-space-grotesk)] text-[10px] font-bold tracking-[0.3em] text-blue-500 uppercase">
              ── Modules
            </div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-tight text-white uppercase md:text-4xl">
              Core Capabilities
            </h2>
            <p className="mt-2 font-[family-name:var(--font-space-grotesk)] text-zinc-400">
              Precision instruments for neural audio deployment.
            </p>
          </div>
          <div className="font-[family-name:var(--font-space-grotesk)] text-[10px] font-bold tracking-widest text-blue-500">
            TOTAL_MODULES: 06
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ Icon, title, body }, i) => (
            <div
              key={title}
              className="group relative border border-zinc-800 bg-[#1d1f29] p-8 transition-colors hover:border-blue-500"
            >
              <div className="absolute top-3 right-3 font-[family-name:var(--font-space-grotesk)] text-[10px] font-bold tracking-widest text-zinc-700">
                0{i + 1}
              </div>
              <div className="mb-6 inline-flex transition-transform group-hover:scale-110">
                <Icon size={36} weight="duotone" className="text-blue-400" />
              </div>
              <h3 className="mb-3 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold tracking-tight text-white uppercase">
                {title}
              </h3>
              <p className="font-[family-name:var(--font-space-grotesk)] text-sm leading-relaxed text-zinc-400">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
