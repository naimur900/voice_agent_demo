'use client';

import { useCallback, useState } from 'react';
import { CheckCircleIcon, CheckIcon, CopyIcon } from '@phosphor-icons/react';

type Props = {
  embedCode: string;
  testUrl: string;
  showBuildHint: boolean;
};

export function Integration({ embedCode, testUrl, showBuildHint }: Props) {
  const [copied, setCopied] = useState(false);

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }, [embedCode]);

  return (
    <section id="integration" className="overflow-hidden bg-[#191b25] py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div className="inline-block border-l-2 border-blue-500 bg-blue-500/10 px-4 py-1 font-[family-name:var(--font-space-grotesk)] text-[10px] font-bold tracking-widest text-blue-400 uppercase">
              Embed_Protocol
            </div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-tight text-white uppercase md:text-4xl">
              Drop-in Integration
            </h2>
            <p className="font-[family-name:var(--font-space-grotesk)] text-base leading-relaxed text-zinc-400 md:text-lg">
              Deploy a fully-orchestrated voice agent into any production website with a single
              script tag. Granular control via JSON config — zero infrastructure required on your
              end.
            </p>

            <ul className="space-y-3 font-[family-name:var(--font-space-grotesk)] text-zinc-200">
              {[
                'Native LiveKit Agents — Rust, Python, Node SDKs',
                'Sub-10ms latency with WebRTC pre-connect buffer',
                'Theme-aware shadow DOM, inherits host styling',
                'Camera, screen-share, and chat input out of the box',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircleIcon
                    size={18}
                    weight="fill"
                    className="mt-0.5 shrink-0 text-blue-400"
                  />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-lg border border-zinc-800 bg-zinc-950 shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-zinc-800" />
                <div className="h-3 w-3 rounded-full bg-zinc-800" />
                <div className="h-3 w-3 rounded-full bg-zinc-800" />
              </div>
              <div className="font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-widest text-zinc-500 uppercase">
                vox_init.html
              </div>
              <button
                onClick={onCopy}
                aria-label="Copy embed code"
                className="cursor-pointer p-1 text-zinc-500 transition-colors hover:text-blue-400"
              >
                {copied ? (
                  <CheckIcon size={16} weight="bold" className="text-emerald-400" />
                ) : (
                  <CopyIcon size={16} />
                )}
              </button>
            </div>

            <div className="overflow-x-auto p-6 font-mono text-sm leading-relaxed">
              <pre className="whitespace-pre-wrap text-zinc-400">
                <span className="text-zinc-600">{'<!-- Initialize nocturnal link -->\n'}</span>
                <span className="text-blue-400">{'<script\n'}</span>
                {'  src='}
                <span className="text-emerald-400">{`"${embedCodeUrl(embedCode)}"`}</span>
                {'\n  data-lk-sandbox-id='}
                <span className="text-emerald-400">{`"${embedCodeSandbox(embedCode)}"`}</span>
                <span className="text-blue-400">{'\n></script>\n\n'}</span>
                <span className="text-zinc-600">
                  {'<!-- Trigger appears bottom-right. Voice agent ready. -->'}
                </span>
              </pre>
            </div>

            <div className="vox-scanline pointer-events-none absolute inset-0 opacity-30" />
          </div>
        </div>

        {showBuildHint && (
          <div className="mt-8 grid grid-cols-1 gap-4 border-t border-zinc-800 pt-8 text-sm text-zinc-500 md:grid-cols-2">
            <p>
              To apply local changes, run{' '}
              <code className="text-zinc-300">pnpm build-embed-popup-script</code>.
            </p>
            <p>
              Test your latest build at{' '}
              <a
                href={testUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                {testUrl}
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function embedCodeUrl(embed: string) {
  const m = embed.match(/src="([^"]+)"/);
  return m?.[1] ?? '/embed-popup.js';
}

function embedCodeSandbox(embed: string) {
  const m = embed.match(/data-lk-sandbox-id="([^"]+)"/);
  return m?.[1] ?? '';
}
