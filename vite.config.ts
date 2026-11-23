// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Static export: skip the Nitro server build outside Lovable so TanStack Start
  // emits its own node preview server that the prerenderer can crawl.
  nitro: process.env["LOVABLE_NITRO_PRESET"] ? true : false,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
    pages: [
      { path: "/", prerender: { enabled: true } },
      { path: "/kalkulator", prerender: { enabled: true } },
      { path: "/referencje", prerender: { enabled: true } },
      { path: "/realizacje/kartrace-series", prerender: { enabled: true } },
      { path: "/branze/firmy-budowlane", prerender: { enabled: true } },
      { path: "/branze/hydraulik", prerender: { enabled: true } },
      { path: "/branze/warsztat-samochodowy", prerender: { enabled: true } },
      { path: "/branze/dekarz", prerender: { enabled: true } },
      { path: "/branze/elektryk", prerender: { enabled: true } },
      { path: "/demo/hydro-perfekt", prerender: { enabled: true } },
      { path: "/demo/autoserwis-kowalski", prerender: { enabled: true } },
      { path: "/demo/dachpol", prerender: { enabled: true } },
      { path: "/uslugi/strona-internetowa", prerender: { enabled: true } },
      { path: "/uslugi/poczta-firmowa", prerender: { enabled: true } },
      { path: "/uslugi/pakiet-start-google", prerender: { enabled: true } },
      { path: "/uslugi/pozycjonowanie-wizytowki-google", prerender: { enabled: true } },
      { path: "/uslugi/projekt-wizytowki", prerender: { enabled: true } },
      { path: "/uslugi/projekt-ulotki", prerender: { enabled: true } },
      { path: "/uslugi/oznakowanie-auta", prerender: { enabled: true } },
      { path: "/uslugi/projekt-logo", prerender: { enabled: true } },
      { path: "/pakiety/start-online", prerender: { enabled: true } },
      { path: "/pakiety/firma-kompletna", prerender: { enabled: true } },
      { path: "/pakiety/wizerunek", prerender: { enabled: true } },
      { path: "/pakiety/materialy-firmowe", prerender: { enabled: true } },
      { path: "/pakiety/identyfikacja", prerender: { enabled: true } },
      { path: "/strony-internetowe", prerender: { enabled: true } },
      { path: "/strony-internetowe/piaseczno", prerender: { enabled: true } },
      { path: "/strony-internetowe/grojec", prerender: { enabled: true } },
      { path: "/strony-internetowe/gora-kalwaria", prerender: { enabled: true } },
      { path: "/strony-internetowe/konstancin-jeziorna", prerender: { enabled: true } },
      { path: "/strony-internetowe/tarczyn", prerender: { enabled: true } },
      { path: "/strony-internetowe/nadarzyn", prerender: { enabled: true } },
      { path: "/strony-internetowe/pruszkow", prerender: { enabled: true } },
      { path: "/strony-internetowe/grodzisk-mazowiecki", prerender: { enabled: true } },
    ],

  },
});
