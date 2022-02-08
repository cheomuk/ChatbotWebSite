const express = require('express'); // require 함수를 이용해 express 도구를 꺼내온다.
const { nanoid } = require('nanoid');
const fs = require('fs').promises;
const path = require('path')
const app = express();
const db = require('./model/db');
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use('/public', express.static(path.join(__dirname, '../public')));

server.listen(4000, () => {
  console.log('Connect at 4000');
});

io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  /**
   * 채팅 수신
   */
  socket.on('send', async (type, sender, data) => {
    if (type == 'image') {
      const buffer = Buffer.from(data, 'base64');

      const imageName = nanoid();

      await fs.writeFile(path.join(__dirname, `../public/image/${imageName}`), buffer).catch(console.error);

      data = imageName;
    }

    const chat = await db.chatlist.create({
      type,
      sender,
      data,
    });

    io.emit('send', chat.id, chat.type, chat.sender, chat.data, chat.createdAt);
  });

  /**
   * 채팅 삭제
   */
  socket.on('remove', async (id) => {
    await db.chatlist.destroy({
      where: {
        id,
      }
    });

    io.emit('remove', id);
  });
});
