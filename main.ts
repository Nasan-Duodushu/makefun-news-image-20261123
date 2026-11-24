// Sum up 23 November's world news in one image: the repository holds the
// finished front-page illustration as asset.jpg — Ukraine's naval strikes,
// COP31 ending without a deal, Nvidia's chief returning as markets leapt,
// and the Democrats taking the House — and this program copies it to
// entry.png in the output directory (the file is a JPEG, which the rules
// allow: the name stays entry.png and the format is told by its first bytes).
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
copyFileSync(join(dirname(fileURLToPath(import.meta.url)), 'asset.jpg'), join(out, 'entry.png'));
