/**
 * @fileoverview gRPC-Web generated client stub for purchases
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.26.1
// source: purchases/supplier_service.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var purchases_supplier_message_pb = require('../purchases/supplier_message_pb.js')

var purchases_generic_message_pb = require('../purchases/generic_message_pb.js')
const proto = {};
proto.purchases = require('./supplier_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.purchases.SupplierServiceClient =
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
proto.purchases.SupplierServicePromiseClient =
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
 *   !proto.purchases.Supplier,
 *   !proto.purchases.Supplier>}
 */
const methodDescriptor_SupplierService_SupplierCreate = new grpc.web.MethodDescriptor(
  '/purchases.SupplierService/SupplierCreate',
  grpc.web.MethodType.UNARY,
  purchases_supplier_message_pb.Supplier,
  purchases_supplier_message_pb.Supplier,
  /**
   * @param {!proto.purchases.Supplier} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  purchases_supplier_message_pb.Supplier.deserializeBinary
);


/**
 * @param {!proto.purchases.Supplier} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.purchases.Supplier)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.purchases.Supplier>|undefined}
 *     The XHR Node Readable Stream
 */
proto.purchases.SupplierServiceClient.prototype.supplierCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/purchases.SupplierService/SupplierCreate',
      request,
      metadata || {},
      methodDescriptor_SupplierService_SupplierCreate,
      callback);
};


/**
 * @param {!proto.purchases.Supplier} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.purchases.Supplier>}
 *     Promise that resolves to the response
 */
proto.purchases.SupplierServicePromiseClient.prototype.supplierCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/purchases.SupplierService/SupplierCreate',
      request,
      metadata || {},
      methodDescriptor_SupplierService_SupplierCreate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.purchases.Supplier,
 *   !proto.purchases.Supplier>}
 */
const methodDescriptor_SupplierService_SupplierUpdate = new grpc.web.MethodDescriptor(
  '/purchases.SupplierService/SupplierUpdate',
  grpc.web.MethodType.UNARY,
  purchases_supplier_message_pb.Supplier,
  purchases_supplier_message_pb.Supplier,
  /**
   * @param {!proto.purchases.Supplier} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  purchases_supplier_message_pb.Supplier.deserializeBinary
);


/**
 * @param {!proto.purchases.Supplier} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.purchases.Supplier)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.purchases.Supplier>|undefined}
 *     The XHR Node Readable Stream
 */
proto.purchases.SupplierServiceClient.prototype.supplierUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/purchases.SupplierService/SupplierUpdate',
      request,
      metadata || {},
      methodDescriptor_SupplierService_SupplierUpdate,
      callback);
};


/**
 * @param {!proto.purchases.Supplier} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.purchases.Supplier>}
 *     Promise that resolves to the response
 */
proto.purchases.SupplierServicePromiseClient.prototype.supplierUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/purchases.SupplierService/SupplierUpdate',
      request,
      metadata || {},
      methodDescriptor_SupplierService_SupplierUpdate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.purchases.Id,
 *   !proto.purchases.Supplier>}
 */
const methodDescriptor_SupplierService_SupplierView = new grpc.web.MethodDescriptor(
  '/purchases.SupplierService/SupplierView',
  grpc.web.MethodType.UNARY,
  purchases_generic_message_pb.Id,
  purchases_supplier_message_pb.Supplier,
  /**
   * @param {!proto.purchases.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  purchases_supplier_message_pb.Supplier.deserializeBinary
);


/**
 * @param {!proto.purchases.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.purchases.Supplier)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.purchases.Supplier>|undefined}
 *     The XHR Node Readable Stream
 */
proto.purchases.SupplierServiceClient.prototype.supplierView =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/purchases.SupplierService/SupplierView',
      request,
      metadata || {},
      methodDescriptor_SupplierService_SupplierView,
      callback);
};


/**
 * @param {!proto.purchases.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.purchases.Supplier>}
 *     Promise that resolves to the response
 */
proto.purchases.SupplierServicePromiseClient.prototype.supplierView =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/purchases.SupplierService/SupplierView',
      request,
      metadata || {},
      methodDescriptor_SupplierService_SupplierView);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.purchases.ListSupplierRequest,
 *   !proto.purchases.ListSupplierResponse>}
 */
const methodDescriptor_SupplierService_SupplierList = new grpc.web.MethodDescriptor(
  '/purchases.SupplierService/SupplierList',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.purchases.ListSupplierRequest,
  proto.purchases.ListSupplierResponse,
  /**
   * @param {!proto.purchases.ListSupplierRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.purchases.ListSupplierResponse.deserializeBinary
);


/**
 * @param {!proto.purchases.ListSupplierRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.purchases.ListSupplierResponse>}
 *     The XHR Node Readable Stream
 */
proto.purchases.SupplierServiceClient.prototype.supplierList =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/purchases.SupplierService/SupplierList',
      request,
      metadata || {},
      methodDescriptor_SupplierService_SupplierList);
};


/**
 * @param {!proto.purchases.ListSupplierRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.purchases.ListSupplierResponse>}
 *     The XHR Node Readable Stream
 */
proto.purchases.SupplierServicePromiseClient.prototype.supplierList =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/purchases.SupplierService/SupplierList',
      request,
      metadata || {},
      methodDescriptor_SupplierService_SupplierList);
};


module.exports = proto.purchases;

