import Foundation

@objc public class NativeLog: NSObject {
    @objc public func log(tag: String, message: String) {
        print("[\(tag)] \(message)")
    }
}
