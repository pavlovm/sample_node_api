/*
Maxim Pavlov
First Assignment for Pirple Node.js course
*/

// Dependencies

var http = require('http');
var url = require('url');

// Start server

var server = http.createServer(function(req,res){
  var parsedUrl = url.parse(req.url, true);
  var path = parsedUrl.pathname;
  var trimmedPath = path.replace(/^\/+|\/+$/g, '');
  var queryStringObject = parsedUrl.query;

  // Doesn't go to req.on('end') without going into data
  req.on('data', function(data){

  });

  req.on('end', function(){
    var chosenHandler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : handlers.notFound;

    chosenHandler(function(statusCode, payload){
      statusCode = typeof(statusCode) == 'number' ? statusCode : 200;

      // Use payload called back by handler
      payload = typeof(payload) == 'object' ? payload : {};

      // Convert payload to a string
      var payloadString = JSON.stringify(payload);

      // Return the response
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(statusCode);
      res.end(payloadString);

      console.log('Returning the response: ', statusCode, payloadString);
    });
  });
});

server.listen(3000, function(){
  console.log('Server is listening on port 3000');
});



// Handlers and router

var handlers = {};

handlers.hello = function(callback){
  payload = {
    'message' : 'Hello, World'
};
  callback(200, payload)
};

handlers.notFound = function(callback){
  payload = {}
  callback(404, payload)
}

var router = {
  'hello' : handlers.hello
};
