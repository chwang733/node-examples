"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grpc = __importStar(require("grpc"));
const PostClient_1 = __importDefault(require("./PostClient"));
const HealthClient_1 = __importDefault(require("./HealthClient"));
function main() {
    const API_KEY = 'myapikey';
    const endpoint = 'localhost:50051';
    let secureHealthClient = HealthClient_1.default.getSecureClient(endpoint);
    secureHealthClient.Check({}, (err, response) => {
        console.log('Check', err, response);
    });
    let securePostClientWithApiKey = PostClient_1.default.getSecureClient(endpoint, API_KEY);
    securePostClientWithApiKey.listPosts({ page: 1 }, (err, response) => {
        console.log('Post list', err, response);
    });
    // PASSING APIKEY AT THE CALL LEVEL
    let secureClient = PostClient_1.default.getSecureClient(endpoint);
    const metadata = new grpc.Metadata();
    metadata.add('x-api-key', API_KEY);
    secureClient.listPosts({ page: 1 }, metadata, (err, response) => {
        console.log('Post list', err, response);
    });
    secureClient.listPosts({ page: 1 }, (err, response) => {
        console.log('Post list with Error', err, response);
    });
}
main();
//# sourceMappingURL=cmd.js.map