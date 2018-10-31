var http = require('http');
var fs = require('fs');

// var server = http.createServer(function (request, response) {
//     // tutaj coś się dzieje :)
// });

//analogiczne do powyższego zapisu
// //STREAM
//var server = http.createServer();
// server.on('request', function (request, response) {
//     // console.log(request);
//     response.write('<body>');
//     response.write('<h1>Hello world!</h1>');
//     response.write('</body>');
//     response.end();
   
// });
// server.listen(9000);

//URL
// var server = http.createServer();

// server.on('request', function (request, response) {
//     response.setHeader("Content-Type", "text/html; charset=utf-8");
//     if (request.method === 'GET' && request.url === '/hello') {
//         response.write('<h1>Hello World!</h1>');
//             response.end();
//     } else {
//             response.statusCode = 404;
//             response.write('<h1>404: Zła ścieżka!</h1>');
//             response.end();
//     }
// });

// server.listen(8080);

//-------------------------------------------------------------------
//Serwujemy pliki
//================
var server = http.createServer();

server.on('request', function (request, response) {
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        if (request.method === 'GET' && request.url === '/') {
            fs.readFile('./index.html', 'utf-8', function(err, data) {
                console.log(data);
                if (err) throw err;
                response.write(data);   
                response.end();
            });
                   
        } else {
                response.statusCode = 404;
                response.write('<img src="https://image.shutterstock.com/z/stock-photo--error-page-not-found-serviceman-robot-hand-wrench-pliers-on-orange-background-text-message-1017140368.jpg" >');
                response.end();
            }
             
});

server.listen(8090);
