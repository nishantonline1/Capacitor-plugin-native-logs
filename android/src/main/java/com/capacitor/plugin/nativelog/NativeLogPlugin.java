package com.capacitor.plugin.nativelog;

import android.util.Log;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "NativeLog")
public class NativeLogPlugin extends Plugin {

    private NativeLog implementation = new NativeLog();

    @PluginMethod
    public void log(PluginCall call) {
        String tag = call.getString("tag", "IonicCapacitorApp");
        String message = call.getString("message");

        // Log.d(tag, "NativeLogPlugin.log");

        if (message != null) {
            Log.d(tag, message);
            call.resolve();
        } else {
            call.reject("Missing message");
        }
    }
}
