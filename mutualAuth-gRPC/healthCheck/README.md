$ grpc_health_probe-linux-amd64 -addr 127.0.0.1:50051 -tls -tls-ca-cert ../certs/client-certs/Group_Microservices.crt -tls-server-name=myProcessor.com -tls-client-cert ../certs/client-certs/client-1010101.crt -tls-client-key ../certs/client-certs/client-1010101.key

spec:
  containers:
  - name: server
    image: "[YOUR-DOCKER-IMAGE]"
    ports:
    - containerPort: 5000
    readinessProbe:
      exec:
        command: ["/bin/grpc_health_probe", "-addr=:5000"]
      initialDelaySeconds: 5
    livenessProbe:
      exec:
        command: ["/bin/grpc_health_probe", "-addr=:5000"]
      initialDelaySeconds: 10
