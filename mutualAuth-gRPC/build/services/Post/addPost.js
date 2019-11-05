"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = __importDefault(require("../../models/Post"));
async function default_1(ctx) {
    if (ctx.req.title && ctx.req.title.length > 10) {
        throw new Error("invalid.title.length");
    }
    console.log(ctx.req);
    try {
        console.info('addPost');
        const post = new Post_1.default(ctx.req);
        await post.save();
        ctx.res = post;
    }
    catch (err) {
        throw err;
    }
}
exports.default = default_1;
//# sourceMappingURL=addPost.js.map