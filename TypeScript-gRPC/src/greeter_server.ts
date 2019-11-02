import * as messages from "./generated/pb/helloworld_pb";
import * as services from "./generated/pb/helloworld_grpc_pb";
import * as grpc from "grpc";

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
  server.addService(services.GreeterService, {sayHello: sayHello});
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
}

main();
