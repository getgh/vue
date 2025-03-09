module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/personal-website/' : '/',
  devServer: {
    port: 8080,
    open: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': require('path').resolve(__dirname, 'src'),
      },
    },
  },
};