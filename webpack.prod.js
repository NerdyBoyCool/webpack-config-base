const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(commonConfig, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false, // ライセンスコメント
        terserOptions: {
          compress: {
            drop_console: true,
          }
        }
      })
    ]
  }
});
