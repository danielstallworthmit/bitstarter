var http = require('http');
var fs = require('fs');

var content = fs.readFileSync('./index.html', 'utf8');
console.log(content);


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(content);
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');