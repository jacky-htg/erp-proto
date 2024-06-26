/**
 * @fileoverview gRPC-Web generated client stub for wiradata.inventories
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.26.1
// source: inventories/delivery_service.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var inventories_delivery_message_pb = require('../inventories/delivery_message_pb.js')

var inventories_generic_message_pb = require('../inventories/generic_message_pb.js')
const proto = {};
proto.wiradata = {};
proto.wiradata.inventories = require('./delivery_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.wiradata.inventories.DeliveryServiceClient =
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
proto.wiradata.inventories.DeliveryServicePromiseClient =
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
 *   !proto.wiradata.inventories.Delivery,
 *   !proto.wiradata.inventories.Delivery>}
 */
const methodDescriptor_DeliveryService_Create = new grpc.web.MethodDescriptor(
  '/wiradata.inventories.DeliveryService/Create',
  grpc.web.MethodType.UNARY,
  inventories_delivery_message_pb.Delivery,
  inventories_delivery_message_pb.Delivery,
  /**
   * @param {!proto.wiradata.inventories.Delivery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  inventories_delivery_message_pb.Delivery.deserializeBinary
);


/**
 * @param {!proto.wiradata.inventories.Delivery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.wiradata.inventories.Delivery)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wiradata.inventories.Delivery>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wiradata.inventories.DeliveryServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wiradata.inventories.DeliveryService/Create',
      request,
      metadata || {},
      methodDescriptor_DeliveryService_Create,
      callback);
};


/**
 * @param {!proto.wiradata.inventories.Delivery} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wiradata.inventories.Delivery>}
 *     Promise that resolves to the response
 */
proto.wiradata.inventories.DeliveryServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wiradata.inventories.DeliveryService/Create',
      request,
      metadata || {},
      methodDescriptor_DeliveryService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wiradata.inventories.Delivery,
 *   !proto.wiradata.inventories.Delivery>}
 */
const methodDescriptor_DeliveryService_Update = new grpc.web.MethodDescriptor(
  '/wiradata.inventories.DeliveryService/Update',
  grpc.web.MethodType.UNARY,
  inventories_delivery_message_pb.Delivery,
  inventories_delivery_message_pb.Delivery,
  /**
   * @param {!proto.wiradata.inventories.Delivery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  inventories_delivery_message_pb.Delivery.deserializeBinary
);


/**
 * @param {!proto.wiradata.inventories.Delivery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.wiradata.inventories.Delivery)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wiradata.inventories.Delivery>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wiradata.inventories.DeliveryServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wiradata.inventories.DeliveryService/Update',
      request,
      metadata || {},
      methodDescriptor_DeliveryService_Update,
      callback);
};


/**
 * @param {!proto.wiradata.inventories.Delivery} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wiradata.inventories.Delivery>}
 *     Promise that resolves to the response
 */
proto.wiradata.inventories.DeliveryServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wiradata.inventories.DeliveryService/Update',
      request,
      metadata || {},
      methodDescriptor_DeliveryService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wiradata.inventories.Id,
 *   !proto.wiradata.inventories.Delivery>}
 */
const methodDescriptor_DeliveryService_View = new grpc.web.MethodDescriptor(
  '/wiradata.inventories.DeliveryService/View',
  grpc.web.MethodType.UNARY,
  inventories_generic_message_pb.Id,
  inventories_delivery_message_pb.Delivery,
  /**
   * @param {!proto.wiradata.inventories.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  inventories_delivery_message_pb.Delivery.deserializeBinary
);


/**
 * @param {!proto.wiradata.inventories.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.wiradata.inventories.Delivery)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wiradata.inventories.Delivery>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wiradata.inventories.DeliveryServiceClient.prototype.view =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wiradata.inventories.DeliveryService/View',
      request,
      metadata || {},
      methodDescriptor_DeliveryService_View,
      callback);
};


/**
 * @param {!proto.wiradata.inventories.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wiradata.inventories.Delivery>}
 *     Promise that resolves to the response
 */
proto.wiradata.inventories.DeliveryServicePromiseClient.prototype.view =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wiradata.inventories.DeliveryService/View',
      request,
      metadata || {},
      methodDescriptor_DeliveryService_View);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wiradata.inventories.ListDeliveryRequest,
 *   !proto.wiradata.inventories.ListDeliveryResponse>}
 */
const methodDescriptor_DeliveryService_List = new grpc.web.MethodDescriptor(
  '/wiradata.inventories.DeliveryService/List',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.wiradata.inventories.ListDeliveryRequest,
  proto.wiradata.inventories.ListDeliveryResponse,
  /**
   * @param {!proto.wiradata.inventories.ListDeliveryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wiradata.inventories.ListDeliveryResponse.deserializeBinary
);


/**
 * @param {!proto.wiradata.inventories.ListDeliveryRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.wiradata.inventories.ListDeliveryResponse>}
 *     The XHR Node Readable Stream
 */
proto.wiradata.inventories.DeliveryServiceClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/wiradata.inventories.DeliveryService/List',
      request,
      metadata || {},
      methodDescriptor_DeliveryService_List);
};


/**
 * @param {!proto.wiradata.inventories.ListDeliveryRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.wiradata.inventories.ListDeliveryResponse>}
 *     The XHR Node Readable Stream
 */
proto.wiradata.inventories.DeliveryServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/wiradata.inventories.DeliveryService/List',
      request,
      metadata || {},
      methodDescriptor_DeliveryService_List);
};


module.exports = proto.wiradata.inventories;

