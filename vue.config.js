module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData:
          "@import '~@/assets/style/global/mobileFirst.sass' \n"
          + "@import '~@/assets/style/global/variables.sass'",
      },
    },
  },
  devServer: {
    overlay: true,
    open: true,
    proxy: {
      '/api': {
        target: 'https://api.openweathermap.org/data/2.5',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
        logLevel: 'debug',
      },
    },
  },
};
