export interface NativeLogPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
