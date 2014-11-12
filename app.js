// production.js
var deployd = require('deployd');

var server = deployd({
  port: process.env.PORT || 5000,
  env: 'production',
  db: {
    host: process.env.DB_HOST,
    port: 63789,
    name: 'heroku_app31535202',
    credentials: {
      username: process.env.DB_USER,
      password: process.env.DB_PASS
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