// source: users/feature_message.proto
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

goog.exportSymbol('proto.wiradata.users.EnumPackageOfFeature', null, global);
goog.exportSymbol('proto.wiradata.users.Feature', null, global);
goog.exportSymbol('proto.wiradata.users.PackageOfFeature', null, global);
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
proto.wiradata.users.Feature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wiradata.users.Feature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wiradata.users.Feature.displayName = 'proto.wiradata.users.Feature';
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
proto.wiradata.users.PackageOfFeature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wiradata.users.PackageOfFeature.repeatedFields_, null);
};
goog.inherits(proto.wiradata.users.PackageOfFeature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wiradata.users.PackageOfFeature.displayName = 'proto.wiradata.users.PackageOfFeature';
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
proto.wiradata.users.Feature.prototype.toObject = function(opt_includeInstance) {
  return proto.wiradata.users.Feature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wiradata.users.Feature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.users.Feature.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createdBy: jspb.Message.getFieldWithDefault(msg, 4, ""),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 5, ""),
    updatedBy: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.wiradata.users.Feature}
 */
proto.wiradata.users.Feature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wiradata.users.Feature;
  return proto.wiradata.users.Feature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wiradata.users.Feature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wiradata.users.Feature}
 */
proto.wiradata.users.Feature.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCreatedAt(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedAt(value);
      break;
    case 6:
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
proto.wiradata.users.Feature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wiradata.users.Feature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wiradata.users.Feature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.users.Feature.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUpdatedBy();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.wiradata.users.Feature.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Feature} returns this
 */
proto.wiradata.users.Feature.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.wiradata.users.Feature.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Feature} returns this
 */
proto.wiradata.users.Feature.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string created_at = 3;
 * @return {string}
 */
proto.wiradata.users.Feature.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Feature} returns this
 */
proto.wiradata.users.Feature.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string created_by = 4;
 * @return {string}
 */
proto.wiradata.users.Feature.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Feature} returns this
 */
proto.wiradata.users.Feature.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string updated_at = 5;
 * @return {string}
 */
proto.wiradata.users.Feature.prototype.getUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Feature} returns this
 */
proto.wiradata.users.Feature.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string updated_by = 6;
 * @return {string}
 */
proto.wiradata.users.Feature.prototype.getUpdatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.Feature} returns this
 */
proto.wiradata.users.Feature.prototype.setUpdatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wiradata.users.PackageOfFeature.repeatedFields_ = [3];



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
proto.wiradata.users.PackageOfFeature.prototype.toObject = function(opt_includeInstance) {
  return proto.wiradata.users.PackageOfFeature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wiradata.users.PackageOfFeature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.users.PackageOfFeature.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, 0),
    featuresList: jspb.Message.toObjectList(msg.getFeaturesList(),
    proto.wiradata.users.Feature.toObject, includeInstance)
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
 * @return {!proto.wiradata.users.PackageOfFeature}
 */
proto.wiradata.users.PackageOfFeature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wiradata.users.PackageOfFeature;
  return proto.wiradata.users.PackageOfFeature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wiradata.users.PackageOfFeature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wiradata.users.PackageOfFeature}
 */
proto.wiradata.users.PackageOfFeature.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.wiradata.users.EnumPackageOfFeature} */ (reader.readEnum());
      msg.setName(value);
      break;
    case 3:
      var value = new proto.wiradata.users.Feature;
      reader.readMessage(value,proto.wiradata.users.Feature.deserializeBinaryFromReader);
      msg.addFeatures(value);
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
proto.wiradata.users.PackageOfFeature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wiradata.users.PackageOfFeature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wiradata.users.PackageOfFeature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wiradata.users.PackageOfFeature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getFeaturesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.wiradata.users.Feature.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.wiradata.users.PackageOfFeature.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wiradata.users.PackageOfFeature} returns this
 */
proto.wiradata.users.PackageOfFeature.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional EnumPackageOfFeature name = 2;
 * @return {!proto.wiradata.users.EnumPackageOfFeature}
 */
proto.wiradata.users.PackageOfFeature.prototype.getName = function() {
  return /** @type {!proto.wiradata.users.EnumPackageOfFeature} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.wiradata.users.EnumPackageOfFeature} value
 * @return {!proto.wiradata.users.PackageOfFeature} returns this
 */
proto.wiradata.users.PackageOfFeature.prototype.setName = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated Feature features = 3;
 * @return {!Array<!proto.wiradata.users.Feature>}
 */
proto.wiradata.users.PackageOfFeature.prototype.getFeaturesList = function() {
  return /** @type{!Array<!proto.wiradata.users.Feature>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.wiradata.users.Feature, 3));
};


/**
 * @param {!Array<!proto.wiradata.users.Feature>} value
 * @return {!proto.wiradata.users.PackageOfFeature} returns this
*/
proto.wiradata.users.PackageOfFeature.prototype.setFeaturesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.wiradata.users.Feature=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wiradata.users.Feature}
 */
proto.wiradata.users.PackageOfFeature.prototype.addFeatures = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.wiradata.users.Feature, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wiradata.users.PackageOfFeature} returns this
 */
proto.wiradata.users.PackageOfFeature.prototype.clearFeaturesList = function() {
  return this.setFeaturesList([]);
};


/**
 * @enum {number}
 */
proto.wiradata.users.EnumPackageOfFeature = {
  ALL: 0,
  SIMPLE: 1,
  CUSTOME: 2
};

goog.object.extend(exports, proto.wiradata.users);
