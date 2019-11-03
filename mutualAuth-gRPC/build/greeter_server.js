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
const messages = __importStar(require("./generated/pb/helloworld_pb"));
const services = __importStar(require("./generated/pb/helloworld_grpc_pb"));
const grpc = __importStar(require("grpc"));
const fs_1 = __importDefault(require("fs"));
/**
 * Implements the SayHello RPC method.
 */
function sayHello(call, callback) {
    var reply = new messages.HelloReply();
    reply.setMessage('Hello ' + call.request.getName());
    callback(null, reply);
}
// const certsDir = path.join(process.cwd(), "server-certs");
/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
    var server = new grpc.Server();
    server.addService(services.GreeterService, { sayHello: sayHello });
    // server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
    server.bind("0.0.0.0:50051", grpc.ServerCredentials.createSsl(fs_1.default.readFileSync("certs/server-certs/Group_Microservices.crt"), [{
            private_key: fs_1.default.readFileSync("certs/server-certs/myProcessor.com.key"),
            cert_chain: fs_1.default.readFileSync("certs/server-certs/myProcessor.com.crt")
        }], true));
    server.start();
}
main();
//# sourceMappingURL=greeter_server.js.map