var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);

var msgs = buffer.toString().split();
