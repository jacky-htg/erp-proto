/**
 * @fileoverview gRPC-Web generated client stub for wiradata.inventories
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.26.1
// source: inventories/receive_return_service.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var inventories_receive_return_message_pb = require('../inventories/receive_return_message_pb.js')

var inventories_generic_message_pb = require('../inventories/generic_message_pb.js')
const proto = {};
proto.wiradata = {};
proto.wiradata.inventories = require('./receive_return_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.wiradata.inventories.ReceiveReturnServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.wiradata.inventories.ReceiveReturnServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wiradata.inventories.ReceiveReturn,
 *   !proto.wiradata.inventories.ReceiveReturn>}
 */
const methodDescriptor_ReceiveReturnService_Create = new grpc.web.MethodDescriptor(
  '/wiradata.inventories.ReceiveReturnService/Create',
  grpc.web.MethodType.UNARY,
  inventories_receive_return_message_pb.ReceiveReturn,
  inventories_receive_return_message_pb.ReceiveReturn,
  /**
   * @param {!proto.wiradata.inventories.ReceiveReturn} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  inventories_receive_return_message_pb.ReceiveReturn.deserializeBinary
);


/**
 * @param {!proto.wiradata.inventories.ReceiveReturn} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.wiradata.inventories.ReceiveReturn)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wiradata.inventories.ReceiveReturn>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wiradata.inventories.ReceiveReturnServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wiradata.inventories.ReceiveReturnService/Create',
      request,
      metadata || {},
      methodDescriptor_ReceiveReturnService_Create,
      callback);
};


/**
 * @param {!proto.wiradata.inventories.ReceiveReturn} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wiradata.inventories.ReceiveReturn>}
 *     Promise that resolves to the response
 */
proto.wiradata.inventories.ReceiveReturnServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wiradata.inventories.ReceiveReturnService/Create',
      request,
      metadata || {},
      methodDescriptor_ReceiveReturnService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wiradata.inventories.ReceiveReturn,
 *   !proto.wiradata.inventories.ReceiveReturn>}
 */
const methodDescriptor_ReceiveReturnService_Update = new grpc.web.MethodDescriptor(
  '/wiradata.inventories.ReceiveReturnService/Update',
  grpc.web.MethodType.UNARY,
  inventories_receive_return_message_pb.ReceiveReturn,
  inventories_receive_return_message_pb.ReceiveReturn,
  /**
   * @param {!proto.wiradata.inventories.ReceiveReturn} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  inventories_receive_return_message_pb.ReceiveReturn.deserializeBinary
);


/**
 * @param {!proto.wiradata.inventories.ReceiveReturn} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.wiradata.inventories.ReceiveReturn)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wiradata.inventories.ReceiveReturn>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wiradata.inventories.ReceiveReturnServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wiradata.inventories.ReceiveReturnService/Update',
      request,
      metadata || {},
      methodDescriptor_ReceiveReturnService_Update,
      callback);
};


/**
 * @param {!proto.wiradata.inventories.ReceiveReturn} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wiradata.inventories.ReceiveReturn>}
 *     Promise that resolves to the response
 */
proto.wiradata.inventories.ReceiveReturnServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wiradata.inventories.ReceiveReturnService/Update',
      request,
      metadata || {},
      methodDescriptor_ReceiveReturnService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wiradata.inventories.Id,
 *   !proto.wiradata.inventories.ReceiveReturn>}
 */
const methodDescriptor_ReceiveReturnService_View = new grpc.web.MethodDescriptor(
  '/wiradata.inventories.ReceiveReturnService/View',
  grpc.web.MethodType.UNARY,
  inventories_generic_message_pb.Id,
  inventories_receive_return_message_pb.ReceiveReturn,
  /**
   * @param {!proto.wiradata.inventories.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  inventories_receive_return_message_pb.ReceiveReturn.deserializeBinary
);


/**
 * @param {!proto.wiradata.inventories.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.wiradata.inventories.ReceiveReturn)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wiradata.inventories.ReceiveReturn>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wiradata.inventories.ReceiveReturnServiceClient.prototype.view =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wiradata.inventories.ReceiveReturnService/View',
      request,
      metadata || {},
      methodDescriptor_ReceiveReturnService_View,
      callback);
};


/**
 * @param {!proto.wiradata.inventories.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wiradata.inventories.ReceiveReturn>}
 *     Promise that resolves to the response
 */
proto.wiradata.inventories.ReceiveReturnServicePromiseClient.prototype.view =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wiradata.inventories.ReceiveReturnService/View',
      request,
      metadata || {},
      methodDescriptor_ReceiveReturnService_View);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wiradata.inventories.ListReceiveReturnRequest,
 *   !proto.wiradata.inventories.ListReceiveReturnResponse>}
 */
const methodDescriptor_ReceiveReturnService_List = new grpc.web.MethodDescriptor(
  '/wiradata.inventories.ReceiveReturnService/List',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.wiradata.inventories.ListReceiveReturnRequest,
  proto.wiradata.inventories.ListReceiveReturnResponse,
  /**
   * @param {!proto.wiradata.inventories.ListReceiveReturnRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wiradata.inventories.ListReceiveReturnResponse.deserializeBinary
);


/**
 * @param {!proto.wiradata.inventories.ListReceiveReturnRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.wiradata.inventories.ListReceiveReturnResponse>}
 *     The XHR Node Readable Stream
 */
proto.wiradata.inventories.ReceiveReturnServiceClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/wiradata.inventories.ReceiveReturnService/List',
      request,
      metadata || {},
      methodDescriptor_ReceiveReturnService_List);
};


/**
 * @param {!proto.wiradata.inventories.ListReceiveReturnRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.wiradata.inventories.ListReceiveReturnResponse>}
 *     The XHR Node Readable Stream
 */
proto.wiradata.inventories.ReceiveReturnServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/wiradata.inventories.ReceiveReturnService/List',
      request,
      metadata || {},
      methodDescriptor_ReceiveReturnService_List);
};


module.exports = proto.wiradata.inventories;

