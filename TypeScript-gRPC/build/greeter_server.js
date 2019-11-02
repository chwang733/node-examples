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
/**
 * Implements the SayHello RPC method.
 */
function sayHello(call, callback) {
    var reply = new messages.HelloReply();
    reply.setMessage('Hello ' + call.request.getName());
    callback(null, reply);
}
/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
    var server = new grpc.Server();
    server.addService(services.GreeterService, { sayHello: sayHello });
    server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
    server.start();
}
main();
//# sourceMappingURL=greeter_server.js.map