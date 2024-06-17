/**
 * @fileoverview gRPC-Web generated client stub for wiradata.inventories
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.26.1
// source: inventories/brand_service.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var inventories_brand_message_pb = require('../inventories/brand_message_pb.js')

var inventories_generic_message_pb = require('../inventories/generic_message_pb.js')
const proto = {};
proto.wiradata = {};
proto.wiradata.inventories = require('./brand_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.wiradata.inventories.BrandServiceClient =
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
proto.wiradata.inventories.BrandServicePromiseClient =
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
 *   !proto.wiradata.inventories.Brand,
 *   !proto.wiradata.inventories.Brand>}
 */
const methodDescriptor_BrandService_Create = new grpc.web.MethodDescriptor(
  '/wiradata.inventories.BrandService/Create',
  grpc.web.MethodType.UNARY,
  inventories_brand_message_pb.Brand,
  inventories_brand_message_pb.Brand,
  /**
   * @param {!proto.wiradata.inventories.Brand} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  inventories_brand_message_pb.Brand.deserializeBinary
);


/**
 * @param {!proto.wiradata.inventories.Brand} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.wiradata.inventories.Brand)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wiradata.inventories.Brand>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wiradata.inventories.BrandServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wiradata.inventories.BrandService/Create',
      request,
      metadata || {},
      methodDescriptor_BrandService_Create,
      callback);
};


/**
 * @param {!proto.wiradata.inventories.Brand} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wiradata.inventories.Brand>}
 *     Promise that resolves to the response
 */
proto.wiradata.inventories.BrandServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wiradata.inventories.BrandService/Create',
      request,
      metadata || {},
      methodDescriptor_BrandService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wiradata.inventories.Brand,
 *   !proto.wiradata.inventories.Brand>}
 */
const methodDescriptor_BrandService_Update = new grpc.web.MethodDescriptor(
  '/wiradata.inventories.BrandService/Update',
  grpc.web.MethodType.UNARY,
  inventories_brand_message_pb.Brand,
  inventories_brand_message_pb.Brand,
  /**
   * @param {!proto.wiradata.inventories.Brand} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  inventories_brand_message_pb.Brand.deserializeBinary
);


/**
 * @param {!proto.wiradata.inventories.Brand} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.wiradata.inventories.Brand)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wiradata.inventories.Brand>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wiradata.inventories.BrandServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wiradata.inventories.BrandService/Update',
      request,
      metadata || {},
      methodDescriptor_BrandService_Update,
      callback);
};


/**
 * @param {!proto.wiradata.inventories.Brand} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wiradata.inventories.Brand>}
 *     Promise that resolves to the response
 */
proto.wiradata.inventories.BrandServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wiradata.inventories.BrandService/Update',
      request,
      metadata || {},
      methodDescriptor_BrandService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wiradata.inventories.Id,
 *   !proto.wiradata.inventories.Brand>}
 */
const methodDescriptor_BrandService_View = new grpc.web.MethodDescriptor(
  '/wiradata.inventories.BrandService/View',
  grpc.web.MethodType.UNARY,
  inventories_generic_message_pb.Id,
  inventories_brand_message_pb.Brand,
  /**
   * @param {!proto.wiradata.inventories.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  inventories_brand_message_pb.Brand.deserializeBinary
);


/**
 * @param {!proto.wiradata.inventories.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.wiradata.inventories.Brand)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wiradata.inventories.Brand>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wiradata.inventories.BrandServiceClient.prototype.view =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wiradata.inventories.BrandService/View',
      request,
      metadata || {},
      methodDescriptor_BrandService_View,
      callback);
};


/**
 * @param {!proto.wiradata.inventories.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wiradata.inventories.Brand>}
 *     Promise that resolves to the response
 */
proto.wiradata.inventories.BrandServicePromiseClient.prototype.view =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wiradata.inventories.BrandService/View',
      request,
      metadata || {},
      methodDescriptor_BrandService_View);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wiradata.inventories.Id,
 *   !proto.wiradata.inventories.MyBoolean>}
 */
const methodDescriptor_BrandService_Delete = new grpc.web.MethodDescriptor(
  '/wiradata.inventories.BrandService/Delete',
  grpc.web.MethodType.UNARY,
  inventories_generic_message_pb.Id,
  inventories_generic_message_pb.MyBoolean,
  /**
   * @param {!proto.wiradata.inventories.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  inventories_generic_message_pb.MyBoolean.deserializeBinary
);


/**
 * @param {!proto.wiradata.inventories.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.wiradata.inventories.MyBoolean)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wiradata.inventories.MyBoolean>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wiradata.inventories.BrandServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wiradata.inventories.BrandService/Delete',
      request,
      metadata || {},
      methodDescriptor_BrandService_Delete,
      callback);
};


/**
 * @param {!proto.wiradata.inventories.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wiradata.inventories.MyBoolean>}
 *     Promise that resolves to the response
 */
proto.wiradata.inventories.BrandServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wiradata.inventories.BrandService/Delete',
      request,
      metadata || {},
      methodDescriptor_BrandService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wiradata.inventories.Pagination,
 *   !proto.wiradata.inventories.ListBrandResponse>}
 */
const methodDescriptor_BrandService_List = new grpc.web.MethodDescriptor(
  '/wiradata.inventories.BrandService/List',
  grpc.web.MethodType.SERVER_STREAMING,
  inventories_generic_message_pb.Pagination,
  proto.wiradata.inventories.ListBrandResponse,
  /**
   * @param {!proto.wiradata.inventories.Pagination} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wiradata.inventories.ListBrandResponse.deserializeBinary
);


/**
 * @param {!proto.wiradata.inventories.Pagination} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.wiradata.inventories.ListBrandResponse>}
 *     The XHR Node Readable Stream
 */
proto.wiradata.inventories.BrandServiceClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/wiradata.inventories.BrandService/List',
      request,
      metadata || {},
      methodDescriptor_BrandService_List);
};


/**
 * @param {!proto.wiradata.inventories.Pagination} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.wiradata.inventories.ListBrandResponse>}
 *     The XHR Node Readable Stream
 */
proto.wiradata.inventories.BrandServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/wiradata.inventories.BrandService/List',
      request,
      metadata || {},
      methodDescriptor_BrandService_List);
};


module.exports = proto.wiradata.inventories;
