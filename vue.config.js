// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  outputDir: 'docs',
  devServer: {
    overlay: {
      warnings: false,
    },
    // proxy: isProduction ? process.env.VUE_APP_URL : 'http://api.income88.tw',
  },
  lintOnSave: false,

  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('vendor'));
  },
  /** pages和tap設定衝突 */
  pages: {
    index: {
      entry: 'vendor/modules/FPKG-Core/main.ts',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  },
};
