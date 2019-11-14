import * as mrrMessages from "./generated/proto/mrr_pb";
import * as mrrServices from "./generated/proto/mrr_grpc_pb";
import * as hcMessages from "./generated/proto/healthcheck_pb";
import * as hcServices from "./generated/proto/healthcheck_grpc_pb";
import * as grpc from "grpc";
import path from "path";
import fs from "fs";
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
  
  server.addService(mrrServices.MRRService, {sendMRR: sendMRR});
  server.addService(hcServices.HealthService, {check: check});
  // server.bind("0.0.0.0:50051", grpc.ServerCredentials.createInsecure());
  server.bind("0.0.0.0:50051", grpc.ServerCredentials.createSsl(    
      fs.readFileSync("certs/server-certs/Group_Microservices.crt"),
      [{
          private_key: fs.readFileSync("certs/server-certs/myProcessor.com.key"),
          cert_chain: fs.readFileSync("certs/server-certs/myProcessor.com.crt")
      }],
      true
  )
  );  
  server.start();
}

main();
