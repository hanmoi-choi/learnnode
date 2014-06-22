var fs = require('fs');

var filename = process.argv['2'];

fs.readFile(filename, function(err, data){
  var msgs = data.toString().split('\n');
  console.log(msgs.length - 1);
});
