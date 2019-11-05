"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Check_1 = __importDefault(require("./Check"));
const protoPath = `${__dirname}/Health.proto`;
exports.default = {
    protoPath,
    implementation: {
        check: Check_1.default
    }
};
//# sourceMappingURL=index.js.map