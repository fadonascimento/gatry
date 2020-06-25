const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = require('http-proxy-middleware');
const port = process.env.PORT || 5000;

module.exports = function(app) {
  app.use(createProxyMiddleware('/api/',
    { target: `http://localhost:${port}` }
  ));
}
