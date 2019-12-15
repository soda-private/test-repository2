var express = require('express');
var router = express.Router();
var server = require('http').Server(express());
var io = require('socket.io')(server);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

io.on('connection', function(socket){
  console.log('a user connected');
});

module.exports = router;
