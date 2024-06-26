// source: purchases/purchase_return_service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var purchases_purchase_return_message_pb = require('../purchases/purchase_return_message_pb.js');
goog.object.extend(proto, purchases_purchase_return_message_pb);
var purchases_generic_message_pb = require('../purchases/generic_message_pb.js');
goog.object.extend(proto, purchases_generic_message_pb);
goog.exportSymbol('proto.purchases.ListPurchaseReturnRequest', null, global);
goog.exportSymbol('proto.purchases.ListPurchaseReturnResponse', null, global);
goog.exportSymbol('proto.purchases.PurchaseReturnPaginationResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.purchases.ListPurchaseReturnRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.purchases.ListPurchaseReturnRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.purchases.ListPurchaseReturnRequest.displayName = 'proto.purchases.ListPurchaseReturnRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.purchases.PurchaseReturnPaginationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.purchases.PurchaseReturnPaginationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.purchases.PurchaseReturnPaginationResponse.displayName = 'proto.purchases.PurchaseReturnPaginationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.purchases.ListPurchaseReturnResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.purchases.ListPurchaseReturnResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.purchases.ListPurchaseReturnResponse.displayName = 'proto.purchases.ListPurchaseReturnResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.purchases.ListPurchaseReturnRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.purchases.ListPurchaseReturnRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.purchases.ListPurchaseReturnRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.purchases.ListPurchaseReturnRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && purchases_generic_message_pb.Pagination.toObject(includeInstance, f),
    branchId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    purchaseId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.purchases.ListPurchaseReturnRequest}
 */
proto.purchases.ListPurchaseReturnRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.purchases.ListPurchaseReturnRequest;
  return proto.purchases.ListPurchaseReturnRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.purchases.ListPurchaseReturnRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.purchases.ListPurchaseReturnRequest}
 */
proto.purchases.ListPurchaseReturnRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new purchases_generic_message_pb.Pagination;
      reader.readMessage(value,purchases_generic_message_pb.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBranchId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPurchaseId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.purchases.ListPurchaseReturnRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.purchases.ListPurchaseReturnRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.purchases.ListPurchaseReturnRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.purchases.ListPurchaseReturnRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      purchases_generic_message_pb.Pagination.serializeBinaryToWriter
    );
  }
  f = message.getBranchId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPurchaseId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Pagination pagination = 1;
 * @return {?proto.purchases.Pagination}
 */
proto.purchases.ListPurchaseReturnRequest.prototype.getPagination = function() {
  return /** @type{?proto.purchases.Pagination} */ (
    jspb.Message.getWrapperField(this, purchases_generic_message_pb.Pagination, 1));
};


/**
 * @param {?proto.purchases.Pagination|undefined} value
 * @return {!proto.purchases.ListPurchaseReturnRequest} returns this
*/
proto.purchases.ListPurchaseReturnRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.purchases.ListPurchaseReturnRequest} returns this
 */
proto.purchases.ListPurchaseReturnRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.purchases.ListPurchaseReturnRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string branch_id = 2;
 * @return {string}
 */
proto.purchases.ListPurchaseReturnRequest.prototype.getBranchId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.purchases.ListPurchaseReturnRequest} returns this
 */
proto.purchases.ListPurchaseReturnRequest.prototype.setBranchId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string purchase_id = 3;
 * @return {string}
 */
proto.purchases.ListPurchaseReturnRequest.prototype.getPurchaseId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.purchases.ListPurchaseReturnRequest} returns this
 */
proto.purchases.ListPurchaseReturnRequest.prototype.setPurchaseId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.purchases.PurchaseReturnPaginationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.purchases.PurchaseReturnPaginationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.purchases.PurchaseReturnPaginationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.purchases.PurchaseReturnPaginationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && purchases_generic_message_pb.Pagination.toObject(includeInstance, f),
    branchId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    purchaseId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    count: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.purchases.PurchaseReturnPaginationResponse}
 */
proto.purchases.PurchaseReturnPaginationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.purchases.PurchaseReturnPaginationResponse;
  return proto.purchases.PurchaseReturnPaginationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.purchases.PurchaseReturnPaginationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.purchases.PurchaseReturnPaginationResponse}
 */
proto.purchases.PurchaseReturnPaginationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new purchases_generic_message_pb.Pagination;
      reader.readMessage(value,purchases_generic_message_pb.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBranchId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPurchaseId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.purchases.PurchaseReturnPaginationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.purchases.PurchaseReturnPaginationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.purchases.PurchaseReturnPaginationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.purchases.PurchaseReturnPaginationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      purchases_generic_message_pb.Pagination.serializeBinaryToWriter
    );
  }
  f = message.getBranchId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPurchaseId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional Pagination pagination = 1;
 * @return {?proto.purchases.Pagination}
 */
