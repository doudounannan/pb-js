const Message = require('./_pbjs/introduction_pb');

const Introduction = Message.introduction;
const message = new Introduction();

message.setName('mumu');
message.setAge('28');
message.setCompony('baidu');

console.log('debug-message', message);
console.log('\n===================================\n');

const binaryMessage = message.serializeBinary();
console.log('debug-binaryMessage', binaryMessage);
console.log('\n===================================\n');

const deBinaryMessage = Introduction.deserializeBinary(binaryMessage);
console.log('debug-deBinaryMessage', deBinaryMessage);
console.log('\n===================================\n');