const { createProxyMiddleware } = require('http-proxy-middleware');

const proxyCTX = '/.netlify/functions/';

const proxyMW = createProxyMiddleware(
  {
    target: 'http://localhost:8888',
  }
);

module.exports = (app) => {
  app.use(proxyCTX, proxyMW);
};