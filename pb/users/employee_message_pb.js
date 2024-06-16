// source: users/employee_message.proto
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

var users_user_message_pb = require('../users/user_message_pb.js');
goog.object.extend(proto, users_user_message_pb);
goog.exportSymbol('proto.wiradata.users.Employee', null, global);
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
proto.wiradata.users.Employee = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wiradata.users.Employee, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wiradata.users.Employee.displayName = 'proto.wiradata.users.Employee';
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
proto.wiradata.users.Employee.prototype.toObject = function(opt_includeInstance) {
  return proto.wiradata.users.Employee.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wiradata.users.Employee} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.users.Employee.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    user: (f = msg.getUser()) && users_user_message_pb.User.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    code: jspb.Message.getFieldWithDefault(msg, 4, ""),
    address: jspb.Message.getFieldWithDefault(msg, 5, ""),
    city: jspb.Message.getFieldWithDefault(msg, 6, ""),
    province: jspb.Message.getFieldWithDefault(msg, 7, ""),
    jabatan: jspb.Message.getFieldWithDefault(msg, 8, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 9, ""),
    createdBy: jspb.Message.getFieldWithDefault(msg, 10, ""),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 11, ""),
    updatedBy: jspb.Message.getFieldWithDefault(msg, 12, "")
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
 * @return {!proto.wiradata.users.Employee}
 */
proto.wiradata.users.Employee.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wiradata.users.Employee;
  return proto.wiradata.users.Employee.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wiradata.users.Employee} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wiradata.users.Employee}
 */
proto.wiradata.users.Employee.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new users_user_message_pb.User;
      reader.readMessage(value,users_user_message_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setProvince(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setJabatan(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedAt(value);
      break;
    case 12:
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
proto.wiradata.users.Employee.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wiradata.users.Employee.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wiradata.users.Employee} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.users.Employee.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      users_user_message_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getProvince();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getJabatan();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getUpdatedBy();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.wiradata.users.Employee.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Employee} returns this
 */
proto.wiradata.users.Employee.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional User user = 2;
 * @return {?proto.wiradata.users.User}
 */
proto.wiradata.users.Employee.prototype.getUser = function() {
  return /** @type{?proto.wiradata.users.User} */ (
    jspb.Message.getWrapperField(this, users_user_message_pb.User, 2));
};


/**
 * @param {?proto.wiradata.users.User|undefined} value
 * @return {!proto.wiradata.users.Employee} returns this
*/
proto.wiradata.users.Employee.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wiradata.users.Employee} returns this
 */
proto.wiradata.users.Employee.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wiradata.users.Employee.prototype.hasUser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.wiradata.users.Employee.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Employee} returns this
 */
proto.wiradata.users.Employee.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string code = 4;
 * @return {string}
 */
proto.wiradata.users.Employee.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Employee} returns this
 */
proto.wiradata.users.Employee.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string address = 5;
 * @return {string}
 */
proto.wiradata.users.Employee.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Employee} returns this
 */
proto.wiradata.users.Employee.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string city = 6;
 * @return {string}
 */
proto.wiradata.users.Employee.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Employee} returns this
 */
proto.wiradata.users.Employee.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string province = 7;
 * @return {string}
 */
proto.wiradata.users.Employee.prototype.getProvince = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Employee} returns this
 */
proto.wiradata.users.Employee.prototype.setProvince = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string jabatan = 8;
 * @return {string}
 */
proto.wiradata.users.Employee.prototype.getJabatan = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Employee} returns this
 */
proto.wiradata.users.Employee.prototype.setJabatan = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string created_at = 9;
 * @return {string}
 */
proto.wiradata.users.Employee.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Employee} returns this
 */
proto.wiradata.users.Employee.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string created_by = 10;
 * @return {string}
 */
proto.wiradata.users.Employee.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Employee} returns this
 */
proto.wiradata.users.Employee.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string updated_at = 11;
 * @return {string}
 */
proto.wiradata.users.Employee.prototype.getUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Employee} returns this
 */
proto.wiradata.users.Employee.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string updated_by = 12;
 * @return {string}
 */
proto.wiradata.users.Employee.prototype.getUpdatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Employee} returns this
 */
proto.wiradata.users.Employee.prototype.setUpdatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


goog.object.extend(exports, proto.wiradata.users);
