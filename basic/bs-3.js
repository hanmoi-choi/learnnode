var fs = require('fs');

var filename = process.argv[2];
var buffer = fs.readFileSync(process.argv[2]);
var msgs = buffer.toString().split('\n');

console.log(msgs.length - 1);
