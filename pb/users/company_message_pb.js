// source: users/company_message.proto
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

var users_feature_message_pb = require('../users/feature_message_pb.js');
goog.object.extend(proto, users_feature_message_pb);
goog.exportSymbol('proto.wiradata.users.Company', null, global);
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
proto.wiradata.users.Company = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wiradata.users.Company.repeatedFields_, null);
};
goog.inherits(proto.wiradata.users.Company, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wiradata.users.Company.displayName = 'proto.wiradata.users.Company';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wiradata.users.Company.repeatedFields_ = [13];



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
proto.wiradata.users.Company.prototype.toObject = function(opt_includeInstance) {
  return proto.wiradata.users.Company.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wiradata.users.Company} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.users.Company.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    code: jspb.Message.getFieldWithDefault(msg, 3, ""),
    address: jspb.Message.getFieldWithDefault(msg, 4, ""),
    city: jspb.Message.getFieldWithDefault(msg, 5, ""),
    province: jspb.Message.getFieldWithDefault(msg, 6, ""),
    npwp: jspb.Message.getFieldWithDefault(msg, 7, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 8, ""),
    pic: jspb.Message.getFieldWithDefault(msg, 9, ""),
    picPhone: jspb.Message.getFieldWithDefault(msg, 10, ""),
    logo: jspb.Message.getFieldWithDefault(msg, 11, ""),
    packageOfFeature: jspb.Message.getFieldWithDefault(msg, 12, 0),
    featuresList: jspb.Message.toObjectList(msg.getFeaturesList(),
    users_feature_message_pb.Feature.toObject, includeInstance),
    createdAt: jspb.Message.getFieldWithDefault(msg, 14, ""),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 15, ""),
    updatedBy: jspb.Message.getFieldWithDefault(msg, 16, "")
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
 * @return {!proto.wiradata.users.Company}
 */
proto.wiradata.users.Company.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wiradata.users.Company;
  return proto.wiradata.users.Company.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wiradata.users.Company} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wiradata.users.Company}
 */
proto.wiradata.users.Company.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setProvince(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNpwp(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setPic(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPicPhone(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogo(value);
      break;
    case 12:
      var value = /** @type {!proto.wiradata.users.EnumPackageOfFeature} */ (reader.readEnum());
      msg.setPackageOfFeature(value);
      break;
    case 13:
      var value = new users_feature_message_pb.Feature;
      reader.readMessage(value,users_feature_message_pb.Feature.deserializeBinaryFromReader);
      msg.addFeatures(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedAt(value);
      break;
    case 16:
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
proto.wiradata.users.Company.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wiradata.users.Company.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wiradata.users.Company} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.users.Company.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getProvince();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getNpwp();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getPic();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getPicPhone();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getLogo();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getPackageOfFeature();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getFeaturesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      users_feature_message_pb.Feature.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
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
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.wiradata.users.Company.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Company} returns this
 */
proto.wiradata.users.Company.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.wiradata.users.Company.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Company} returns this
 */
proto.wiradata.users.Company.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string code = 3;
 * @return {string}
 */
proto.wiradata.users.Company.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Company} returns this
 */
proto.wiradata.users.Company.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string address = 4;
 * @return {string}
 */
proto.wiradata.users.Company.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Company} returns this
 */
proto.wiradata.users.Company.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string city = 5;
 * @return {string}
 */
proto.wiradata.users.Company.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Company} returns this
 */
proto.wiradata.users.Company.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string province = 6;
 * @return {string}
 */
proto.wiradata.users.Company.prototype.getProvince = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Company} returns this
 */
proto.wiradata.users.Company.prototype.setProvince = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string npwp = 7;
 * @return {string}
 */
proto.wiradata.users.Company.prototype.getNpwp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Company} returns this
 */
proto.wiradata.users.Company.prototype.setNpwp = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string phone = 8;
 * @return {string}
 */
proto.wiradata.users.Company.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Company} returns this
 */
proto.wiradata.users.Company.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string pic = 9;
 * @return {string}
 */
proto.wiradata.users.Company.prototype.getPic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Company} returns this
 */
proto.wiradata.users.Company.prototype.setPic = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string pic_phone = 10;
 * @return {string}
 */
proto.wiradata.users.Company.prototype.getPicPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Company} returns this
 */
proto.wiradata.users.Company.prototype.setPicPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string logo = 11;
 * @return {string}
 */
proto.wiradata.users.Company.prototype.getLogo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Company} returns this
 */
proto.wiradata.users.Company.prototype.setLogo = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional EnumPackageOfFeature package_of_feature = 12;
 * @return {!proto.wiradata.users.EnumPackageOfFeature}
 */
proto.wiradata.users.Company.prototype.getPackageOfFeature = function() {
  return /** @type {!proto.wiradata.users.EnumPackageOfFeature} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.wiradata.users.EnumPackageOfFeature} value
 * @return {!proto.wiradata.users.Company} returns this
 */
proto.wiradata.users.Company.prototype.setPackageOfFeature = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * repeated Feature features = 13;
 * @return {!Array<!proto.wiradata.users.Feature>}
 */
proto.wiradata.users.Company.prototype.getFeaturesList = function() {
  return /** @type{!Array<!proto.wiradata.users.Feature>} */ (
    jspb.Message.getRepeatedWrapperField(this, users_feature_message_pb.Feature, 13));
};


/**
 * @param {!Array<!proto.wiradata.users.Feature>} value
 * @return {!proto.wiradata.users.Company} returns this
*/
proto.wiradata.users.Company.prototype.setFeaturesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.wiradata.users.Feature=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wiradata.users.Feature}
 */
proto.wiradata.users.Company.prototype.addFeatures = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.wiradata.users.Feature, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wiradata.users.Company} returns this
 */
proto.wiradata.users.Company.prototype.clearFeaturesList = function() {
  return this.setFeaturesList([]);
};


/**
 * optional string created_at = 14;
 * @return {string}
 */
proto.wiradata.users.Company.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Company} returns this
 */
proto.wiradata.users.Company.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string updated_at = 15;
 * @return {string}
 */
proto.wiradata.users.Company.prototype.getUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Company} returns this
 */
proto.wiradata.users.Company.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string updated_by = 16;
 * @return {string}
 */
proto.wiradata.users.Company.prototype.getUpdatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Company} returns this
 */
proto.wiradata.users.Company.prototype.setUpdatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


goog.object.extend(exports, proto.wiradata.users);
