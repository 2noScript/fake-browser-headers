"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const browsers_1 = __importDefault(require("./browsers"));
const platform_1 = __importDefault(require("./platform"));
const browserHeader = (options) => {
    const platform = (0, platform_1.default)();
    const browser = (0, browsers_1.default)();
    let header = {
        Accept: "*/*",
        Connection: "keep-alive",
        "User-Agent": browser.replace("%PLAT%", platform),
    };
    return !options ? header : {};
};
exports.default = browserHeader;
