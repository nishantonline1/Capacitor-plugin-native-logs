import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(NativeLogPlugin)
public class NativeLogPlugin: CAPPlugin {
    private let implementation = NativeLog()

    @objc func log(_ call: CAPPluginCall) {
        let tag = call.getString("tag") ?? "IonicCapacitorApp"
        guard let message = call.getString("message") else {
            call.reject("Missing message")
            return
        }
        implementation.log(tag: tag, message: message)
        call.resolve()
    }
}
