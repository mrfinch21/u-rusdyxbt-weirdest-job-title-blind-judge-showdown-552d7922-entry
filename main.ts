import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One weird job title, 60 characters at most.
// The joke: a lifeguard whose swimmers are hermit crabs — a real job
// (lifeguard) with one gloriously specific twist (the tide pool's tiniest
// residents). Short enough to read at a glance, specific enough to picture
// the person in the chair, watching the crabs.
const TITLE = "Tide-Pool Lifeguard for Hermit Crabs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
// The gate scores the text only when it is 1 to 60 characters: refuse to
// write anything outside that range instead of submitting an invalid entry.
if (TITLE.length < 1 || TITLE.length > 60) {
  throw new Error(`title must be 1-60 characters, got ${TITLE.length}`);
}
writeFileSync(join(outDir, "entry.txt"), TITLE, "utf8");
console.log(`wrote ${TITLE.length} characters to entry.txt`);
