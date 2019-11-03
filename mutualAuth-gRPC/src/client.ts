import * as messages from "./generated/pb/helloworld_pb";
import * as services from "./generated/pb/helloworld_grpc_pb";
import * as grpc from "grpc";
import path from "path";
import fs from "fs";

function main() {
  // const certsDir = path.join(process.cwd(), "client-certs");

  // var client = new services.GreeterClient("localhost:50051", grpc.credentials.createInsecure());
  var options = {
    "grpc.ssl_target_name_override" : "myProcessor.com",
    "grpc.default_authority": "myProcessor.com"
  };

  var client = new services.GreeterClient("localhost:50051",
    grpc.credentials.createSsl(
      fs.readFileSync("certs/client-certs/Group_Microservices.crt"),
      fs.readFileSync("certs/client-certs/client-1010101.key"),
      fs.readFileSync("certs/client-certs/client-1010101.crt")
    ), options);
  var request = new messages.HelloRequest();
  var user;
  if (process.argv.length >= 3) {
    user = process.argv[2];
  } else {
    user = "world";
  }
  request.setName(user);
  client.sayHello(request, function(err, response) {
    console.log("Greeting:", response.getMessage());
  });
}

main();
