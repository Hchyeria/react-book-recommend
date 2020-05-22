const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  // eslint-disable-next-line no-unused-expressions
  app.use(
    createProxyMiddleware(['/api'], {
      target: 'http://localhost:8090',
      pathRewrite: {
        '^/api' : '',
      },
      secure: false,
      changeOrigin: true,
    })
  )
};
