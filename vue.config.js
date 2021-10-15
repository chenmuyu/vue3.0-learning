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
};
