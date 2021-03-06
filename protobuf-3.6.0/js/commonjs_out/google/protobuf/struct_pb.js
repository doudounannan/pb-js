/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.google.protobuf.ListValue', null, global);
goog.exportSymbol('proto.google.protobuf.NullValue', null, global);
goog.exportSymbol('proto.google.protobuf.Struct', null, global);
goog.exportSymbol('proto.google.protobuf.Value', null, global);

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
proto.google.protobuf.Struct = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.Struct, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.Struct.displayName = 'proto.google.protobuf.Struct';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.Struct.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.Struct.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.Struct} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.Struct.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldsMap: (f = msg.getFieldsMap()) ? f.toObject(includeInstance, proto.google.protobuf.Value.toObject) : []
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
 * @return {!proto.google.protobuf.Struct}
 */
proto.google.protobuf.Struct.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.Struct;
  return proto.google.protobuf.Struct.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.Struct} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.Struct}
 */
proto.google.protobuf.Struct.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getFieldsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.google.protobuf.Value.deserializeBinaryFromReader, "");
         });
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
proto.google.protobuf.Struct.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.Struct.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.Struct} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.Struct.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.google.protobuf.Value.serializeBinaryToWriter);
  }
};


/**
 * map<string, Value> fields = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.google.protobuf.Value>}
 */
proto.google.protobuf.Struct.prototype.getFieldsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.google.protobuf.Value>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.google.protobuf.Value));
};


proto.google.protobuf.Struct.prototype.clearFieldsMap = function() {
  this.getFieldsMap().clear();
};



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
proto.google.protobuf.Value = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.protobuf.Value.oneofGroups_);
};
goog.inherits(proto.google.protobuf.Value, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.Value.displayName = 'proto.google.protobuf.Value';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.protobuf.Value.oneofGroups_ = [[1,2,3,4,5,6]];

/**
 * @enum {number}
 */
proto.google.protobuf.Value.KindCase = {
  KIND_NOT_SET: 0,
  NULL_VALUE: 1,
  NUMBER_VALUE: 2,
  STRING_VALUE: 3,
  BOOL_VALUE: 4,
  STRUCT_VALUE: 5,
  LIST_VALUE: 6
};

/**
 * @return {proto.google.protobuf.Value.KindCase}
 */
proto.google.protobuf.Value.prototype.getKindCase = function() {
  return /** @type {proto.google.protobuf.Value.KindCase} */(jspb.Message.computeOneofCase(this, proto.google.protobuf.Value.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.Value.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.Value.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.Value} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.Value.toObject = function(includeInstance, msg) {
  var f, obj = {
    nullValue: jspb.Message.getFieldWithDefault(msg, 1, 0),
    numberValue: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    stringValue: jspb.Message.getFieldWithDefault(msg, 3, ""),
    boolValue: jspb.Message.getFieldWithDefault(msg, 4, false),
    structValue: (f = msg.getStructValue()) && proto.google.protobuf.Struct.toObject(includeInstance, f),
    listValue: (f = msg.getListValue()) && proto.google.protobuf.ListValue.toObject(includeInstance, f)
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
 * @return {!proto.google.protobuf.Value}
 */
proto.google.protobuf.Value.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.Value;
  return proto.google.protobuf.Value.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.Value} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.Value}
 */
proto.google.protobuf.Value.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.protobuf.NullValue} */ (reader.readEnum());
      msg.setNullValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setNumberValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringValue(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoolValue(value);
      break;
    case 5:
      var value = new proto.google.protobuf.Struct;
      reader.readMessage(value,proto.google.protobuf.Struct.deserializeBinaryFromReader);
      msg.setStructValue(value);
      break;
    case 6:
      var value = new proto.google.protobuf.ListValue;
      reader.readMessage(value,proto.google.protobuf.ListValue.deserializeBinaryFromReader);
      msg.setListValue(value);
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
proto.google.protobuf.Value.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.Value.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.Value} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.Value.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.google.protobuf.NullValue} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getStructValue();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.google.protobuf.Struct.serializeBinaryToWriter
    );
  }
  f = message.getListValue();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.google.protobuf.ListValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional NullValue null_value = 1;
 * @return {!proto.google.protobuf.NullValue}
 */
