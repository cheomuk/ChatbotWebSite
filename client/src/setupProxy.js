const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware(['/socket.io', '/public'], {
      target: 'http://localhost:4000',
      changeOrigin: true,
      ws: true,
    })
  );
};
