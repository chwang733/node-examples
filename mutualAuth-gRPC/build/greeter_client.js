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
function main() {
    // const certsDir = path.join(process.cwd(), "client-certs");
    // var client = new services.GreeterClient('localhost:50051', grpc.credentials.createInsecure());
    var options = {
        'grpc.ssl_target_name_override': 'myProcessor.com',
        'grpc.default_authority': 'myProcessor.com'
    };
    var client = new services.GreeterClient('localhost:50051', grpc.credentials.createSsl(fs_1.default.readFileSync("certs/client-certs/Group_Microservices.crt"), fs_1.default.readFileSync("certs/client-certs/client-1010101.key"), fs_1.default.readFileSync("certs/client-certs/client-1010101.crt")), options);
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