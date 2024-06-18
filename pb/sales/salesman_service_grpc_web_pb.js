/**
 * @fileoverview gRPC-Web generated client stub for sales
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.26.1
// source: sales/salesman_service.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var sales_salesman_message_pb = require('../sales/salesman_message_pb.js')

var sales_generic_message_pb = require('../sales/generic_message_pb.js')
const proto = {};
proto.sales = require('./salesman_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.sales.SalesmanServiceClient =
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
proto.sales.SalesmanServicePromiseClient =
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
 *   !proto.sales.Salesman,
 *   !proto.sales.Salesman>}
 */
const methodDescriptor_SalesmanService_SalesmanCreate = new grpc.web.MethodDescriptor(
  '/sales.SalesmanService/SalesmanCreate',
  grpc.web.MethodType.UNARY,
  sales_salesman_message_pb.Salesman,
  sales_salesman_message_pb.Salesman,
  /**
   * @param {!proto.sales.Salesman} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sales_salesman_message_pb.Salesman.deserializeBinary
);


/**
 * @param {!proto.sales.Salesman} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.sales.Salesman)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sales.Salesman>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sales.SalesmanServiceClient.prototype.salesmanCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sales.SalesmanService/SalesmanCreate',
      request,
      metadata || {},
      methodDescriptor_SalesmanService_SalesmanCreate,
      callback);
};


/**
 * @param {!proto.sales.Salesman} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sales.Salesman>}
 *     Promise that resolves to the response
 */
proto.sales.SalesmanServicePromiseClient.prototype.salesmanCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sales.SalesmanService/SalesmanCreate',
      request,
      metadata || {},
      methodDescriptor_SalesmanService_SalesmanCreate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sales.Salesman,
 *   !proto.sales.Salesman>}
 */
const methodDescriptor_SalesmanService_SalesmanUpdate = new grpc.web.MethodDescriptor(
  '/sales.SalesmanService/SalesmanUpdate',
  grpc.web.MethodType.UNARY,
  sales_salesman_message_pb.Salesman,
  sales_salesman_message_pb.Salesman,
  /**
   * @param {!proto.sales.Salesman} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sales_salesman_message_pb.Salesman.deserializeBinary
);


/**
 * @param {!proto.sales.Salesman} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.sales.Salesman)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sales.Salesman>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sales.SalesmanServiceClient.prototype.salesmanUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sales.SalesmanService/SalesmanUpdate',
      request,
      metadata || {},
      methodDescriptor_SalesmanService_SalesmanUpdate,
      callback);
};


/**
 * @param {!proto.sales.Salesman} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sales.Salesman>}
 *     Promise that resolves to the response
 */
proto.sales.SalesmanServicePromiseClient.prototype.salesmanUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sales.SalesmanService/SalesmanUpdate',
      request,
      metadata || {},
      methodDescriptor_SalesmanService_SalesmanUpdate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sales.Id,
 *   !proto.sales.Salesman>}
 */
const methodDescriptor_SalesmanService_SalesmanView = new grpc.web.MethodDescriptor(
  '/sales.SalesmanService/SalesmanView',
  grpc.web.MethodType.UNARY,
  sales_generic_message_pb.Id,
  sales_salesman_message_pb.Salesman,
  /**
   * @param {!proto.sales.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sales_salesman_message_pb.Salesman.deserializeBinary
);


/**
 * @param {!proto.sales.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.sales.Salesman)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sales.Salesman>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sales.SalesmanServiceClient.prototype.salesmanView =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sales.SalesmanService/SalesmanView',
      request,
      metadata || {},
      methodDescriptor_SalesmanService_SalesmanView,
      callback);
};


/**
 * @param {!proto.sales.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sales.Salesman>}
 *     Promise that resolves to the response
 */
proto.sales.SalesmanServicePromiseClient.prototype.salesmanView =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sales.SalesmanService/SalesmanView',
      request,
      metadata || {},
      methodDescriptor_SalesmanService_SalesmanView);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sales.ListSalesmanRequest,
 *   !proto.sales.ListSalesmanResponse>}
 */
const methodDescriptor_SalesmanService_SalesmanList = new grpc.web.MethodDescriptor(
  '/sales.SalesmanService/SalesmanList',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.sales.ListSalesmanRequest,
  proto.sales.ListSalesmanResponse,
  /**
   * @param {!proto.sales.ListSalesmanRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sales.ListSalesmanResponse.deserializeBinary
);


/**
 * @param {!proto.sales.ListSalesmanRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.sales.ListSalesmanResponse>}
 *     The XHR Node Readable Stream
 */
proto.sales.SalesmanServiceClient.prototype.salesmanList =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/sales.SalesmanService/SalesmanList',
      request,
      metadata || {},
      methodDescriptor_SalesmanService_SalesmanList);
};


/**
 * @param {!proto.sales.ListSalesmanRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.sales.ListSalesmanResponse>}
 *     The XHR Node Readable Stream
 */
proto.sales.SalesmanServicePromiseClient.prototype.salesmanList =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/sales.SalesmanService/SalesmanList',
      request,
      metadata || {},
      methodDescriptor_SalesmanService_SalesmanList);
};


module.exports = proto.sales;

