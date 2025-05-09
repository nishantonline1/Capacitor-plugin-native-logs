# @capacitor-community/native_log

A lightweight Capacitor plugin for native logging of messages across all platforms (iOS, Android, and Web). This plugin provides a consistent logging interface that uses the appropriate native logging system for each platform.

## Features

- Simple unified API for logging across platforms
- Custom tag support for better message categorization
- Works with Capacitor 7.x
- Lightweight with minimal dependencies
- TypeScript support

## Install

```bash
npm install @capacitor-community/native_log
npx cap sync
```

## API

<docgen-index>

* [`log(...)`](#log)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### log(...)

```typescript
log(options: { tag?: string; message: string; }) => Promise<void>
```

Logs a message to the native platform's logging system.

| Param         | Type                                            | Description              |
| ------------- | ----------------------------------------------- | ------------------------ |
| **`options`** | <code>{ tag?: string; message: string; }</code> | The options for logging. |

--------------------

</docgen-api>

## Usage Examples

Here are various ways to use the plugin:

### Basic Logging

```typescript
import { NativeLog } from '@capacitor-community/native_log';

// Log with default tag
await NativeLog.log({
  message: 'Hello from Capacitor Native Logs',
});

// Log with custom tag
await NativeLog.log({
  tag: 'MyApp',
  message: 'This is a custom tagged message',
});
```

### In React Components

```typescript
import React, { useEffect } from 'react';
import { NativeLog } from '@capacitor-community/native_log';

function MyComponent() {
  useEffect(() => {
    const logComponentMount = async () => {
      await NativeLog.log({
        tag: 'MyComponent',
        message: 'Component mounted',
      });
    };

    logComponentMount();

    return () => {
      // Log on component unmount
      NativeLog.log({
        tag: 'MyComponent',
        message: 'Component unmounted',
      });
    };
  }, []);

  return <div>My Component</div>;
}
```

### Error Logging

```typescript
import { NativeLog } from '@capacitor-community/native_log';

try {
  // Some code that might throw an error
  throw new Error('Something went wrong');
} catch (error) {
  // Log the error
  NativeLog.log({
    tag: 'ErrorHandler',
    message: `Error occurred: ${error.message}`,
  });
}
```

## Platform Specific Notes

- **Web**: Uses `console.log` with tag in brackets `[TAG] message`
- **iOS**: Uses Swift's `print` function
- **Android**: Uses Android's `Log.d` method

## Viewing Logs

### iOS

View logs in Xcode's console when running your app through Xcode.

### Android

View logs using Android Studio's Logcat or using ADB:

```bash
adb logcat | grep YourTagName
```

### Web

Open your browser's developer tools (F12) and check the console tab.
