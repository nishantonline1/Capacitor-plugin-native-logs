package com.capacitor.plugin.nativelog;

import android.util.Log;

public class NativeLog {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
