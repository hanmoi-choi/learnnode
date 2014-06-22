var fs = require('fs');

var dirname = process.argv['2'];
var nameToFilter = '.' + process.argv['3'];

fs.readdir(dirname, function(err, files) {
  var ffs = files.filter(function(file) {
    return file.indexOf(nameToFilter, file.length - nameToFilter.length) !== -1;
  })

  ffs.forEach(function(f) {
    console.log(f)
  });
});
