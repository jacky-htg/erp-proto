/**
 * @fileoverview gRPC-Web generated client stub for wiradata.users
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.26.1
// source: users/company_service.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var users_company_message_pb = require('../users/company_message_pb.js')

var users_generic_message_pb = require('../users/generic_message_pb.js')

var users_user_message_pb = require('../users/user_message_pb.js')
const proto = {};
proto.wiradata = {};
proto.wiradata.users = require('./company_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.wiradata.users.CompanyServiceClient =
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
proto.wiradata.users.CompanyServicePromiseClient =
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
 *   !proto.wiradata.users.CompanyRegistration,
 *   !proto.wiradata.users.CompanyRegistration>}
 */
const methodDescriptor_CompanyService_Registration = new grpc.web.MethodDescriptor(
  '/wiradata.users.CompanyService/Registration',
  grpc.web.MethodType.UNARY,
  proto.wiradata.users.CompanyRegistration,
  proto.wiradata.users.CompanyRegistration,
  /**
   * @param {!proto.wiradata.users.CompanyRegistration} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wiradata.users.CompanyRegistration.deserializeBinary
);


/**
 * @param {!proto.wiradata.users.CompanyRegistration} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.wiradata.users.CompanyRegistration)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wiradata.users.CompanyRegistration>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wiradata.users.CompanyServiceClient.prototype.registration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wiradata.users.CompanyService/Registration',
      request,
      metadata || {},
      methodDescriptor_CompanyService_Registration,
      callback);
};


/**
 * @param {!proto.wiradata.users.CompanyRegistration} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wiradata.users.CompanyRegistration>}
 *     Promise that resolves to the response
 */
proto.wiradata.users.CompanyServicePromiseClient.prototype.registration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wiradata.users.CompanyService/Registration',
      request,
      metadata || {},
      methodDescriptor_CompanyService_Registration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wiradata.users.Company,
 *   !proto.wiradata.users.Company>}
 */
const methodDescriptor_CompanyService_Update = new grpc.web.MethodDescriptor(
  '/wiradata.users.CompanyService/Update',
  grpc.web.MethodType.UNARY,
  users_company_message_pb.Company,
  users_company_message_pb.Company,
  /**
   * @param {!proto.wiradata.users.Company} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  users_company_message_pb.Company.deserializeBinary
);


/**
 * @param {!proto.wiradata.users.Company} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.wiradata.users.Company)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wiradata.users.Company>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wiradata.users.CompanyServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wiradata.users.CompanyService/Update',
      request,
      metadata || {},
      methodDescriptor_CompanyService_Update,
      callback);
};


/**
 * @param {!proto.wiradata.users.Company} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wiradata.users.Company>}
 *     Promise that resolves to the response
 */
proto.wiradata.users.CompanyServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wiradata.users.CompanyService/Update',
      request,
      metadata || {},
      methodDescriptor_CompanyService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wiradata.users.Id,
 *   !proto.wiradata.users.Company>}
 */
const methodDescriptor_CompanyService_View = new grpc.web.MethodDescriptor(
  '/wiradata.users.CompanyService/View',
  grpc.web.MethodType.UNARY,
  users_generic_message_pb.Id,
  users_company_message_pb.Company,
  /**
   * @param {!proto.wiradata.users.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  users_company_message_pb.Company.deserializeBinary
);


/**
 * @param {!proto.wiradata.users.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.wiradata.users.Company)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wiradata.users.Company>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wiradata.users.CompanyServiceClient.prototype.view =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wiradata.users.CompanyService/View',
      request,
      metadata || {},
      methodDescriptor_CompanyService_View,
      callback);
};


/**
 * @param {!proto.wiradata.users.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wiradata.users.Company>}
 *     Promise that resolves to the response
 */
proto.wiradata.users.CompanyServicePromiseClient.prototype.view =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wiradata.users.CompanyService/View',
      request,
      metadata || {},
      methodDescriptor_CompanyService_View);
};


module.exports = proto.wiradata.users;
