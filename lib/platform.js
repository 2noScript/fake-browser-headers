"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const windows = () => {
    const model = "Windows NT ";
    const etc = ["WOW64", "Win64; x64"];
    const ver = ["10.0", "6." + (0, utils_1.sample)(["0", "1", "2", "3"])];
    let version = (0, utils_1.sample)(ver);
    if (version === "10.0" || Boolean((0, utils_1.sample)([0, 1]))) {
        version += "; " + (0, utils_1.sample)(etc);
    }
    return model + version;
};
const macos = () => {
    const model = "Macintosh; Intel Mac OS X 10_";
    let majorVersion = (0, utils_1.sample)([10, 11, 12, 13, 14]);
    let minorVersion;
    if (majorVersion !== 14) {
        minorVersion = (0, utils_1.sample)([1, 2, 3, 4, 5, 6]);
    }
    else {
        minorVersion = (0, utils_1.sample)([1, 2]);
    }
    return `${model}${majorVersion}_${minorVersion}`;
};
const linux = () => {
    const ver = ["x86_64", "i686", "i686 on x86_64"];
    const model = "X11; Linux ";
    return model + (0, utils_1.sample)(ver);
};
const getRandomOs = () => {
    const os = [windows(), macos(), linux()];
    return (0, utils_1.sample)(os);
};
exports.default = getRandomOs;
