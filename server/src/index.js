const express = require('express'); // require 함수를 이용해 express 도구를 꺼내온다.
const helmet = require('helmet'); //
const ejs = require('ejs');
const app = express();
const db = require('./model/db');
const http = require('http').Server(app);
const io = require('socket.io')(http);

// app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());

app.set('view engine', 'ejs'); // ejs모듈을 로드한다.
app.set('views', './views'); // views 폴더를 찾아 지정한다.
app.use('/public', express.static(__dirname + '/public'));
// public이라는 이름의 디렉토리에 포함된 정적인 이미지, CSS 파일 및 JavaScript 파일을 제공함.
let room = ['room1', 'room2'];
let a = 0;

app.get('/', (req, res) => {
  res.render('main');
});

io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('leaveRoom', (num, id, name) => {
    socket.leave(room[num], () => {
      console.log(name + ' leave a ' + room[num]);
      io.to(room[num]).emit('leaveRoom', num, id, name);
    });
  });

  socket.on('joinRoom', (num, id, name) => {
    socket.join(room[num], () => {
      console.log(name + ' join a ' + room[num]);
      io.to(room[num]).emit('joinRoom', num, id, name);
    });
  });

  socket.on('chat message', (num, id, name, msg) => {
    a = num;
    io.to(room[a]).emit('chat message', id, name, msg);
    db.chatlist.create({
      id: id,
      name: name,
      message: msg,
    });
  });
});

http.listen(3000, () => {
  console.log('Connect at 3000');
});
