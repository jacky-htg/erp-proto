// source: inventories/delivery_service.proto
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

var inventories_delivery_message_pb = require('../inventories/delivery_message_pb.js');
goog.object.extend(proto, inventories_delivery_message_pb);
var inventories_generic_message_pb = require('../inventories/generic_message_pb.js');
goog.object.extend(proto, inventories_generic_message_pb);
goog.exportSymbol('proto.wiradata.inventories.DeliveryPaginationResponse', null, global);
goog.exportSymbol('proto.wiradata.inventories.ListDeliveryRequest', null, global);
goog.exportSymbol('proto.wiradata.inventories.ListDeliveryResponse', null, global);
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
proto.wiradata.inventories.ListDeliveryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wiradata.inventories.ListDeliveryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wiradata.inventories.ListDeliveryRequest.displayName = 'proto.wiradata.inventories.ListDeliveryRequest';
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
proto.wiradata.inventories.DeliveryPaginationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wiradata.inventories.DeliveryPaginationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wiradata.inventories.DeliveryPaginationResponse.displayName = 'proto.wiradata.inventories.DeliveryPaginationResponse';
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
proto.wiradata.inventories.ListDeliveryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wiradata.inventories.ListDeliveryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wiradata.inventories.ListDeliveryResponse.displayName = 'proto.wiradata.inventories.ListDeliveryResponse';
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
proto.wiradata.inventories.ListDeliveryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.wiradata.inventories.ListDeliveryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wiradata.inventories.ListDeliveryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.inventories.ListDeliveryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && inventories_generic_message_pb.Pagination.toObject(includeInstance, f),
    branchId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    salesOrderId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.wiradata.inventories.ListDeliveryRequest}
 */
proto.wiradata.inventories.ListDeliveryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wiradata.inventories.ListDeliveryRequest;
  return proto.wiradata.inventories.ListDeliveryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wiradata.inventories.ListDeliveryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wiradata.inventories.ListDeliveryRequest}
 */
proto.wiradata.inventories.ListDeliveryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new inventories_generic_message_pb.Pagination;
      reader.readMessage(value,inventories_generic_message_pb.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBranchId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSalesOrderId(value);
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
proto.wiradata.inventories.ListDeliveryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wiradata.inventories.ListDeliveryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wiradata.inventories.ListDeliveryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.inventories.ListDeliveryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      inventories_generic_message_pb.Pagination.serializeBinaryToWriter
    );
  }
  f = message.getBranchId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSalesOrderId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Pagination pagination = 1;
 * @return {?proto.wiradata.inventories.Pagination}
 */
proto.wiradata.inventories.ListDeliveryRequest.prototype.getPagination = function() {
  return /** @type{?proto.wiradata.inventories.Pagination} */ (
    jspb.Message.getWrapperField(this, inventories_generic_message_pb.Pagination, 1));
};


/**
 * @param {?proto.wiradata.inventories.Pagination|undefined} value
 * @return {!proto.wiradata.inventories.ListDeliveryRequest} returns this
*/
proto.wiradata.inventories.ListDeliveryRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wiradata.inventories.ListDeliveryRequest} returns this
 */
proto.wiradata.inventories.ListDeliveryRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wiradata.inventories.ListDeliveryRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string branch_id = 2;
 * @return {string}
 */
proto.wiradata.inventories.ListDeliveryRequest.prototype.getBranchId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.inventories.ListDeliveryRequest} returns this
 */
proto.wiradata.inventories.ListDeliveryRequest.prototype.setBranchId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sales_order_id = 3;
 * @return {string}
 */
proto.wiradata.inventories.ListDeliveryRequest.prototype.getSalesOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.inventories.ListDeliveryRequest} returns this
 */
proto.wiradata.inventories.ListDeliveryRequest.prototype.setSalesOrderId = function(value) {
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
proto.wiradata.inventories.DeliveryPaginationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.wiradata.inventories.DeliveryPaginationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wiradata.inventories.DeliveryPaginationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.inventories.DeliveryPaginationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && inventories_generic_message_pb.Pagination.toObject(includeInstance, f),
    branchId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    salesOrderId: jspb.Message.getFieldWithDefault(msg, 3, ""),
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
 * @return {!proto.wiradata.inventories.DeliveryPaginationResponse}
 */
proto.wiradata.inventories.DeliveryPaginationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wiradata.inventories.DeliveryPaginationResponse;
  return proto.wiradata.inventories.DeliveryPaginationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wiradata.inventories.DeliveryPaginationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wiradata.inventories.DeliveryPaginationResponse}
 */
proto.wiradata.inventories.DeliveryPaginationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new inventories_generic_message_pb.Pagination;
      reader.readMessage(value,inventories_generic_message_pb.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBranchId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSalesOrderId(value);
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
proto.wiradata.inventories.DeliveryPaginationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wiradata.inventories.DeliveryPaginationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wiradata.inventories.DeliveryPaginationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.inventories.DeliveryPaginationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      inventories_generic_message_pb.Pagination.serializeBinaryToWriter
    );
  }
  f = message.getBranchId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSalesOrderId();
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
 * @return {?proto.wiradata.inventories.Pagination}
 */
