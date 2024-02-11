"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const const_1 = require("./const");
const chrome = () => {
    const model = "Mozilla/5.0 (%PLAT%) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%VER% Safari/537.36";
    return model.replace("%VER%", (0, utils_1.sample)(const_1.chromeVersions));
};
const firefox = () => {
    const model = "Mozilla/5.0 (%PLAT%; rv:%VER%) Gecko/20100101 Firefox/%VER%";
    return model.replace("%VER%", (0, utils_1.sample)(const_1.firefoxVersions));
};
const opera = () => {
    const model = "Mozilla/5.0 (%PLAT%) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%CVER% Safari/537.36 OPR/%OVER%";
    return model
        .replace("%OVER%", (0, utils_1.sample)(const_1.operaVersion))
        .replace("%CVER%", (0, utils_1.sample)(const_1.chromeVersions));
};
const getRandomBrowser = () => {
    const os = [chrome(), firefox(), opera()];
    return (0, utils_1.sample)(os);
};
exports.default = getRandomBrowser;
