//MY FIRST ASYNC I/O!
var fs = require('fs'),
    filename = process.argv[2],
    content;
    
fs.readFile(filename, function doneReading(err, fileContents) {
     if (err) {
         return console.error(err);
     }
     
    content = fileContents.toString();

    console.log(content.split('\n').length - 1);
     
});




//My first async io
// var fs = require('fs'),
//     filename = process.argv[2],
//     file = fs.readFileSync(filename),
//     content = file.toString();

// console.log(content.split('\n').length - 1);
// console.log(content);

