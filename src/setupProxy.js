const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  // eslint-disable-next-line no-unused-expressions
  app.use(
    createProxyMiddleware(['/api'], {
      target: 'http://book.wechatmore.xyz:8090',
      pathRewrite: {
        '^/api' : '',
      },
      secure: false,
      changeOrigin: true,
    })
  )
};
