const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
  
});

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/main.scss";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "/seminar/" : "/",
};
