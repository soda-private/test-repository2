var express = require('express');
var router = express.Router();

/* GET caht page. */
router.get('/', function(req, res, next) {
  res.render('chat', { title: 'Chat-Application' });
});

var server = require('http').Server(express());
var io = require('socket.io')(server);
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});

module.exports = router;
