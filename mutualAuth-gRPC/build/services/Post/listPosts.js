"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = __importDefault(require("../../models/Post"));
async function default_1(ctx) {
    const limit = ctx.req.limit || 10;
    const page = ctx.req.page || 1;
    console.log('listPost');
    const query = Post_1.default.find({})
        .limit(limit)
        .skip(limit * (page - 1));
    ctx.res = {
        limit,
        page,
        count: await Post_1.default.countDocuments(query.getQuery()),
        nodes: await query.lean()
    };
}
exports.default = default_1;
//# sourceMappingURL=listPosts.js.map