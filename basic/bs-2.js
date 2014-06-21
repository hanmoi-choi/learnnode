var sum = 0;

var size = process.argv.length;

for(var i = 2 ; i < size ; i++){
  sum += Number(process.argv[i]);
}

console.log(sum);
