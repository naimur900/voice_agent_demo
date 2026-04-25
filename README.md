# Web Embed Agent Starter

A fullstack starter for embedding a [LiveKit Agents](https://docs.livekit.io/agents) voice assistant into any website. It bundles:

- A **Next.js web app** with a landing page, a configurable popup widget, and a `/test/popup` debug route
- A **standalone `embed-popup.js`** script you can drop onto any site with a single `<script>` tag
- A **Node.js LiveKit Agent worker** (`src/agent-worker.ts`) preconfigured with Deepgram STT, OpenAI GPT-4o, Cartesia TTS, Silero VAD, multilingual turn detection, and Krisp-style noise cancellation

It supports [voice](https://docs.livekit.io/agents/start/voice-ai), [transcriptions](https://docs.livekit.io/agents/build/text/), camera input, and screen sharing.

This template is built with Next.js and is free for you to use or modify as you see fit.

<picture>
  <source srcset="./.github/assets/readme-hero-dark.webp" media="(prefers-color-scheme: dark)">
  <source srcset="./.github/assets/readme-hero-light.webp" media="(prefers-color-scheme: light)">
  <img src="./.github/assets/readme-hero-light.webp" alt="App screenshot">
</picture>

### Features

- Real-time voice interaction with LiveKit Agents
- Modern welcome screen with an explicit **Start Conversation** button — the agent only connects on user intent, not on widget open
- Camera video streaming and screen sharing
- Audio visualization, level monitoring, and live transcript
- Virtual avatar integration
- Light/dark theme switching with system preference detection
- Customizable branding, colors, logos, and UI text via [`app-config.ts`](./app-config.ts)
- Bundled TypeScript agent worker — no separate Python/Node agent repo needed to get running

### Project structure

```
agent-starter-embed/
├── app/
│   ├── (app)/                 # Landing page route group
│   ├── api/connection-details # Issues LiveKit access tokens
│   ├── test/popup             # Local test harness for embed-popup.js
│   └── favicon.ico
├── components/
│   ├── embed-popup/           # Popup widget (trigger, welcome, session view)
│   ├── landing/               # Hero, Features, Integration, CTA, Footer
│   ├── livekit/
│   ├── ui/
│   ├── popup-page.tsx
│   ├── popup-page-dynamic.tsx
│   ├── root-layout.tsx
│   ├── theme-toggle.tsx
│   ├── welcome.tsx
│   └── welcome-dynamic.tsx
├── src/
│   ├── agent.ts               # Agent persona / instructions
│   └── agent-worker.ts        # LiveKit agent worker entrypoint
├── fonts/
├── hooks/
├── lib/
├── public/
├── styles/
├── app-config.ts              # Branding & feature flags
├── next.config.ts
├── vite.agent.config.ts       # Builds the agent worker for production
├── webpack.config.js          # Builds embed-popup.js
└── package.json
```

## Getting started

> [!TIP]
> If you'd like to try this application without modification, you can deploy an instance in just a few clicks with [LiveKit Cloud Sandbox](https://cloud.livekit.io/projects/p_/sandbox/templates/agent-starter-embed).

[![Open on LiveKit](https://img.shields.io/badge/Open%20on%20LiveKit%20Cloud-002CF2?style=for-the-badge&logo=external-link)](https://cloud.livekit.io/projects/p_/sandbox/templates/agent-starter-embed)

Clone the template:

```bash
lk app create --template agent-starter-embed
```

Install dependencies and build the embed script:

```bash
pnpm install
pnpm build-embed-popup-script   # Builds public/embed-popup.js
```

Run the web app and the agent worker together:

```bash
pnpm dev
```

This runs two processes concurrently:

- `web` — Next.js dev server on http://localhost:3000
- `agent` — LiveKit agent worker (`tsx src/agent-worker.ts dev`)

You can also run them independently:

```bash
pnpm dev:web      # web only
pnpm dev:agent    # agent worker only
```

Open http://localhost:3000 to see the landing page and try the embedded popup widget.

> [!NOTE]
> Copy `.env.example` to `.env.local` and fill in your credentials before running. See [Environment Variables](#environment-variables) below.

## Configuration

### App config (`app-config.ts`)

Branding, feature flags, and UI text live in [`app-config.ts`](./app-config.ts):

```ts
export const APP_CONFIG_DEFAULTS: AppConfig = {
  agentName: 'my-agent',
  supportsChatInput: true,
  supportsVideoInput: false,
  supportsScreenShare: false,
  isPreConnectBufferEnabled: true,
  startButtonText: 'Chat with Agent',
  companyName: 'LiveKit',
  accent: '#002cf2',
  accentDark: '#1fd5f9',
  logo: '/lk-logo.svg',
  logoDark: '/lk-logo-dark.svg',
};
```

| Field | Purpose |
| --- | --- |
| `agentName` | Must match the `agentName` registered in `src/agent-worker.ts` |
| `supportsChatInput` / `supportsVideoInput` / `supportsScreenShare` | Toggle features in the popup action bar |
| `isPreConnectBufferEnabled` | Buffer the user's first words while the room connects |
| `startButtonText` | Label on the welcome screen's Start button |
| `companyName`, `logo`, `logoDark` | Branding shown on the trigger and welcome screen |
| `accent`, `accentDark` | Theme accent colors |

### Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```env
# LiveKit server connection
LIVEKIT_API_KEY=<your_api_key>
LIVEKIT_API_SECRET=<your_api_secret>
LIVEKIT_URL=wss://<project-subdomain>.livekit.cloud

# AI model API keys (used by the agent worker)
OPENAI_API_KEY=<your_openai_api_key>
DEEPGRAM_API_KEY=<your_deepgram_api_key>
CARTESIA_API_KEY=<your_cartesia_api_key>

# Internally used environment variables
NEXT_PUBLIC_CONN_DETAILS_ENDPOINT=http://localhost:3000/api/connection-details
# NEXT_PUBLIC_APP_CONFIG_ENDPOINT=
```

The LiveKit credentials are required for the web app's token endpoint, and the model keys are required by the bundled agent worker. If you're running your own agent (Python, Node, or otherwise), you only need the LiveKit credentials.

### Customizing the agent

The agent's persona and instructions live in [`src/agent.ts`](./src/agent.ts). The model stack (STT, LLM, TTS, VAD, turn detection, noise cancellation) is wired up in [`src/agent-worker.ts`](./src/agent-worker.ts) — swap providers there.

You can also use any external agent (for example, the [Python](https://github.com/livekit-examples/agent-starter-python) or [Node.js](https://github.com/livekit-examples/agent-starter-node) starters, or [your own from scratch](https://docs.livekit.io/agents/start/voice-ai/)). Just point its `agentName` at the value in `app-config.ts` and skip `pnpm dev:agent`.

## Local Development

The Next.js dev server at http://localhost:3000 hot-reloads via [Next.js Fast Refresh](https://nextjs.org/docs/architecture/fast-refresh). The agent worker (`pnpm dev:agent`) runs through `tsx` and restarts on file changes.

### Testing the embed script locally

A debug harness is available at http://localhost:3000/test/popup — it loads the bundled `embed-popup.js` exactly the way an external site would.

> [!IMPORTANT]
> Code changes you make locally are not reflected in `embed-popup.js` until you re-run `pnpm build-embed-popup-script`. The dev server itself uses the React components directly, so widget changes show up there without rebuilding.

## Production build

```bash
pnpm build
```

This runs three steps:

1. `next build` — builds the Next.js web app
2. `pnpm build-embed-popup-script` (webpack) — bundles `public/embed-popup.js`
3. `pnpm agent:build` (vite) — bundles `dist/agent-worker.js`

To start everything in production mode:

```bash
pnpm start
```

This runs `next start` and `node dist/agent-worker.js start` concurrently.

## Embedding on your site

Once deployed, copy the embed snippet from your LiveKit Sandbox welcome page:

```html
<script
  src="https://your-deployment.example.com/embed-popup.js"
  data-lk-sandbox-id="your_sandbox_id"
></script>
```

> [!IMPORTANT]
> You MUST use the embed code generated on the welcome page of your LiveKit Sandbox to ensure LiveKit connection tokens are generated correctly.

## Contributing

This template is open source and we welcome contributions! Please open a PR or issue through GitHub, and don't forget to join us in the [LiveKit Community Slack](https://livekit.io/join-slack)!
