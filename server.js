var http = require('http');
var url = require('url');
var port = process.env.PORT || 8080;

var httpServer = http.createServer(function (request, response) {
    if (request.url === '/favicon.ico') {
        response.writeHead(200, {'Content-Type': 'image/x-icon'} );
        response.end();
    }
    else if (request.method == 'GET') {
        response.writeHead(200, {'Content-Type': 'application/json'});

        console.log(request.connection);

        var ip = request.connection.remoteAddress;
        var lang = request.headers['accept-language'].split(',')[0];
        var software = request.headers['user-agent'].split('(')[1].split(')')[0];

        data = "{ 'ipaddress': " + ip + ", 'language': '" + lang + "'', 'software': '" + software + "'}";

        console.log(data);

        response.end(JSON.stringify(data));
    }
})

httpServer.listen(port);