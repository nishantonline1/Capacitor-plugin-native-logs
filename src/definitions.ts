export interface NativeLogPlugin {
  /**
   * Logs a message to the native platform's logging system.
   * 
   * @param options The options for logging.
   * @param options.tag Optional tag to categorize the log message (defaults to "IonicCapacitorApp").
   * @param options.message The message to log.
   */
  log(options: { tag?: string; message: string }): Promise<void>;
}
