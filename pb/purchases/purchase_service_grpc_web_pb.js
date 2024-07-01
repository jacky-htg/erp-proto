/**
 * @fileoverview gRPC-Web generated client stub for purchases
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.26.1
// source: purchases/purchase_service.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var purchases_purchase_message_pb = require('../purchases/purchase_message_pb.js')

var purchases_generic_message_pb = require('../purchases/generic_message_pb.js')
const proto = {};
proto.purchases = require('./purchase_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.purchases.PurchaseServiceClient =
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
proto.purchases.PurchaseServicePromiseClient =
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
 *   !proto.purchases.Purchase,
 *   !proto.purchases.Purchase>}
 */
const methodDescriptor_PurchaseService_PurchaseCreate = new grpc.web.MethodDescriptor(
  '/purchases.PurchaseService/PurchaseCreate',
  grpc.web.MethodType.UNARY,
  purchases_purchase_message_pb.Purchase,
  purchases_purchase_message_pb.Purchase,
  /**
   * @param {!proto.purchases.Purchase} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  purchases_purchase_message_pb.Purchase.deserializeBinary
);


/**
 * @param {!proto.purchases.Purchase} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.purchases.Purchase)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.purchases.Purchase>|undefined}
 *     The XHR Node Readable Stream
 */
proto.purchases.PurchaseServiceClient.prototype.purchaseCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/purchases.PurchaseService/PurchaseCreate',
      request,
      metadata || {},
      methodDescriptor_PurchaseService_PurchaseCreate,
      callback);
};


/**
 * @param {!proto.purchases.Purchase} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.purchases.Purchase>}
 *     Promise that resolves to the response
 */
proto.purchases.PurchaseServicePromiseClient.prototype.purchaseCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/purchases.PurchaseService/PurchaseCreate',
      request,
      metadata || {},
      methodDescriptor_PurchaseService_PurchaseCreate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.purchases.Purchase,
 *   !proto.purchases.Purchase>}
 */
const methodDescriptor_PurchaseService_PurchaseUpdate = new grpc.web.MethodDescriptor(
  '/purchases.PurchaseService/PurchaseUpdate',
  grpc.web.MethodType.UNARY,
  purchases_purchase_message_pb.Purchase,
  purchases_purchase_message_pb.Purchase,
  /**
   * @param {!proto.purchases.Purchase} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  purchases_purchase_message_pb.Purchase.deserializeBinary
);


/**
 * @param {!proto.purchases.Purchase} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.purchases.Purchase)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.purchases.Purchase>|undefined}
 *     The XHR Node Readable Stream
 */
proto.purchases.PurchaseServiceClient.prototype.purchaseUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/purchases.PurchaseService/PurchaseUpdate',
      request,
      metadata || {},
      methodDescriptor_PurchaseService_PurchaseUpdate,
      callback);
};


/**
 * @param {!proto.purchases.Purchase} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.purchases.Purchase>}
 *     Promise that resolves to the response
 */
proto.purchases.PurchaseServicePromiseClient.prototype.purchaseUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/purchases.PurchaseService/PurchaseUpdate',
      request,
      metadata || {},
      methodDescriptor_PurchaseService_PurchaseUpdate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.purchases.Id,
 *   !proto.purchases.Purchase>}
 */
const methodDescriptor_PurchaseService_PurchaseView = new grpc.web.MethodDescriptor(
  '/purchases.PurchaseService/PurchaseView',
  grpc.web.MethodType.UNARY,
  purchases_generic_message_pb.Id,
  purchases_purchase_message_pb.Purchase,
  /**
   * @param {!proto.purchases.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  purchases_purchase_message_pb.Purchase.deserializeBinary
);


/**
 * @param {!proto.purchases.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.purchases.Purchase)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.purchases.Purchase>|undefined}
 *     The XHR Node Readable Stream
 */
proto.purchases.PurchaseServiceClient.prototype.purchaseView =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/purchases.PurchaseService/PurchaseView',
      request,
      metadata || {},
      methodDescriptor_PurchaseService_PurchaseView,
      callback);
};


/**
 * @param {!proto.purchases.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.purchases.Purchase>}
 *     Promise that resolves to the response
 */
proto.purchases.PurchaseServicePromiseClient.prototype.purchaseView =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/purchases.PurchaseService/PurchaseView',
      request,
      metadata || {},
      methodDescriptor_PurchaseService_PurchaseView);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.purchases.ListPurchaseRequest,
 *   !proto.purchases.ListPurchaseResponse>}
 */
const methodDescriptor_PurchaseService_PurchaseList = new grpc.web.MethodDescriptor(
  '/purchases.PurchaseService/PurchaseList',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.purchases.ListPurchaseRequest,
  proto.purchases.ListPurchaseResponse,
  /**
   * @param {!proto.purchases.ListPurchaseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.purchases.ListPurchaseResponse.deserializeBinary
);


/**
 * @param {!proto.purchases.ListPurchaseRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.purchases.ListPurchaseResponse>}
 *     The XHR Node Readable Stream
 */
proto.purchases.PurchaseServiceClient.prototype.purchaseList =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/purchases.PurchaseService/PurchaseList',
      request,
      metadata || {},
      methodDescriptor_PurchaseService_PurchaseList);
};


/**
 * @param {!proto.purchases.ListPurchaseRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.purchases.ListPurchaseResponse>}
 *     The XHR Node Readable Stream
 */
proto.purchases.PurchaseServicePromiseClient.prototype.purchaseList =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/purchases.PurchaseService/PurchaseList',
      request,
      metadata || {},
      methodDescriptor_PurchaseService_PurchaseList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.purchases.OutstandingPurchaseRequest,
 *   !proto.purchases.OutstandingPurchaseDetails>}
 */
const methodDescriptor_PurchaseService_GetOutstandingPurchaseDetails = new grpc.web.MethodDescriptor(
  '/purchases.PurchaseService/GetOutstandingPurchaseDetails',
  grpc.web.MethodType.UNARY,
  purchases_purchase_message_pb.OutstandingPurchaseRequest,
  purchases_purchase_message_pb.OutstandingPurchaseDetails,
  /**
   * @param {!proto.purchases.OutstandingPurchaseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  purchases_purchase_message_pb.OutstandingPurchaseDetails.deserializeBinary
);


/**
 * @param {!proto.purchases.OutstandingPurchaseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.purchases.OutstandingPurchaseDetails)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.purchases.OutstandingPurchaseDetails>|undefined}
 *     The XHR Node Readable Stream
 */
proto.purchases.PurchaseServiceClient.prototype.getOutstandingPurchaseDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/purchases.PurchaseService/GetOutstandingPurchaseDetails',
      request,
      metadata || {},
      methodDescriptor_PurchaseService_GetOutstandingPurchaseDetails,
      callback);
};


/**
 * @param {!proto.purchases.OutstandingPurchaseRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.purchases.OutstandingPurchaseDetails>}
 *     Promise that resolves to the response
 */
proto.purchases.PurchaseServicePromiseClient.prototype.getOutstandingPurchaseDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/purchases.PurchaseService/GetOutstandingPurchaseDetails',
      request,
      metadata || {},
      methodDescriptor_PurchaseService_GetOutstandingPurchaseDetails);
};


module.exports = proto.purchases;

