//HTTP Client
var http = require('http'),
    myUrl = process.argv[2];
    
http.get(myUrl, function callback (response) {
    
    response.setEncoding('utf8');
    
    response.on('error', function(error) {
        console.error('This is the error message:' + error);
    });
    
    response.on('data', function(data) {
        console.log(data);
    });
    
});


//Make it modular
// var fs = require('fs'),
//     path = require('path'),
//     mymodule = require('./mymodule.js'),
//     mydir = process.argv[2],
//     ext1 = process.argv[3];

// var callback = function (err, files) {
//     if(err){
//         throw err
//     }
//     files.forEach(function (file) {
//         console.log(file);
//     });
// }

// mymodule(mydir, ext1, callback);


// // Filtered LS
// var fs = require('fs'),
//     path = require('path'),
//     mydir = process.argv[2],
//     ext1 = '.' + process.argv[3];

// fs.readdir(mydir, function(err, files){
//     if(err){
//         throw err
//     }
//     //console.log(files);
//     files.forEach(function(filename){
//         var ext = path.extname(filename);
//         if(ext == ext1){
//             console.log(filename);
//         }
//     });
// });

//MY FIRST ASYNC I/O!
// var fs = require('fs'),
//     filename = process.argv[2],
//     content;
    
// fs.readFile(filename, function doneReading(err, fileContents) {
//      if (err) {
//          return console.error(err);
//      }
     
//     content = fileContents.toString();

//     console.log(content.split('\n').length - 1);
     
// });




//My first async io
// var fs = require('fs'),
//     filename = process.argv[2],
//     file = fs.readFileSync(filename),
//     content = file.toString();

// console.log(content.split('\n').length - 1);
// console.log(content);

