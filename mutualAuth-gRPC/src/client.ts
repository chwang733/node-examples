import * as mrrMessages from "./generated/pb/mrr_pb";
import * as mrrServices from "./generated/pb/mrr_grpc_pb";
import * as hcMessages from "./generated/pb/healthcheck_pb";
import * as hcServices from "./generated/pb/healthcheck_grpc_pb";
import * as grpc from "grpc";
import fs from "fs";

function main() {
  var options = {
    "grpc.ssl_target_name_override" : "myProcessor.com",
  };

  var client = new mrrServices.MRRClient("localhost:50051",
    grpc.credentials.createSsl(
      fs.readFileSync("certs/client-certs/Group_Microservices.crt"),
      fs.readFileSync("certs/client-certs/client-1010101.key"),
      fs.readFileSync("certs/client-certs/client-1010101.crt")
    ), options);
  var request = new mrrMessages.mrrRequest();
  request.setMessage("test test");
  client.sendMRR(request, function(err, response) {
    console.log(response.getMessage());
  });

  const hcClient = new hcServices.HealthClient("localhost:50051",
    grpc.credentials.createSsl(
      fs.readFileSync("certs/client-certs/Group_Microservices.crt"),
      fs.readFileSync("certs/client-certs/client-1010101.key"),
      fs.readFileSync("certs/client-certs/client-1010101.crt")
    ), options);

  let hcRequest = new hcMessages.HealthCheckRequest();
  hcRequest.setService("test");
  hcClient.check(hcRequest, (err, response) => {
    console.log(response.getStatus())
  })
}

main();
