// My Module
var fs = require('fs'),
    path = require('path');
    
module.exports = function(directory, filter, callback) {
    fs.readdir(directory, function(err, files){
        if(err){
            return callback(err);
        }
        files = files.filter(function(file) {
            if(path.extname(file) === '.' + filter) return true;
        });
        return callback(null, files);
    });
}