'use client';

import { useMemo } from 'react';
import { APP_CONFIG_DEFAULTS } from '@/app-config';
import { getSandboxId } from '@/lib/env';
import EmbedPopupAgentClient from './embed-popup/agent-client';
import { Cta } from './landing/cta';
import { Features } from './landing/features';
import { Hero } from './landing/hero';
import { Integration } from './landing/integration';
import { NavBar } from './landing/nav-bar';
import { SiteFooter } from './landing/site-footer';

export default function Welcome() {
  const IS_SANDBOX_ENVIRONMENT = process.env.NODE_ENV === 'production';

  const popupEmbedUrl = useMemo(() => {
    const url = new URL('/embed-popup.js', window.location.origin);
    return url.toString();
  }, []);

  const embedSandboxId = useMemo(() => getSandboxId(window.location.origin), []);

  const popupEmbedCode = useMemo(
    () => `<script\n  src="${popupEmbedUrl}"\n  data-lk-sandbox-id="${embedSandboxId}"\n></script>`,
    [popupEmbedUrl, embedSandboxId]
  );

  const popupTestUrl = useMemo(() => {
    const url = new URL('/test/popup', window.location.origin);
    return url.toString();
  }, []);

  const handleInitialize = () => {
    document.getElementById('integration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-zinc-100">
      <NavBar onInitialize={handleInitialize} />

      <main id="terminal">
        <Hero />
        <Features />
        <Integration
          embedCode={popupEmbedCode}
          testUrl={popupTestUrl}
          showBuildHint={!IS_SANDBOX_ENVIRONMENT}
        />
        <Cta />
      </main>

      <SiteFooter />

      <EmbedPopupAgentClient appConfig={APP_CONFIG_DEFAULTS} />
    </div>
  );
}
