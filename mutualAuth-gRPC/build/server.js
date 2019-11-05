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
const mrrMessages = __importStar(require("./generated/pb/mrr_pb"));
const mrrServices = __importStar(require("./generated/pb/mrr_grpc_pb"));
const hcMessages = __importStar(require("./generated/pb/healthcheck_pb"));
const hcServices = __importStar(require("./generated/pb/healthcheck_grpc_pb"));
const grpc = __importStar(require("grpc"));
const fs_1 = __importDefault(require("fs"));
/**
 * Implements the SayHello RPC method.
 */
function sendMRR(call, callback) {
    var reply = new mrrMessages.mrrResponse();
    reply.setMessage("echo:" + call.request.getMessage());
    callback(null, reply);
}
function check(call, callback) {
    var reply = new hcMessages.HealthCheckResponse();
    reply.setStatus(hcMessages.HealthCheckResponse.ServingStatus.SERVING);
    callback(null, reply);
}
/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
    var server = new grpc.Server();
    server.addService(mrrServices.MRRService, { sendMRR: sendMRR });
    server.addService(hcServices.HealthService, { check: check });
    // server.bind("0.0.0.0:50051", grpc.ServerCredentials.createInsecure());
    server.bind("0.0.0.0:50051", grpc.ServerCredentials.createSsl(fs_1.default.readFileSync("certs/server-certs/Group_Microservices.crt"), [{
            private_key: fs_1.default.readFileSync("certs/server-certs/myProcessor.com.key"),
            cert_chain: fs_1.default.readFileSync("certs/server-certs/myProcessor.com.crt")
        }], true));
    server.start();
}
main();
//# sourceMappingURL=server.js.map