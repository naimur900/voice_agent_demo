import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    ssr: 'src/agent-worker.ts',
    target: 'node18',
    sourcemap: true,
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: 'agent-worker.js',
      },
    },
  },
});
