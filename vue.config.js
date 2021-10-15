const webpack = require('webpack');
const path = require('path');
const resolve = dir => path.join(__dirname, dir);
module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      "/myzhihu": {
        target: "http://api.vikingship.xyz",
        ws: true,
        changOrigin: true,
        pathRewrite: {
          "^/myzhihu": "",
        },
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@img", resolve("src/assets/img"))
      .set("@style", resolve("src/assets/style"))
      .set("@js", resolve("src/assets/js"))
      .set("@ts", resolve("src/assets/ts"))
      .set("@fonts", resolve("src/assets/fonts"))
      .set("@css", resolve("src/assets/css"))
      .set("@utils", resolve("src/utils"))
      .set("@cp", resolve("src/components"))
      .set("@views", resolve("src/views"))
      .set("@plugins", resolve("src/plugins"))
      .end();
    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .use("url-loader")
      .loader("url-loader")
      .options({
        limit: 10000,
        fallback: {
          loader: "file-loader",
          options: {
            name: "static/img/[name].[hash:8].[ext]",
          },
        },
      })
      .end();
  },
};
