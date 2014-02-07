var http = require('http');
var fs = require('fs');
var count=0;

var server = http.createServer(function(request, response) {
  var responseBody;
 response.writeHead(200, {"Content-Type": "application/xml"});  
  if(request.url =="/") count++;
  if(count==4) count=0;

  switch(count){
  	case 0: responseBody ='A1.xml'; break;
  	case 1: responseBody ='A2.xml'; break;
  	case 2: responseBody ='L1.xml'; break;
  	case 3: responseBody ='L2.xml'; break;
  }


fs.readFile(responseBody, function (err, data) {
  response.write(data,"binary");
  response.end();
});

  var log="{\n  Request URL : http://_HOST_NAME__REQUEST_URL_ \n  Method : _METHOD_  \n  Response : _STATUS_CODE_ \n}";

  !(request.url=="/favicon.ico") && console.log(log
  						.replace(/_REQUEST_URL_/,request.url)
  						.replace(/_METHOD_/,request.method)
  						.replace(/_HOST_NAME_/,request.headers.host)
  						.replace(/_STATUS_CODE_/,response.statusCode));

});
 
server.listen(1234);
console.log("Server is listening");
