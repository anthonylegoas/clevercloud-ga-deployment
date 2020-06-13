var http = require("http");
var fileSystem = require("fs");

var server = http.createServer((_, resp) => {
  fileSystem.readFile("./index.html",  (error, fileContent) => {
    if (error) {
      resp.writeHead(500, { "Content-Type": "text/plain" });
      resp.end("Error");
    } else {
      resp.writeHead(200, { "Content-Type": "text/html" });
      resp.write(fileContent);
      resp.end();
    }
  });
});

server.listen(8080);

console.log("Listening at: localhost:8080");
