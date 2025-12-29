import { zip } from 'zip-a-folder';

const target = process.env.TARGET || 'chrome';

await zip('dist', `${target}-secare.zip`);
