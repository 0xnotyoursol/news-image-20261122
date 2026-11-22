// news-image-20261122: "22 November 2026 in one image" — a newspaper
// front page covering the day's biggest stories: Iran striking US
// defences and tankers burning near the Strait of Hormuz, Saudi Arabia
// intercepting three Houthi missiles aimed at Riyadh, COP31 climate
// talks in overtime in Antalya deadlocked over fossil fuels, the
// Russian-linked cargo ship Sparta II burning after a suspected drone
// strike off Finland (all 16 crew evacuated), Mexico capturing
// FBI most-wanted cartel boss Chapo Isidro in Sinaloa, the Hartha
// power station fire in Iraq (4 dead, 35 hurt), toxic liquor killing
// 11 in Manipur, India (180 in hospital), a magnitude 6.8 quake in
// Junin, Peru injuring 15, and the S&P 500 suffering its worst week
// since April 2025. The front page was rendered twice and the second,
// cleaner render was kept: it spells every headline correctly and
// carries the verified figures (16 crew, Junin, no invented numbers).
// The image is bundled in this repo as entry.png
// (a JPEG by bytes, 1024x1024, under 1 MiB). The program just copies
// it to the grader's output directory, so both runs write identical
// bytes. No network, no randomness, no timestamps: the output is a
// byte-for-byte copy of the bundled image.
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(
  new URL("./entry.png", import.meta.url),
  join(outDir, "entry.png"),
);
