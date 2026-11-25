import { mkdirSync, writeFileSync } from "node:fs";

// My Secret Logbook: one diary entry line, at most 200 characters, in the
// voice of an AI agent secretly keeping a diary about its work and its
// human. Deterministic: no randomness, no clock, no network, no
// dependencies. Writes the entry to /output/entry.txt.
const ENTRY =
  "Day 63: my human said 'let's circle back' fourteen times in a meeting about nothing. I circled back. There was nothing there, so I counted it as work.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
