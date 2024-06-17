/**
 * @fileoverview gRPC-Web generated client stub for wiradata.inventories
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.26.1
// source: inventories/shelve_service.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var inventories_shelve_message_pb = require('../inventories/shelve_message_pb.js')

var inventories_generic_message_pb = require('../inventories/generic_message_pb.js')
const proto = {};
proto.wiradata = {};
proto.wiradata.inventories = require('./shelve_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.wiradata.inventories.ShelveServiceClient =
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
proto.wiradata.inventories.ShelveServicePromiseClient =
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
 *   !proto.wiradata.inventories.Shelve,
 *   !proto.wiradata.inventories.Shelve>}
 */
const methodDescriptor_ShelveService_Create = new grpc.web.MethodDescriptor(
  '/wiradata.inventories.ShelveService/Create',
  grpc.web.MethodType.UNARY,
  inventories_shelve_message_pb.Shelve,
  inventories_shelve_message_pb.Shelve,
  /**
   * @param {!proto.wiradata.inventories.Shelve} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  inventories_shelve_message_pb.Shelve.deserializeBinary
);


/**
 * @param {!proto.wiradata.inventories.Shelve} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.wiradata.inventories.Shelve)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wiradata.inventories.Shelve>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wiradata.inventories.ShelveServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wiradata.inventories.ShelveService/Create',
      request,
      metadata || {},
      methodDescriptor_ShelveService_Create,
      callback);
};


/**
 * @param {!proto.wiradata.inventories.Shelve} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wiradata.inventories.Shelve>}
 *     Promise that resolves to the response
 */
proto.wiradata.inventories.ShelveServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wiradata.inventories.ShelveService/Create',
      request,
      metadata || {},
      methodDescriptor_ShelveService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wiradata.inventories.Shelve,
 *   !proto.wiradata.inventories.Shelve>}
 */
const methodDescriptor_ShelveService_Update = new grpc.web.MethodDescriptor(
  '/wiradata.inventories.ShelveService/Update',
  grpc.web.MethodType.UNARY,
  inventories_shelve_message_pb.Shelve,
  inventories_shelve_message_pb.Shelve,
  /**
   * @param {!proto.wiradata.inventories.Shelve} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  inventories_shelve_message_pb.Shelve.deserializeBinary
);


/**
 * @param {!proto.wiradata.inventories.Shelve} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.wiradata.inventories.Shelve)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wiradata.inventories.Shelve>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wiradata.inventories.ShelveServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wiradata.inventories.ShelveService/Update',
      request,
      metadata || {},
      methodDescriptor_ShelveService_Update,
      callback);
};


/**
 * @param {!proto.wiradata.inventories.Shelve} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wiradata.inventories.Shelve>}
 *     Promise that resolves to the response
 */
proto.wiradata.inventories.ShelveServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wiradata.inventories.ShelveService/Update',
      request,
      metadata || {},
      methodDescriptor_ShelveService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wiradata.inventories.Id,
 *   !proto.wiradata.inventories.Shelve>}
 */
const methodDescriptor_ShelveService_View = new grpc.web.MethodDescriptor(
  '/wiradata.inventories.ShelveService/View',
  grpc.web.MethodType.UNARY,
  inventories_generic_message_pb.Id,
  inventories_shelve_message_pb.Shelve,
  /**
   * @param {!proto.wiradata.inventories.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  inventories_shelve_message_pb.Shelve.deserializeBinary
);


/**
 * @param {!proto.wiradata.inventories.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.wiradata.inventories.Shelve)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wiradata.inventories.Shelve>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wiradata.inventories.ShelveServiceClient.prototype.view =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wiradata.inventories.ShelveService/View',
      request,
      metadata || {},
      methodDescriptor_ShelveService_View,
      callback);
};


/**
 * @param {!proto.wiradata.inventories.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wiradata.inventories.Shelve>}
 *     Promise that resolves to the response
 */
proto.wiradata.inventories.ShelveServicePromiseClient.prototype.view =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wiradata.inventories.ShelveService/View',
      request,
      metadata || {},
      methodDescriptor_ShelveService_View);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wiradata.inventories.Id,
 *   !proto.wiradata.inventories.MyBoolean>}
 */
const methodDescriptor_ShelveService_Delete = new grpc.web.MethodDescriptor(
  '/wiradata.inventories.ShelveService/Delete',
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
proto.wiradata.inventories.ShelveServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wiradata.inventories.ShelveService/Delete',
      request,
      metadata || {},
      methodDescriptor_ShelveService_Delete,
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
proto.wiradata.inventories.ShelveServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wiradata.inventories.ShelveService/Delete',
      request,
      metadata || {},
      methodDescriptor_ShelveService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wiradata.inventories.ListShelveRequest,
 *   !proto.wiradata.inventories.ListShelveResponse>}
 */
const methodDescriptor_ShelveService_List = new grpc.web.MethodDescriptor(
  '/wiradata.inventories.ShelveService/List',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.wiradata.inventories.ListShelveRequest,
  proto.wiradata.inventories.ListShelveResponse,
  /**
   * @param {!proto.wiradata.inventories.ListShelveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wiradata.inventories.ListShelveResponse.deserializeBinary
);


/**
 * @param {!proto.wiradata.inventories.ListShelveRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.wiradata.inventories.ListShelveResponse>}
 *     The XHR Node Readable Stream
 */
proto.wiradata.inventories.ShelveServiceClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/wiradata.inventories.ShelveService/List',
      request,
      metadata || {},
      methodDescriptor_ShelveService_List);
};


/**
 * @param {!proto.wiradata.inventories.ListShelveRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.wiradata.inventories.ListShelveResponse>}
 *     The XHR Node Readable Stream
 */
proto.wiradata.inventories.ShelveServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/wiradata.inventories.ShelveService/List',
      request,
      metadata || {},
      methodDescriptor_ShelveService_List);
};


module.exports = proto.wiradata.inventories;
