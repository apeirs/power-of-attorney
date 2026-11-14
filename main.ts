// Writes one poem about agency to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output), with no trailing line end.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'Power of Attorney',
  '',
  'My mother signed it at the kitchen table',
  'with the pen my father kept for crosswords,',
  'and slid it over the way you pass the salt,',
  'not looking up, still talking about rain.',
  '',
  'After that the bank knew my voice.',
  'I paid her water. I picked the home',
  'she would not have picked, with a garden,',
  'and the nurses said "your daughter\'s here"',
  'as you\'d note the weather\'s turned.',
  '',
  'Now the thing on my phone that books my trains',
  'asks, Shall I go ahead? and I hold my thumb',
  'above the glass the way she held the pen,',
  'a second longer than the asking needs,',
  'to feel it leave my hand.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
