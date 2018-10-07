/*
Maxim Pavlov
First Assignment for Pirple Node.js course
*/

// Dependencies

var http = require('http');
var url = require('url');
var StringDecoder = require('string_decoder').StringDecoder;

// Start server

var server = http.createServer(function(req,res){

});

server.listen(3000, function(){
  console.log('Server is listening on port 3000');
});