proto.purchases.PurchaseReturnPaginationResponse.prototype.getPagination = function() {
  return /** @type{?proto.purchases.Pagination} */ (
    jspb.Message.getWrapperField(this, purchases_generic_message_pb.Pagination, 1));
};


/**
 * @param {?proto.purchases.Pagination|undefined} value
 * @return {!proto.purchases.PurchaseReturnPaginationResponse} returns this
*/
proto.purchases.PurchaseReturnPaginationResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.purchases.PurchaseReturnPaginationResponse} returns this
 */
proto.purchases.PurchaseReturnPaginationResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.purchases.PurchaseReturnPaginationResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string branch_id = 2;
 * @return {string}
 */
proto.purchases.PurchaseReturnPaginationResponse.prototype.getBranchId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.purchases.PurchaseReturnPaginationResponse} returns this
 */
proto.purchases.PurchaseReturnPaginationResponse.prototype.setBranchId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string purchase_id = 3;
 * @return {string}
 */
proto.purchases.PurchaseReturnPaginationResponse.prototype.getPurchaseId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.purchases.PurchaseReturnPaginationResponse} returns this
 */
proto.purchases.PurchaseReturnPaginationResponse.prototype.setPurchaseId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 count = 4;
 * @return {number}
 */
proto.purchases.PurchaseReturnPaginationResponse.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.purchases.PurchaseReturnPaginationResponse} returns this
 */
proto.purchases.PurchaseReturnPaginationResponse.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.purchases.ListPurchaseReturnResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.purchases.ListPurchaseReturnResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.purchases.ListPurchaseReturnResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.purchases.ListPurchaseReturnResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && proto.purchases.PurchaseReturnPaginationResponse.toObject(includeInstance, f),
    purchasereturn: (f = msg.getPurchasereturn()) && purchases_purchase_return_message_pb.PurchaseReturn.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.purchases.ListPurchaseReturnResponse}
 */
proto.purchases.ListPurchaseReturnResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.purchases.ListPurchaseReturnResponse;
  return proto.purchases.ListPurchaseReturnResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.purchases.ListPurchaseReturnResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.purchases.ListPurchaseReturnResponse}
 */
proto.purchases.ListPurchaseReturnResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.purchases.PurchaseReturnPaginationResponse;
      reader.readMessage(value,proto.purchases.PurchaseReturnPaginationResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = new purchases_purchase_return_message_pb.PurchaseReturn;
      reader.readMessage(value,purchases_purchase_return_message_pb.PurchaseReturn.deserializeBinaryFromReader);
      msg.setPurchasereturn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.purchases.ListPurchaseReturnResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.purchases.ListPurchaseReturnResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.purchases.ListPurchaseReturnResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.purchases.ListPurchaseReturnResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.purchases.PurchaseReturnPaginationResponse.serializeBinaryToWriter
    );
  }
  f = message.getPurchasereturn();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      purchases_purchase_return_message_pb.PurchaseReturn.serializeBinaryToWriter
    );
  }
};


/**
 * optional PurchaseReturnPaginationResponse pagination = 1;
 * @return {?proto.purchases.PurchaseReturnPaginationResponse}
 */
proto.purchases.ListPurchaseReturnResponse.prototype.getPagination = function() {
  return /** @type{?proto.purchases.PurchaseReturnPaginationResponse} */ (
    jspb.Message.getWrapperField(this, proto.purchases.PurchaseReturnPaginationResponse, 1));
};


/**
 * @param {?proto.purchases.PurchaseReturnPaginationResponse|undefined} value
 * @return {!proto.purchases.ListPurchaseReturnResponse} returns this
*/
proto.purchases.ListPurchaseReturnResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.purchases.ListPurchaseReturnResponse} returns this
 */
proto.purchases.ListPurchaseReturnResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.purchases.ListPurchaseReturnResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PurchaseReturn PurchaseReturn = 2;
 * @return {?proto.purchases.PurchaseReturn}
 */
proto.purchases.ListPurchaseReturnResponse.prototype.getPurchasereturn = function() {
  return /** @type{?proto.purchases.PurchaseReturn} */ (
    jspb.Message.getWrapperField(this, purchases_purchase_return_message_pb.PurchaseReturn, 2));
};


/**
 * @param {?proto.purchases.PurchaseReturn|undefined} value
 * @return {!proto.purchases.ListPurchaseReturnResponse} returns this
*/
proto.purchases.ListPurchaseReturnResponse.prototype.setPurchasereturn = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.purchases.ListPurchaseReturnResponse} returns this
 */
proto.purchases.ListPurchaseReturnResponse.prototype.clearPurchasereturn = function() {
  return this.setPurchasereturn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.purchases.ListPurchaseReturnResponse.prototype.hasPurchasereturn = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.purchases);
