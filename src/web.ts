import { WebPlugin } from '@capacitor/core';

import type { NativeLogPlugin } from './definitions';

export class NativeLogWeb extends WebPlugin implements NativeLogPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
