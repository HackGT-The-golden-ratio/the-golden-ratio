"use strict";
// Type definitions for web-push 3.3
// Project: https://github.com/web-push-libs/web-push
// Definitions by: Paul Lessing <https://github.com/paullessing>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebPushError = exports.supportedContentEncodings = void 0;
/**
 * Error thrown when sendNotification() receives a non-200 status code from the push endpoint.
 */
var WebPushError = /** @class */ (function (_super) {
    __extends(WebPushError, _super);
    function WebPushError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WebPushError;
}(Error));
exports.WebPushError = WebPushError;
