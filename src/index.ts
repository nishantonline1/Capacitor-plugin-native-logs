import { registerPlugin } from '@capacitor/core';

import type { NativeLogPlugin } from './definitions';

const NativeLog = registerPlugin<NativeLogPlugin>('NativeLog', {
  web: () => import('./web').then(m => new m.NativeLogWeb()),
});

export * from './definitions';
export { NativeLog };
