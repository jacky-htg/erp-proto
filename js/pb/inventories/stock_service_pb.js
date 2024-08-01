// source: inventories/stock_service.proto
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

var inventories_generic_message_pb = require('../inventories/generic_message_pb.js');
goog.object.extend(proto, inventories_generic_message_pb);
var inventories_product_message_pb = require('../inventories/product_message_pb.js');
goog.object.extend(proto, inventories_product_message_pb);
goog.exportSymbol('proto.wiradata.inventories.ClosingStockRequest', null, global);
goog.exportSymbol('proto.wiradata.inventories.StockInfo', null, global);
goog.exportSymbol('proto.wiradata.inventories.StockInfoInput', null, global);
goog.exportSymbol('proto.wiradata.inventories.StockList', null, global);
goog.exportSymbol('proto.wiradata.inventories.StockListInput', null, global);
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
proto.wiradata.inventories.ClosingStockRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wiradata.inventories.ClosingStockRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wiradata.inventories.ClosingStockRequest.displayName = 'proto.wiradata.inventories.ClosingStockRequest';
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
proto.wiradata.inventories.StockListInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wiradata.inventories.StockListInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wiradata.inventories.StockListInput.displayName = 'proto.wiradata.inventories.StockListInput';
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
proto.wiradata.inventories.StockInfoInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wiradata.inventories.StockInfoInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wiradata.inventories.StockInfoInput.displayName = 'proto.wiradata.inventories.StockInfoInput';
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
proto.wiradata.inventories.StockInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wiradata.inventories.StockInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wiradata.inventories.StockInfo.displayName = 'proto.wiradata.inventories.StockInfo';
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
proto.wiradata.inventories.StockList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wiradata.inventories.StockList.repeatedFields_, null);
};
goog.inherits(proto.wiradata.inventories.StockList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wiradata.inventories.StockList.displayName = 'proto.wiradata.inventories.StockList';
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
proto.wiradata.inventories.ClosingStockRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.wiradata.inventories.ClosingStockRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wiradata.inventories.ClosingStockRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.inventories.ClosingStockRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    year: jspb.Message.getFieldWithDefault(msg, 1, 0),
    month: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.wiradata.inventories.ClosingStockRequest}
 */
proto.wiradata.inventories.ClosingStockRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wiradata.inventories.ClosingStockRequest;
  return proto.wiradata.inventories.ClosingStockRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wiradata.inventories.ClosingStockRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wiradata.inventories.ClosingStockRequest}
 */
proto.wiradata.inventories.ClosingStockRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYear(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMonth(value);
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
proto.wiradata.inventories.ClosingStockRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wiradata.inventories.ClosingStockRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wiradata.inventories.ClosingStockRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.inventories.ClosingStockRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getYear();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMonth();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 year = 1;
 * @return {number}
 */
proto.wiradata.inventories.ClosingStockRequest.prototype.getYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.wiradata.inventories.ClosingStockRequest} returns this
 */
proto.wiradata.inventories.ClosingStockRequest.prototype.setYear = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 month = 2;
 * @return {number}
 */
proto.wiradata.inventories.ClosingStockRequest.prototype.getMonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.wiradata.inventories.ClosingStockRequest} returns this
 */
proto.wiradata.inventories.ClosingStockRequest.prototype.setMonth = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.wiradata.inventories.StockListInput.prototype.toObject = function(opt_includeInstance) {
  return proto.wiradata.inventories.StockListInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wiradata.inventories.StockListInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.inventories.StockListInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    branchId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.wiradata.inventories.StockListInput}
 */
proto.wiradata.inventories.StockListInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wiradata.inventories.StockListInput;
  return proto.wiradata.inventories.StockListInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wiradata.inventories.StockListInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wiradata.inventories.StockListInput}
 */
proto.wiradata.inventories.StockListInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBranchId(value);
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
proto.wiradata.inventories.StockListInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wiradata.inventories.StockListInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wiradata.inventories.StockListInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.inventories.StockListInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBranchId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string branch_id = 1;
 * @return {string}
 */
proto.wiradata.inventories.StockListInput.prototype.getBranchId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.inventories.StockListInput} returns this
 */
proto.wiradata.inventories.StockListInput.prototype.setBranchId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.wiradata.inventories.StockInfoInput.prototype.toObject = function(opt_includeInstance) {
  return proto.wiradata.inventories.StockInfoInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wiradata.inventories.StockInfoInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.inventories.StockInfoInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    branchId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    productId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.wiradata.inventories.StockInfoInput}
 */
proto.wiradata.inventories.StockInfoInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wiradata.inventories.StockInfoInput;
  return proto.wiradata.inventories.StockInfoInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wiradata.inventories.StockInfoInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wiradata.inventories.StockInfoInput}
 */
