process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
 express = require('./config/express');

var db = mongoose();
var app = express();
app.listen(80);
module.exports = app;

console.log('SERVER RUNNING AT PORT 3000');
