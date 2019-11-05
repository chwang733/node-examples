"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addPost_1 = __importDefault(require("./addPost"));
const listPosts_1 = __importDefault(require("./listPosts"));
const protoPath = `${__dirname}/Post.proto`;
exports.default = {
    protoPath,
    implementation: {
        PostService: {
            addPost: addPost_1.default,
            listPosts: listPosts_1.default
        }
    }
};
//# sourceMappingURL=index.js.map