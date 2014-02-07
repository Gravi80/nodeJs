var http = require('http');
var fs = require('fs');

var idResponseMap = {};

var server = http.createServer(function(request, response) {

    function getIdandResponse(url) {
      if (url.match(/\/configure\?id=\d+&response=\w+/)) {
        var id = url.substring(url.indexOf('=') + 1, url.indexOf('&'));
        var fileName = url.substring(url.lastIndexOf('=') + 1);
        idResponseMap[id] = fileName;
        response.writeHead(200, {
          "Content-Type": "text/html"
        });
        response.write("hit Url ");
        response.end();
      }
    }



    function sendResponse(request, response) {
      if (request.url.match(/\/id\/\d+/)) {
        var id = request.url.substring(request.url.lastIndexOf("/") + 1)

        var file = idResponseMap[id];
        response.writeHead(200, {
          "Content-Type": "application/xml"
        });


        fs.readFile(file, function(err, data) {
          if(err){
            response.write("File Not Found");
          }else{          response.write(data, "binary");
        }
          response.end();
        });
      }

      };


      getIdandResponse(request.url);

      sendResponse(request, response);

    });

  server.listen(1234); console.log("Server is listening");