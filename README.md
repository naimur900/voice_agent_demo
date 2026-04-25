# Web Embed Agent Starter

A Next.js app + LiveKit Agent worker that ships a drop-in voice assistant widget you can embed on any website with a single `<script>` tag.

## What's in the box

- **Next.js web app** with a landing page and the popup widget
- **`embed-popup.js`** — a standalone script that mounts the popup on any site
- **LiveKit Agent worker** (`src/agent-worker.ts`) — Deepgram STT, GPT-4o, Cartesia TTS, Silero VAD
- Welcome screen with an explicit **Start Conversation** button — the agent only connects on user intent
- Configurable branding, colors, logos, and feature flags via [`app-config.ts`](./app-config.ts)

## Project structure

```
agent-starter-embed/
├── app/
│   ├── (app)/                 # Landing page
│   ├── api/connection-details # LiveKit token endpoint
│   └── test/popup             # Local harness for embed-popup.js
├── components/
│   ├── embed-popup/           # Trigger, welcome, session view
│   ├── landing/
│   ├── livekit/
│   └── ui/
├── src/
│   ├── agent.ts               # Agent persona & instructions
│   └── agent-worker.ts        # LiveKit agent worker entrypoint
├── app-config.ts              # Branding & feature flags
├── vite.agent.config.ts       # Builds the agent worker
└── webpack.config.js          # Builds embed-popup.js
```

## Getting started

```bash
pnpm install
```

Copy `.env.example` to `.env.local` and fill in your LiveKit + model API keys, then:

```bash
pnpm dev
```

Runs the Next.js app and the agent worker concurrently. Open http://localhost:3000.

## Configuration

Branding, feature flags, and UI text live in [`app-config.ts`](./app-config.ts):

| Field | Purpose |
| --- | --- |
| `agentName` | Must match the `agentName` registered in `src/agent-worker.ts` |
| `supportsChatInput` / `supportsVideoInput` / `supportsScreenShare` | Toggle features in the popup action bar |
| `isPreConnectBufferEnabled` | Buffer the user's first words while the room connects |
| `startButtonText` | Label on the welcome screen's Start button |
| `companyName`, `logo`, `logoDark` | Branding on the trigger and welcome screen |
| `accent`, `accentDark` | Theme accent colors |

### Environment variables

```env
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
LIVEKIT_URL=wss://<project>.livekit.cloud

OPENAI_API_KEY=
DEEPGRAM_API_KEY=
CARTESIA_API_KEY=

NEXT_PUBLIC_CONN_DETAILS_ENDPOINT=http://localhost:3000/api/connection-details
```

## Customizing the agent

The persona lives in [`src/agent.ts`](./src/agent.ts). The model stack (STT, LLM, TTS, VAD, turn detection, noise cancellation) is wired in [`src/agent-worker.ts`](./src/agent-worker.ts).

## Embedding on your site

```html
<script
  src="https://your-deployment.example.com/embed-popup.js"
  data-lk-sandbox-id="your_sandbox_id"
></script>
```

Rebuild `public/embed-popup.js` after widget changes:

```bash
pnpm build-embed-popup-script
```
