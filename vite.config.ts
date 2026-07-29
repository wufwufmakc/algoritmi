// @lovable.dev/vite-tanstack-config already includes tanstackStart, viteReact,
// tailwindcss, tsConfigPaths, nitro (build-only), and related Lovable plugins.
// Pin Nitro to Vercel so production builds emit `.vercel/output` (default is
// cloudflare-module, which causes platform NOT_FOUND on Vercel).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: {
    preset: "vercel",
  },
});
