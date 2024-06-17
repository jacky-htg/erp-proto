// source: inventories/transaction_message.proto
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

goog.exportSymbol('proto.wiradata.inventories.Transaction', null, global);
goog.exportSymbol('proto.wiradata.inventories.Transactions', null, global);
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
proto.wiradata.inventories.Transaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wiradata.inventories.Transaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wiradata.inventories.Transaction.displayName = 'proto.wiradata.inventories.Transaction';
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
proto.wiradata.inventories.Transactions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wiradata.inventories.Transactions.repeatedFields_, null);
};
goog.inherits(proto.wiradata.inventories.Transactions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wiradata.inventories.Transactions.displayName = 'proto.wiradata.inventories.Transactions';
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
proto.wiradata.inventories.Transaction.prototype.toObject = function(opt_includeInstance) {
  return proto.wiradata.inventories.Transaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wiradata.inventories.Transaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.inventories.Transaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    branchId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    branchName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    warehouseId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    warehouseName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    shelveId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    shelveCode: jspb.Message.getFieldWithDefault(msg, 6, ""),
    productId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    barcode: jspb.Message.getFieldWithDefault(msg, 8, ""),
    transactionCode: jspb.Message.getFieldWithDefault(msg, 9, ""),
    transactionType: jspb.Message.getFieldWithDefault(msg, 10, ""),
    transactionDate: jspb.Message.getFieldWithDefault(msg, 11, ""),
    isIn: jspb.Message.getBooleanFieldWithDefault(msg, 12, false)
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
 * @return {!proto.wiradata.inventories.Transaction}
 */
proto.wiradata.inventories.Transaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wiradata.inventories.Transaction;
  return proto.wiradata.inventories.Transaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wiradata.inventories.Transaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wiradata.inventories.Transaction}
 */
proto.wiradata.inventories.Transaction.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setBranchName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehouseId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehouseName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setShelveId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setShelveCode(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setBarcode(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionCode(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionType(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionDate(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsIn(value);
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
proto.wiradata.inventories.Transaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wiradata.inventories.Transaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wiradata.inventories.Transaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.inventories.Transaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBranchId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBranchName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWarehouseId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWarehouseName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getShelveId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getShelveCode();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getProductId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getBarcode();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTransactionCode();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTransactionType();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTransactionDate();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getIsIn();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
};


/**
 * optional string branch_id = 1;
 * @return {string}
 */
proto.wiradata.inventories.Transaction.prototype.getBranchId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.inventories.Transaction} returns this
 */
proto.wiradata.inventories.Transaction.prototype.setBranchId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string branch_name = 2;
 * @return {string}
 */
proto.wiradata.inventories.Transaction.prototype.getBranchName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.inventories.Transaction} returns this
 */
proto.wiradata.inventories.Transaction.prototype.setBranchName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string warehouse_id = 3;
 * @return {string}
 */
proto.wiradata.inventories.Transaction.prototype.getWarehouseId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.inventories.Transaction} returns this
 */
proto.wiradata.inventories.Transaction.prototype.setWarehouseId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string warehouse_name = 4;
 * @return {string}
 */
proto.wiradata.inventories.Transaction.prototype.getWarehouseName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.inventories.Transaction} returns this
 */
proto.wiradata.inventories.Transaction.prototype.setWarehouseName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string shelve_id = 5;
 * @return {string}
 */
proto.wiradata.inventories.Transaction.prototype.getShelveId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.inventories.Transaction} returns this
 */
proto.wiradata.inventories.Transaction.prototype.setShelveId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string shelve_code = 6;
 * @return {string}
 */
proto.wiradata.inventories.Transaction.prototype.getShelveCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.inventories.Transaction} returns this
 */
proto.wiradata.inventories.Transaction.prototype.setShelveCode = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string product_id = 7;
 * @return {string}
 */
proto.wiradata.inventories.Transaction.prototype.getProductId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.inventories.Transaction} returns this
 */
proto.wiradata.inventories.Transaction.prototype.setProductId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string barcode = 8;
 * @return {string}
 */
proto.wiradata.inventories.Transaction.prototype.getBarcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.inventories.Transaction} returns this
 */
proto.wiradata.inventories.Transaction.prototype.setBarcode = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string transaction_code = 9;
 * @return {string}
 */
proto.wiradata.inventories.Transaction.prototype.getTransactionCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.inventories.Transaction} returns this
 */
proto.wiradata.inventories.Transaction.prototype.setTransactionCode = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string transaction_type = 10;
 * @return {string}
 */
proto.wiradata.inventories.Transaction.prototype.getTransactionType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.inventories.Transaction} returns this
 */
proto.wiradata.inventories.Transaction.prototype.setTransactionType = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string transaction_date = 11;
 * @return {string}
 */
proto.wiradata.inventories.Transaction.prototype.getTransactionDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.inventories.Transaction} returns this
 */
proto.wiradata.inventories.Transaction.prototype.setTransactionDate = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional bool is_in = 12;
 * @return {boolean}
 */
proto.wiradata.inventories.Transaction.prototype.getIsIn = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.wiradata.inventories.Transaction} returns this
 */
proto.wiradata.inventories.Transaction.prototype.setIsIn = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wiradata.inventories.Transactions.repeatedFields_ = [1];



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
proto.wiradata.inventories.Transactions.prototype.toObject = function(opt_includeInstance) {
  return proto.wiradata.inventories.Transactions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wiradata.inventories.Transactions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.inventories.Transactions.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(),
    proto.wiradata.inventories.Transaction.toObject, includeInstance)
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
 * @return {!proto.wiradata.inventories.Transactions}
 */
proto.wiradata.inventories.Transactions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wiradata.inventories.Transactions;
  return proto.wiradata.inventories.Transactions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wiradata.inventories.Transactions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wiradata.inventories.Transactions}
 */
proto.wiradata.inventories.Transactions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wiradata.inventories.Transaction;
      reader.readMessage(value,proto.wiradata.inventories.Transaction.deserializeBinaryFromReader);
      msg.addTransactions(value);
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
proto.wiradata.inventories.Transactions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wiradata.inventories.Transactions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wiradata.inventories.Transactions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.inventories.Transactions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.wiradata.inventories.Transaction.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Transaction transactions = 1;
 * @return {!Array<!proto.wiradata.inventories.Transaction>}
 */
proto.wiradata.inventories.Transactions.prototype.getTransactionsList = function() {
  return /** @type{!Array<!proto.wiradata.inventories.Transaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.wiradata.inventories.Transaction, 1));
};


/**
 * @param {!Array<!proto.wiradata.inventories.Transaction>} value
 * @return {!proto.wiradata.inventories.Transactions} returns this
*/
proto.wiradata.inventories.Transactions.prototype.setTransactionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.wiradata.inventories.Transaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wiradata.inventories.Transaction}
 */
proto.wiradata.inventories.Transactions.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.wiradata.inventories.Transaction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wiradata.inventories.Transactions} returns this
 */
proto.wiradata.inventories.Transactions.prototype.clearTransactionsList = function() {
  return this.setTransactionsList([]);
};


goog.object.extend(exports, proto.wiradata.inventories);