proto.wiradata.inventories.DeliveryPaginationResponse.prototype.getPagination = function() {
  return /** @type{?proto.wiradata.inventories.Pagination} */ (
    jspb.Message.getWrapperField(this, inventories_generic_message_pb.Pagination, 1));
};


/**
 * @param {?proto.wiradata.inventories.Pagination|undefined} value
 * @return {!proto.wiradata.inventories.DeliveryPaginationResponse} returns this
*/
proto.wiradata.inventories.DeliveryPaginationResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wiradata.inventories.DeliveryPaginationResponse} returns this
 */
proto.wiradata.inventories.DeliveryPaginationResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wiradata.inventories.DeliveryPaginationResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string branch_id = 2;
 * @return {string}
 */
proto.wiradata.inventories.DeliveryPaginationResponse.prototype.getBranchId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.inventories.DeliveryPaginationResponse} returns this
 */
proto.wiradata.inventories.DeliveryPaginationResponse.prototype.setBranchId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sales_order_id = 3;
 * @return {string}
 */
proto.wiradata.inventories.DeliveryPaginationResponse.prototype.getSalesOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.inventories.DeliveryPaginationResponse} returns this
 */
proto.wiradata.inventories.DeliveryPaginationResponse.prototype.setSalesOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 count = 4;
 * @return {number}
 */
proto.wiradata.inventories.DeliveryPaginationResponse.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.wiradata.inventories.DeliveryPaginationResponse} returns this
 */
proto.wiradata.inventories.DeliveryPaginationResponse.prototype.setCount = function(value) {
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
proto.wiradata.inventories.ListDeliveryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.wiradata.inventories.ListDeliveryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wiradata.inventories.ListDeliveryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.inventories.ListDeliveryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && proto.wiradata.inventories.DeliveryPaginationResponse.toObject(includeInstance, f),
    delivery: (f = msg.getDelivery()) && inventories_delivery_message_pb.Delivery.toObject(includeInstance, f)
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
 * @return {!proto.wiradata.inventories.ListDeliveryResponse}
 */
proto.wiradata.inventories.ListDeliveryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wiradata.inventories.ListDeliveryResponse;
  return proto.wiradata.inventories.ListDeliveryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wiradata.inventories.ListDeliveryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wiradata.inventories.ListDeliveryResponse}
 */
proto.wiradata.inventories.ListDeliveryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wiradata.inventories.DeliveryPaginationResponse;
      reader.readMessage(value,proto.wiradata.inventories.DeliveryPaginationResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = new inventories_delivery_message_pb.Delivery;
      reader.readMessage(value,inventories_delivery_message_pb.Delivery.deserializeBinaryFromReader);
      msg.setDelivery(value);
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
proto.wiradata.inventories.ListDeliveryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wiradata.inventories.ListDeliveryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wiradata.inventories.ListDeliveryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.inventories.ListDeliveryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wiradata.inventories.DeliveryPaginationResponse.serializeBinaryToWriter
    );
  }
  f = message.getDelivery();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      inventories_delivery_message_pb.Delivery.serializeBinaryToWriter
    );
  }
};


/**
 * optional DeliveryPaginationResponse pagination = 1;
 * @return {?proto.wiradata.inventories.DeliveryPaginationResponse}
 */
proto.wiradata.inventories.ListDeliveryResponse.prototype.getPagination = function() {
  return /** @type{?proto.wiradata.inventories.DeliveryPaginationResponse} */ (
    jspb.Message.getWrapperField(this, proto.wiradata.inventories.DeliveryPaginationResponse, 1));
};


/**
 * @param {?proto.wiradata.inventories.DeliveryPaginationResponse|undefined} value
 * @return {!proto.wiradata.inventories.ListDeliveryResponse} returns this
*/
proto.wiradata.inventories.ListDeliveryResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wiradata.inventories.ListDeliveryResponse} returns this
 */
proto.wiradata.inventories.ListDeliveryResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wiradata.inventories.ListDeliveryResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Delivery Delivery = 2;
 * @return {?proto.wiradata.inventories.Delivery}
 */
proto.wiradata.inventories.ListDeliveryResponse.prototype.getDelivery = function() {
  return /** @type{?proto.wiradata.inventories.Delivery} */ (
    jspb.Message.getWrapperField(this, inventories_delivery_message_pb.Delivery, 2));
};


/**
 * @param {?proto.wiradata.inventories.Delivery|undefined} value
 * @return {!proto.wiradata.inventories.ListDeliveryResponse} returns this
*/
proto.wiradata.inventories.ListDeliveryResponse.prototype.setDelivery = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wiradata.inventories.ListDeliveryResponse} returns this
 */
proto.wiradata.inventories.ListDeliveryResponse.prototype.clearDelivery = function() {
  return this.setDelivery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wiradata.inventories.ListDeliveryResponse.prototype.hasDelivery = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.wiradata.inventories);