proto.wiradata.inventories.StockInfoInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBranchId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductId(value);
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
proto.wiradata.inventories.StockInfoInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wiradata.inventories.StockInfoInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wiradata.inventories.StockInfoInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.inventories.StockInfoInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBranchId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProductId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string branch_id = 1;
 * @return {string}
 */
proto.wiradata.inventories.StockInfoInput.prototype.getBranchId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.inventories.StockInfoInput} returns this
 */
proto.wiradata.inventories.StockInfoInput.prototype.setBranchId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string product_id = 2;
 * @return {string}
 */
proto.wiradata.inventories.StockInfoInput.prototype.getProductId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.inventories.StockInfoInput} returns this
 */
proto.wiradata.inventories.StockInfoInput.prototype.setProductId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.wiradata.inventories.StockInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.wiradata.inventories.StockInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wiradata.inventories.StockInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.inventories.StockInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && inventories_product_message_pb.Product.toObject(includeInstance, f),
    qty: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.wiradata.inventories.StockInfo}
 */
proto.wiradata.inventories.StockInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wiradata.inventories.StockInfo;
  return proto.wiradata.inventories.StockInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wiradata.inventories.StockInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wiradata.inventories.StockInfo}
 */
proto.wiradata.inventories.StockInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new inventories_product_message_pb.Product;
      reader.readMessage(value,inventories_product_message_pb.Product.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQty(value);
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
proto.wiradata.inventories.StockInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wiradata.inventories.StockInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wiradata.inventories.StockInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.inventories.StockInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      inventories_product_message_pb.Product.serializeBinaryToWriter
    );
  }
  f = message.getQty();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional Product product = 1;
 * @return {?proto.wiradata.inventories.Product}
 */
proto.wiradata.inventories.StockInfo.prototype.getProduct = function() {
  return /** @type{?proto.wiradata.inventories.Product} */ (
    jspb.Message.getWrapperField(this, inventories_product_message_pb.Product, 1));
};


/**
 * @param {?proto.wiradata.inventories.Product|undefined} value
 * @return {!proto.wiradata.inventories.StockInfo} returns this
*/
proto.wiradata.inventories.StockInfo.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wiradata.inventories.StockInfo} returns this
 */
proto.wiradata.inventories.StockInfo.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wiradata.inventories.StockInfo.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 qty = 2;
 * @return {number}
 */
proto.wiradata.inventories.StockInfo.prototype.getQty = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.wiradata.inventories.StockInfo} returns this
 */
proto.wiradata.inventories.StockInfo.prototype.setQty = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wiradata.inventories.StockList.repeatedFields_ = [1];



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
proto.wiradata.inventories.StockList.prototype.toObject = function(opt_includeInstance) {
  return proto.wiradata.inventories.StockList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wiradata.inventories.StockList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.inventories.StockList.toObject = function(includeInstance, msg) {
  var f, obj = {
    stockInfosList: jspb.Message.toObjectList(msg.getStockInfosList(),
    proto.wiradata.inventories.StockInfo.toObject, includeInstance)
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
 * @return {!proto.wiradata.inventories.StockList}
 */
proto.wiradata.inventories.StockList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wiradata.inventories.StockList;
  return proto.wiradata.inventories.StockList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wiradata.inventories.StockList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wiradata.inventories.StockList}
 */
proto.wiradata.inventories.StockList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wiradata.inventories.StockInfo;
      reader.readMessage(value,proto.wiradata.inventories.StockInfo.deserializeBinaryFromReader);
      msg.addStockInfos(value);
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
proto.wiradata.inventories.StockList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wiradata.inventories.StockList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wiradata.inventories.StockList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.inventories.StockList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStockInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.wiradata.inventories.StockInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated StockInfo stock_infos = 1;
 * @return {!Array<!proto.wiradata.inventories.StockInfo>}
 */
proto.wiradata.inventories.StockList.prototype.getStockInfosList = function() {
  return /** @type{!Array<!proto.wiradata.inventories.StockInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.wiradata.inventories.StockInfo, 1));
};


/**
 * @param {!Array<!proto.wiradata.inventories.StockInfo>} value
 * @return {!proto.wiradata.inventories.StockList} returns this
*/
proto.wiradata.inventories.StockList.prototype.setStockInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.wiradata.inventories.StockInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wiradata.inventories.StockInfo}
 */
proto.wiradata.inventories.StockList.prototype.addStockInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.wiradata.inventories.StockInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wiradata.inventories.StockList} returns this
 */
proto.wiradata.inventories.StockList.prototype.clearStockInfosList = function() {
  return this.setStockInfosList([]);
};


goog.object.extend(exports, proto.wiradata.inventories);