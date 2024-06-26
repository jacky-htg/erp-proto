// source: sales/sales_message.proto
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

var sales_customer_message_pb = require('../sales/customer_message_pb.js');
goog.object.extend(proto, sales_customer_message_pb);
var sales_salesman_message_pb = require('../sales/salesman_message_pb.js');
goog.object.extend(proto, sales_salesman_message_pb);
goog.exportSymbol('proto.sales.Sales', null, global);
goog.exportSymbol('proto.sales.SalesDetail', null, global);
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
proto.sales.Sales = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sales.Sales.repeatedFields_, null);
};
goog.inherits(proto.sales.Sales, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sales.Sales.displayName = 'proto.sales.Sales';
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
proto.sales.SalesDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sales.SalesDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sales.SalesDetail.displayName = 'proto.sales.SalesDetail';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sales.Sales.repeatedFields_ = [17];



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
proto.sales.Sales.prototype.toObject = function(opt_includeInstance) {
  return proto.sales.Sales.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sales.Sales} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sales.Sales.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    branchId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    branchName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    customer: (f = msg.getCustomer()) && sales_customer_message_pb.Customer.toObject(includeInstance, f),
    salesman: (f = msg.getSalesman()) && sales_salesman_message_pb.Salesman.toObject(includeInstance, f),
    code: jspb.Message.getFieldWithDefault(msg, 6, ""),
    salesDate: jspb.Message.getFieldWithDefault(msg, 7, ""),
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    additionalDiscAmount: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    additionalDiscPercentage: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    totalPrice: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    remark: jspb.Message.getFieldWithDefault(msg, 12, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 13, ""),
    createdBy: jspb.Message.getFieldWithDefault(msg, 14, ""),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 15, ""),
    updatedBy: jspb.Message.getFieldWithDefault(msg, 16, ""),
    detailsList: jspb.Message.toObjectList(msg.getDetailsList(),
    proto.sales.SalesDetail.toObject, includeInstance)
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
 * @return {!proto.sales.Sales}
 */
proto.sales.Sales.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sales.Sales;
  return proto.sales.Sales.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sales.Sales} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sales.Sales}
 */
proto.sales.Sales.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBranchId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBranchName(value);
      break;
    case 4:
      var value = new sales_customer_message_pb.Customer;
      reader.readMessage(value,sales_customer_message_pb.Customer.deserializeBinaryFromReader);
      msg.setCustomer(value);
      break;
    case 5:
      var value = new sales_salesman_message_pb.Salesman;
      reader.readMessage(value,sales_salesman_message_pb.Salesman.deserializeBinaryFromReader);
      msg.setSalesman(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSalesDate(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAdditionalDiscAmount(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAdditionalDiscPercentage(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTotalPrice(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemark(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedAt(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedBy(value);
      break;
    case 17:
      var value = new proto.sales.SalesDetail;
      reader.readMessage(value,proto.sales.SalesDetail.deserializeBinaryFromReader);
      msg.addDetails(value);
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
proto.sales.Sales.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sales.Sales.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sales.Sales} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sales.Sales.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBranchId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBranchName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCustomer();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      sales_customer_message_pb.Customer.serializeBinaryToWriter
    );
  }
  f = message.getSalesman();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      sales_salesman_message_pb.Salesman.serializeBinaryToWriter
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSalesDate();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getAdditionalDiscAmount();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getAdditionalDiscPercentage();
  if (f !== 0.0) {
    writer.writeFloat(
      10,
      f
    );
  }
  f = message.getTotalPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = message.getRemark();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getUpdatedBy();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      17,
      f,
      proto.sales.SalesDetail.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.sales.Sales.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sales.Sales} returns this
 */
proto.sales.Sales.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string branch_id = 2;
 * @return {string}
 */
proto.sales.Sales.prototype.getBranchId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sales.Sales} returns this
 */
proto.sales.Sales.prototype.setBranchId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string branch_name = 3;
 * @return {string}
 */
proto.sales.Sales.prototype.getBranchName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sales.Sales} returns this
 */
proto.sales.Sales.prototype.setBranchName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Customer customer = 4;
 * @return {?proto.sales.Customer}
 */
proto.sales.Sales.prototype.getCustomer = function() {
  return /** @type{?proto.sales.Customer} */ (
    jspb.Message.getWrapperField(this, sales_customer_message_pb.Customer, 4));
};


/**
 * @param {?proto.sales.Customer|undefined} value
 * @return {!proto.sales.Sales} returns this
*/
proto.sales.Sales.prototype.setCustomer = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sales.Sales} returns this
 */
proto.sales.Sales.prototype.clearCustomer = function() {
  return this.setCustomer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sales.Sales.prototype.hasCustomer = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Salesman salesman = 5;
 * @return {?proto.sales.Salesman}
 */
proto.sales.Sales.prototype.getSalesman = function() {
  return /** @type{?proto.sales.Salesman} */ (
    jspb.Message.getWrapperField(this, sales_salesman_message_pb.Salesman, 5));
};


/**
 * @param {?proto.sales.Salesman|undefined} value
 * @return {!proto.sales.Sales} returns this
*/
proto.sales.Sales.prototype.setSalesman = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sales.Sales} returns this
 */
proto.sales.Sales.prototype.clearSalesman = function() {
  return this.setSalesman(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sales.Sales.prototype.hasSalesman = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string code = 6;
 * @return {string}
 */
proto.sales.Sales.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sales.Sales} returns this
 */
proto.sales.Sales.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string sales_date = 7;
 * @return {string}
 */
proto.sales.Sales.prototype.getSalesDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.sales.Sales} returns this
 */
