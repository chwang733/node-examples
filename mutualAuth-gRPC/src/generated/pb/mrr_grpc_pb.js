// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var pb_mrr_pb = require('../pb/mrr_pb.js');

function serialize_mrr_mrrRequest(arg) {
  if (!(arg instanceof pb_mrr_pb.mrrRequest)) {
    throw new Error('Expected argument of type mrr.mrrRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mrr_mrrRequest(buffer_arg) {
  return pb_mrr_pb.mrrRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mrr_mrrResponse(arg) {
  if (!(arg instanceof pb_mrr_pb.mrrResponse)) {
    throw new Error('Expected argument of type mrr.mrrResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mrr_mrrResponse(buffer_arg) {
  return pb_mrr_pb.mrrResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MRRService = exports.MRRService = {
  sendMRR: {
    path: '/mrr.MRR/sendMRR',
    requestStream: false,
    responseStream: false,
    requestType: pb_mrr_pb.mrrRequest,
    responseType: pb_mrr_pb.mrrResponse,
    requestSerialize: serialize_mrr_mrrRequest,
    requestDeserialize: deserialize_mrr_mrrRequest,
    responseSerialize: serialize_mrr_mrrResponse,
    responseDeserialize: deserialize_mrr_mrrResponse,
  },
};

exports.MRRClient = grpc.makeGenericClientConstructor(MRRService);
