// package: mrr
// file: proto/mrr.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as proto_mrr_pb from "../proto/mrr_pb";

interface IMRRService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sendMRR: IMRRService_IsendMRR;
}

interface IMRRService_IsendMRR extends grpc.MethodDefinition<proto_mrr_pb.mrrRequest, proto_mrr_pb.mrrResponse> {
    path: string; // "/mrr.MRR/sendMRR"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<proto_mrr_pb.mrrRequest>;
    requestDeserialize: grpc.deserialize<proto_mrr_pb.mrrRequest>;
    responseSerialize: grpc.serialize<proto_mrr_pb.mrrResponse>;
    responseDeserialize: grpc.deserialize<proto_mrr_pb.mrrResponse>;
}

export const MRRService: IMRRService;

export interface IMRRServer {
    sendMRR: grpc.handleUnaryCall<proto_mrr_pb.mrrRequest, proto_mrr_pb.mrrResponse>;
}

export interface IMRRClient {
    sendMRR(request: proto_mrr_pb.mrrRequest, callback: (error: grpc.ServiceError | null, response: proto_mrr_pb.mrrResponse) => void): grpc.ClientUnaryCall;
    sendMRR(request: proto_mrr_pb.mrrRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_mrr_pb.mrrResponse) => void): grpc.ClientUnaryCall;
    sendMRR(request: proto_mrr_pb.mrrRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_mrr_pb.mrrResponse) => void): grpc.ClientUnaryCall;
}

export class MRRClient extends grpc.Client implements IMRRClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sendMRR(request: proto_mrr_pb.mrrRequest, callback: (error: grpc.ServiceError | null, response: proto_mrr_pb.mrrResponse) => void): grpc.ClientUnaryCall;
    public sendMRR(request: proto_mrr_pb.mrrRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_mrr_pb.mrrResponse) => void): grpc.ClientUnaryCall;
    public sendMRR(request: proto_mrr_pb.mrrRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_mrr_pb.mrrResponse) => void): grpc.ClientUnaryCall;
}