proto.sales.Sales.prototype.setSalesDate = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional double price = 8;
 * @return {number}
 */
proto.sales.Sales.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sales.Sales} returns this
 */
proto.sales.Sales.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional double additional_disc_amount = 9;
 * @return {number}
 */
proto.sales.Sales.prototype.getAdditionalDiscAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sales.Sales} returns this
 */
proto.sales.Sales.prototype.setAdditionalDiscAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional float additional_disc_percentage = 10;
 * @return {number}
 */
proto.sales.Sales.prototype.getAdditionalDiscPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sales.Sales} returns this
 */
proto.sales.Sales.prototype.setAdditionalDiscPercentage = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional double total_price = 11;
 * @return {number}
 */
proto.sales.Sales.prototype.getTotalPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sales.Sales} returns this
 */
proto.sales.Sales.prototype.setTotalPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional string remark = 12;
 * @return {string}
 */
proto.sales.Sales.prototype.getRemark = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.sales.Sales} returns this
 */
proto.sales.Sales.prototype.setRemark = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string created_at = 13;
 * @return {string}
 */
proto.sales.Sales.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.sales.Sales} returns this
 */
proto.sales.Sales.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string created_by = 14;
 * @return {string}
 */
proto.sales.Sales.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.sales.Sales} returns this
 */
proto.sales.Sales.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string updated_at = 15;
 * @return {string}
 */
proto.sales.Sales.prototype.getUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.sales.Sales} returns this
 */
proto.sales.Sales.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string updated_by = 16;
 * @return {string}
 */
proto.sales.Sales.prototype.getUpdatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.sales.Sales} returns this
 */
proto.sales.Sales.prototype.setUpdatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * repeated SalesDetail details = 17;
 * @return {!Array<!proto.sales.SalesDetail>}
 */
proto.sales.Sales.prototype.getDetailsList = function() {
  return /** @type{!Array<!proto.sales.SalesDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sales.SalesDetail, 17));
};


/**
 * @param {!Array<!proto.sales.SalesDetail>} value
 * @return {!proto.sales.Sales} returns this
*/
proto.sales.Sales.prototype.setDetailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 17, value);
};


/**
 * @param {!proto.sales.SalesDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sales.SalesDetail}
 */
proto.sales.Sales.prototype.addDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 17, opt_value, proto.sales.SalesDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sales.Sales} returns this
 */
proto.sales.Sales.prototype.clearDetailsList = function() {
  return this.setDetailsList([]);
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
proto.sales.SalesDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.sales.SalesDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sales.SalesDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sales.SalesDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    salesId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    productId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    productCode: jspb.Message.getFieldWithDefault(msg, 4, ""),
    productName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    quantity: jspb.Message.getFieldWithDefault(msg, 6, 0),
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    discAmount: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    discPercentage: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    totalPrice: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0)
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
 * @return {!proto.sales.SalesDetail}
 */
proto.sales.SalesDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sales.SalesDetail;
  return proto.sales.SalesDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sales.SalesDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sales.SalesDetail}
 */
proto.sales.SalesDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSalesId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductCode(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductName(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQuantity(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDiscAmount(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDiscPercentage(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTotalPrice(value);
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
proto.sales.SalesDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sales.SalesDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sales.SalesDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sales.SalesDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSalesId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProductId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProductCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getProductName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getDiscAmount();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getDiscPercentage();
  if (f !== 0.0) {
    writer.writeFloat(
      9,
      f
    );
  }
  f = message.getTotalPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.sales.SalesDetail.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sales.SalesDetail} returns this
 */
proto.sales.SalesDetail.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string sales_id = 2;
 * @return {string}
 */
proto.sales.SalesDetail.prototype.getSalesId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sales.SalesDetail} returns this
 */
proto.sales.SalesDetail.prototype.setSalesId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string product_id = 3;
 * @return {string}
 */
proto.sales.SalesDetail.prototype.getProductId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sales.SalesDetail} returns this
 */
proto.sales.SalesDetail.prototype.setProductId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string product_code = 4;
 * @return {string}
 */
proto.sales.SalesDetail.prototype.getProductCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sales.SalesDetail} returns this
 */
proto.sales.SalesDetail.prototype.setProductCode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string product_name = 5;
 * @return {string}
 */
proto.sales.SalesDetail.prototype.getProductName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sales.SalesDetail} returns this
 */
proto.sales.SalesDetail.prototype.setProductName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 quantity = 6;
 * @return {number}
 */
proto.sales.SalesDetail.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.sales.SalesDetail} returns this
 */
proto.sales.SalesDetail.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional double price = 7;
 * @return {number}
 */
proto.sales.SalesDetail.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sales.SalesDetail} returns this
 */
proto.sales.SalesDetail.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double disc_amount = 8;
 * @return {number}
 */
proto.sales.SalesDetail.prototype.getDiscAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sales.SalesDetail} returns this
 */
proto.sales.SalesDetail.prototype.setDiscAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional float disc_percentage = 9;
 * @return {number}
 */
proto.sales.SalesDetail.prototype.getDiscPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sales.SalesDetail} returns this
 */
proto.sales.SalesDetail.prototype.setDiscPercentage = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional double total_price = 10;
 * @return {number}
 */
proto.sales.SalesDetail.prototype.getTotalPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sales.SalesDetail} returns this
 */
proto.sales.SalesDetail.prototype.setTotalPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


goog.object.extend(exports, proto.sales);
