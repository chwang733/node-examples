// package: mrr
// file: pb/mrr.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class mrrRequest extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): mrrRequest.AsObject;
    static toObject(includeInstance: boolean, msg: mrrRequest): mrrRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: mrrRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): mrrRequest;
    static deserializeBinaryFromReader(message: mrrRequest, reader: jspb.BinaryReader): mrrRequest;
}

export namespace mrrRequest {
    export type AsObject = {
        message: string,
    }
}

export class mrrResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): mrrResponse.AsObject;
    static toObject(includeInstance: boolean, msg: mrrResponse): mrrResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: mrrResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): mrrResponse;
    static deserializeBinaryFromReader(message: mrrResponse, reader: jspb.BinaryReader): mrrResponse;
}

export namespace mrrResponse {
    export type AsObject = {
        message: string,
    }
}
