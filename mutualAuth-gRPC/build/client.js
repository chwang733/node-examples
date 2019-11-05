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
function main() {
    var options = {
        "grpc.ssl_target_name_override": "myProcessor.com",
    };
    var client = new mrrServices.MRRClient("localhost:50051", grpc.credentials.createSsl(fs_1.default.readFileSync("certs/client-certs/Group_Microservices.crt"), fs_1.default.readFileSync("certs/client-certs/client-1010101.key"), fs_1.default.readFileSync("certs/client-certs/client-1010101.crt")), options);
    var request = new mrrMessages.mrrRequest();
    request.setMessage("test test");
    client.sendMRR(request, function (err, response) {
        console.log(response.getMessage());
    });
    const hcClient = new hcServices.HealthClient("localhost:50051", grpc.credentials.createSsl(fs_1.default.readFileSync("certs/client-certs/Group_Microservices.crt"), fs_1.default.readFileSync("certs/client-certs/client-1010101.key"), fs_1.default.readFileSync("certs/client-certs/client-1010101.crt")), options);
    let hcRequest = new hcMessages.HealthCheckRequest();
    hcRequest.setService("test");
    hcClient.check(hcRequest, (err, response) => {
        console.log(response.getStatus());
    });
}
main();
//# sourceMappingURL=client.js.map