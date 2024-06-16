// source: users/branch_message.proto
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

goog.exportSymbol('proto.wiradata.users.Branch', null, global);
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
proto.wiradata.users.Branch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wiradata.users.Branch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wiradata.users.Branch.displayName = 'proto.wiradata.users.Branch';
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
proto.wiradata.users.Branch.prototype.toObject = function(opt_includeInstance) {
  return proto.wiradata.users.Branch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wiradata.users.Branch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.users.Branch.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    companyId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    regionId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    regionName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    name: jspb.Message.getFieldWithDefault(msg, 5, ""),
    code: jspb.Message.getFieldWithDefault(msg, 6, ""),
    address: jspb.Message.getFieldWithDefault(msg, 7, ""),
    city: jspb.Message.getFieldWithDefault(msg, 8, ""),
    province: jspb.Message.getFieldWithDefault(msg, 9, ""),
    npwp: jspb.Message.getFieldWithDefault(msg, 10, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 11, ""),
    pic: jspb.Message.getFieldWithDefault(msg, 12, ""),
    picPhone: jspb.Message.getFieldWithDefault(msg, 13, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 14, ""),
    createdBy: jspb.Message.getFieldWithDefault(msg, 15, ""),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 16, ""),
    updatedBy: jspb.Message.getFieldWithDefault(msg, 17, "")
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
 * @return {!proto.wiradata.users.Branch}
 */
proto.wiradata.users.Branch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wiradata.users.Branch;
  return proto.wiradata.users.Branch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wiradata.users.Branch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wiradata.users.Branch}
 */
proto.wiradata.users.Branch.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCompanyId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegionId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegionName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setProvince(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setNpwp(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPic(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setPicPhone(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedAt(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedBy(value);
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
proto.wiradata.users.Branch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wiradata.users.Branch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wiradata.users.Branch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.users.Branch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRegionId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRegionName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getProvince();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getNpwp();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getPic();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getPicPhone();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getUpdatedBy();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.wiradata.users.Branch.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Branch} returns this
 */
proto.wiradata.users.Branch.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string company_id = 2;
 * @return {string}
 */
proto.wiradata.users.Branch.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Branch} returns this
 */
proto.wiradata.users.Branch.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string region_id = 3;
 * @return {string}
 */
proto.wiradata.users.Branch.prototype.getRegionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Branch} returns this
 */
proto.wiradata.users.Branch.prototype.setRegionId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string region_name = 4;
 * @return {string}
 */
proto.wiradata.users.Branch.prototype.getRegionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Branch} returns this
 */
proto.wiradata.users.Branch.prototype.setRegionName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.wiradata.users.Branch.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Branch} returns this
 */
proto.wiradata.users.Branch.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string code = 6;
 * @return {string}
 */
proto.wiradata.users.Branch.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Branch} returns this
 */
proto.wiradata.users.Branch.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string address = 7;
 * @return {string}
 */
proto.wiradata.users.Branch.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Branch} returns this
 */
proto.wiradata.users.Branch.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string city = 8;
 * @return {string}
 */
proto.wiradata.users.Branch.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Branch} returns this
 */
proto.wiradata.users.Branch.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string province = 9;
 * @return {string}
 */
proto.wiradata.users.Branch.prototype.getProvince = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Branch} returns this
 */
proto.wiradata.users.Branch.prototype.setProvince = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string npwp = 10;
 * @return {string}
 */
proto.wiradata.users.Branch.prototype.getNpwp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Branch} returns this
 */
proto.wiradata.users.Branch.prototype.setNpwp = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string phone = 11;
 * @return {string}
 */
proto.wiradata.users.Branch.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Branch} returns this
 */
proto.wiradata.users.Branch.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string pic = 12;
 * @return {string}
 */
proto.wiradata.users.Branch.prototype.getPic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Branch} returns this
 */
proto.wiradata.users.Branch.prototype.setPic = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string pic_phone = 13;
 * @return {string}
 */
proto.wiradata.users.Branch.prototype.getPicPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Branch} returns this
 */
proto.wiradata.users.Branch.prototype.setPicPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string created_at = 14;
 * @return {string}
 */
proto.wiradata.users.Branch.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Branch} returns this
 */
proto.wiradata.users.Branch.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string created_by = 15;
 * @return {string}
 */
proto.wiradata.users.Branch.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Branch} returns this
 */
proto.wiradata.users.Branch.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string updated_at = 16;
 * @return {string}
 */
proto.wiradata.users.Branch.prototype.getUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Branch} returns this
 */
proto.wiradata.users.Branch.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string updated_by = 17;
 * @return {string}
 */
proto.wiradata.users.Branch.prototype.getUpdatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Branch} returns this
 */
proto.wiradata.users.Branch.prototype.setUpdatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


goog.object.extend(exports, proto.wiradata.users);
