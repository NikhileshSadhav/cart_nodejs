var express = require('express');
var hbs = require('hbs');
var session = require('express-session');
var app = express();
var http = require('http');
var url = require('url');
var fs = require('fs');


http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);


 
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.use(function(err, req, res, next) {
  res.locals.message = err.message;

  res.status(err.status || 500);
  res.render('error');
});
 module.exports = app;