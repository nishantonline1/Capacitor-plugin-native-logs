import Foundation

@objc public class NativeLog: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
