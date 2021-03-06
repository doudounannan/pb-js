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

var test6_test6_pb = require('../test6/test6_pb.js');
goog.exportSymbol('proto.jspb.test.framing.FramingMessage', null, global);

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
proto.jspb.test.framing.FramingMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jspb.test.framing.FramingMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.jspb.test.framing.FramingMessage.displayName = 'proto.jspb.test.framing.FramingMessage';
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
proto.jspb.test.framing.FramingMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.jspb.test.framing.FramingMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jspb.test.framing.FramingMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.test.framing.FramingMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    importedMessage: (f = msg.getImportedMessage()) && test6_test6_pb.ImportedMessage.toObject(includeInstance, f)
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
 * @return {!proto.jspb.test.framing.FramingMessage}
 */
proto.jspb.test.framing.FramingMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jspb.test.framing.FramingMessage;
  return proto.jspb.test.framing.FramingMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jspb.test.framing.FramingMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jspb.test.framing.FramingMessage}
 */
proto.jspb.test.framing.FramingMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new test6_test6_pb.ImportedMessage;
      reader.readMessage(value,test6_test6_pb.ImportedMessage.deserializeBinaryFromReader);
      msg.setImportedMessage(value);
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
proto.jspb.test.framing.FramingMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jspb.test.framing.FramingMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jspb.test.framing.FramingMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.test.framing.FramingMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImportedMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      test6_test6_pb.ImportedMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional jspb.test.importing.ImportedMessage imported_message = 1;
 * @return {?proto.jspb.test.importing.ImportedMessage}
 */
proto.jspb.test.framing.FramingMessage.prototype.getImportedMessage = function() {
  return /** @type{?proto.jspb.test.importing.ImportedMessage} */ (
    jspb.Message.getWrapperField(this, test6_test6_pb.ImportedMessage, 1));
};


/** @param {?proto.jspb.test.importing.ImportedMessage|undefined} value */
proto.jspb.test.framing.FramingMessage.prototype.setImportedMessage = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.jspb.test.framing.FramingMessage.prototype.clearImportedMessage = function() {
  this.setImportedMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.framing.FramingMessage.prototype.hasImportedMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.jspb.test.framing);
