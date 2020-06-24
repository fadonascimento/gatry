const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware('/api/',
    { target: 'http://localhost:5000' }
  ));
}
