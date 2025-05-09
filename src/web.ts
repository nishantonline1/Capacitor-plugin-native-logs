import { WebPlugin } from '@capacitor/core';

import type { NativeLogPlugin } from './definitions';

export class NativeLogWeb extends WebPlugin implements NativeLogPlugin {
  async log(options: { tag?: string; message: string }): Promise<void> {
    const tag = options.tag || 'IonicCapacitorApp';
    
    if (!options.message) {
      throw new Error('Missing message');
    }
    
    console.log(`[${tag}]`, options.message);
  }
}
