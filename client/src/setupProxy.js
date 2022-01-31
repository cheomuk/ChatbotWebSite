const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/socket.io', {
      target: 'http://localhost:4000',
      changeOrigin: true,
      ws: true,
    })
  );
};
