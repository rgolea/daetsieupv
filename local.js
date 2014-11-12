// production.js
var deployd = require('deployd');

var server = deployd({
  port: process.env.PORT || 5000,
  env: 'development',
  db: {
    host: 'ds063789.mongolab.com',
    port: 63789,
    name: 'heroku_app31535202',
    credentials: {
      username: 'heroku_app31535202',
      password: 'qodpgatk27n4qpgcas948enn8f'
    }
  }
});

server.listen();

server.on('listening', function() {
  console.log("Server is listening");
});

server.on('error', function(err) {
  console.error(err);
  process.nextTick(function() { // Give the server a chance to return an error
    process.exit();
  });
});

//mongodb://heroku_app31535202:qodpgatk27n4qpgcas948enn8f@ds063789.mongolab.com:63789/heroku_app31535202