const { override, fixBabelImports, addWebpackModuleRule, addDecoratorsLegacy } = require('customize-cra');

module.exports = override(
  addDecoratorsLegacy(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addWebpackModuleRule({
    test: /\.styl$/, 
    use: ['style-loader', 'css-loader', 'stylus-loader']
  })
);