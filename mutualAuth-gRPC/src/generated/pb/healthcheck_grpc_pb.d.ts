// package: grpc.health.v1
// file: pb/healthcheck.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as pb_healthcheck_pb from "../pb/healthcheck_pb";

interface IHealthService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    check: IHealthService_ICheck;
}

interface IHealthService_ICheck extends grpc.MethodDefinition<pb_healthcheck_pb.HealthCheckRequest, pb_healthcheck_pb.HealthCheckResponse> {
    path: string; // "/grpc.health.v1.Health/Check"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<pb_healthcheck_pb.HealthCheckRequest>;
    requestDeserialize: grpc.deserialize<pb_healthcheck_pb.HealthCheckRequest>;
    responseSerialize: grpc.serialize<pb_healthcheck_pb.HealthCheckResponse>;
    responseDeserialize: grpc.deserialize<pb_healthcheck_pb.HealthCheckResponse>;
}

export const HealthService: IHealthService;

export interface IHealthServer {
    check: grpc.handleUnaryCall<pb_healthcheck_pb.HealthCheckRequest, pb_healthcheck_pb.HealthCheckResponse>;
}

export interface IHealthClient {
    check(request: pb_healthcheck_pb.HealthCheckRequest, callback: (error: grpc.ServiceError | null, response: pb_healthcheck_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    check(request: pb_healthcheck_pb.HealthCheckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_healthcheck_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    check(request: pb_healthcheck_pb.HealthCheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_healthcheck_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
}

export class HealthClient extends grpc.Client implements IHealthClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public check(request: pb_healthcheck_pb.HealthCheckRequest, callback: (error: grpc.ServiceError | null, response: pb_healthcheck_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    public check(request: pb_healthcheck_pb.HealthCheckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_healthcheck_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    public check(request: pb_healthcheck_pb.HealthCheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_healthcheck_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
}
