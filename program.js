//My first async io
var fs = require('fs'),
    filename = process.argv[2],
    file = fs.readFileSync(filename),
    content = file.toString();

console.log(content.split('\n').length - 1);
// console.log(content);