proto.google.protobuf.Value.prototype.getNullValue = function() {
  return /** @type {!proto.google.protobuf.NullValue} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.google.protobuf.NullValue} value */
proto.google.protobuf.Value.prototype.setNullValue = function(value) {
  jspb.Message.setOneofField(this, 1, proto.google.protobuf.Value.oneofGroups_[0], value);
};


proto.google.protobuf.Value.prototype.clearNullValue = function() {
  jspb.Message.setOneofField(this, 1, proto.google.protobuf.Value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.Value.prototype.hasNullValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double number_value = 2;
 * @return {number}
 */
proto.google.protobuf.Value.prototype.getNumberValue = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.google.protobuf.Value.prototype.setNumberValue = function(value) {
  jspb.Message.setOneofField(this, 2, proto.google.protobuf.Value.oneofGroups_[0], value);
};


proto.google.protobuf.Value.prototype.clearNumberValue = function() {
  jspb.Message.setOneofField(this, 2, proto.google.protobuf.Value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.Value.prototype.hasNumberValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string string_value = 3;
 * @return {string}
 */
proto.google.protobuf.Value.prototype.getStringValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.protobuf.Value.prototype.setStringValue = function(value) {
  jspb.Message.setOneofField(this, 3, proto.google.protobuf.Value.oneofGroups_[0], value);
};


proto.google.protobuf.Value.prototype.clearStringValue = function() {
  jspb.Message.setOneofField(this, 3, proto.google.protobuf.Value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.Value.prototype.hasStringValue = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool bool_value = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.Value.prototype.getBoolValue = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.google.protobuf.Value.prototype.setBoolValue = function(value) {
  jspb.Message.setOneofField(this, 4, proto.google.protobuf.Value.oneofGroups_[0], value);
};


proto.google.protobuf.Value.prototype.clearBoolValue = function() {
  jspb.Message.setOneofField(this, 4, proto.google.protobuf.Value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.Value.prototype.hasBoolValue = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Struct struct_value = 5;
 * @return {?proto.google.protobuf.Struct}
 */
proto.google.protobuf.Value.prototype.getStructValue = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Struct, 5));
};


/** @param {?proto.google.protobuf.Struct|undefined} value */
proto.google.protobuf.Value.prototype.setStructValue = function(value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.google.protobuf.Value.oneofGroups_[0], value);
};


proto.google.protobuf.Value.prototype.clearStructValue = function() {
  this.setStructValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.Value.prototype.hasStructValue = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ListValue list_value = 6;
 * @return {?proto.google.protobuf.ListValue}
 */
proto.google.protobuf.Value.prototype.getListValue = function() {
  return /** @type{?proto.google.protobuf.ListValue} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.ListValue, 6));
};


/** @param {?proto.google.protobuf.ListValue|undefined} value */
proto.google.protobuf.Value.prototype.setListValue = function(value) {
  jspb.Message.setOneofWrapperField(this, 6, proto.google.protobuf.Value.oneofGroups_[0], value);
};


proto.google.protobuf.Value.prototype.clearListValue = function() {
  this.setListValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.Value.prototype.hasListValue = function() {
  return jspb.Message.getField(this, 6) != null;
};



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
proto.google.protobuf.ListValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.ListValue.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.ListValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.ListValue.displayName = 'proto.google.protobuf.ListValue';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.ListValue.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.ListValue.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.ListValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.ListValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.ListValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    valuesList: jspb.Message.toObjectList(msg.getValuesList(),
    proto.google.protobuf.Value.toObject, includeInstance)
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
 * @return {!proto.google.protobuf.ListValue}
 */
proto.google.protobuf.ListValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.ListValue;
  return proto.google.protobuf.ListValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.ListValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.ListValue}
 */
proto.google.protobuf.ListValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.protobuf.Value;
      reader.readMessage(value,proto.google.protobuf.Value.deserializeBinaryFromReader);
      msg.addValues(value);
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
proto.google.protobuf.ListValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.ListValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.ListValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.ListValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.protobuf.Value.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Value values = 1;
 * @return {!Array<!proto.google.protobuf.Value>}
 */
proto.google.protobuf.ListValue.prototype.getValuesList = function() {
  return /** @type{!Array<!proto.google.protobuf.Value>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.Value, 1));
};


/** @param {!Array<!proto.google.protobuf.Value>} value */
proto.google.protobuf.ListValue.prototype.setValuesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.protobuf.Value=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Value}
 */
proto.google.protobuf.ListValue.prototype.addValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.protobuf.Value, opt_index);
};


proto.google.protobuf.ListValue.prototype.clearValuesList = function() {
  this.setValuesList([]);
};


/**
 * @enum {number}
 */
proto.google.protobuf.NullValue = {
  NULL_VALUE: 0
};

goog.object.extend(exports, proto.google.protobuf);
// Protocol Buffers - Google's data interchange format
// Copyright 2008 Google Inc.  All rights reserved.
// https://developers.google.com/protocol-buffers/
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//     * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* This code will be inserted into generated code for
 * google/protobuf/struct.proto. */

/**
 * Typedef representing plain JavaScript values that can go into a
 *     Struct.
 * @typedef {null|number|string|boolean|Array|Object}
 */
proto.google.protobuf.JavaScriptValue;


/**
 * Converts this Value object to a plain JavaScript value.
 * @return {?proto.google.protobuf.JavaScriptValue} a plain JavaScript
 *     value representing this Struct.
 */
proto.google.protobuf.Value.prototype.toJavaScript = function() {
  var kindCase = proto.google.protobuf.Value.KindCase;
  switch (this.getKindCase()) {
    case kindCase.NULL_VALUE:
      return null;
    case kindCase.NUMBER_VALUE:
      return this.getNumberValue();
    case kindCase.STRING_VALUE:
      return this.getStringValue();
    case kindCase.BOOL_VALUE:
      return this.getBoolValue();
    case kindCase.STRUCT_VALUE:
      return this.getStructValue().toJavaScript();
    case kindCase.LIST_VALUE:
      return this.getListValue().toJavaScript();
    default:
      throw new Error('Unexpected struct type');
  }
};


/**
 * Converts this JavaScript value to a new Value proto.
 * @param {!proto.google.protobuf.JavaScriptValue} value The value to
 *     convert.
 * @return {!proto.google.protobuf.Value} The newly constructed value.
 */
proto.google.protobuf.Value.fromJavaScript = function(value) {
  var ret = new proto.google.protobuf.Value();
  switch (goog.typeOf(value)) {
    case 'string':
      ret.setStringValue(/** @type {string} */ (value));
      break;
    case 'number':
      ret.setNumberValue(/** @type {number} */ (value));
      break;
    case 'boolean':
      ret.setBoolValue(/** @type {boolean} */ (value));
      break;
    case 'null':
      ret.setNullValue(proto.google.protobuf.NullValue.NULL_VALUE);
      break;
    case 'array':
      ret.setListValue(proto.google.protobuf.ListValue.fromJavaScript(
          /** @type{!Array} */ (value)));
      break;
    case 'object':
      ret.setStructValue(proto.google.protobuf.Struct.fromJavaScript(
          /** @type{!Object} */ (value)));
      break;
    default:
      throw new Error('Unexpected struct type.');
  }

  return ret;
};


/**
 * Converts this ListValue object to a plain JavaScript array.
 * @return {!Array} a plain JavaScript array representing this List.
 */
proto.google.protobuf.ListValue.prototype.toJavaScript = function() {
  var ret = [];
  var values = this.getValuesList();

  for (var i = 0; i < values.length; i++) {
    ret[i] = values[i].toJavaScript();
  }

  return ret;
};


/**
 * Constructs a ListValue protobuf from this plain JavaScript array.
 * @param {!Array} array a plain JavaScript array
 * @return {proto.google.protobuf.ListValue} a new ListValue object
 */
proto.google.protobuf.ListValue.fromJavaScript = function(array) {
  var ret = new proto.google.protobuf.ListValue();

  for (var i = 0; i < array.length; i++) {
    ret.addValues(proto.google.protobuf.Value.fromJavaScript(array[i]));
  }

  return ret;
};


/**
 * Converts this Struct object to a plain JavaScript object.
 * @return {!Object<string, !proto.google.protobuf.JavaScriptValue>} a plain
 *     JavaScript object representing this Struct.
 */
proto.google.protobuf.Struct.prototype.toJavaScript = function() {
  var ret = {};

  this.getFieldsMap().forEach(function(value, key) {
    ret[key] = value.toJavaScript();
  });

  return ret;
};


/**
 * Constructs a Struct protobuf from this plain JavaScript object.
 * @param {!Object} obj a plain JavaScript object
 * @return {proto.google.protobuf.Struct} a new Struct object
 */
proto.google.protobuf.Struct.fromJavaScript = function(obj) {
  var ret = new proto.google.protobuf.Struct();
  var map = ret.getFieldsMap();

  for (var property in obj) {
    var val = obj[property];
    map.set(property, proto.google.protobuf.Value.fromJavaScript(val));
  }

  return ret;
};
