"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const messages = __importStar(require("./generated/pb/helloworld_pb"));
const services = __importStar(require("./generated/pb/helloworld_grpc_pb"));
const grpc = __importStar(require("grpc"));
// var messages = require('./helloworld_pb');
// var services = require('./helloworld_grpc_pb');
// var grpc = require('grpc');
function main() {
    var client = new services.GreeterClient('localhost:50051', grpc.credentials.createInsecure());
    var request = new messages.HelloRequest();
    var user;
    if (process.argv.length >= 3) {
        user = process.argv[2];
    }
    else {
        user = 'world';
    }
    request.setName(user);
    client.sayHello(request, function (err, response) {
        console.log('Greeting:', response.getMessage());
    });
}
main();
//# sourceMappingURL=greeter_client.js.map