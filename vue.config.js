module.exports = {
  devServer: {
    host: "0.0.0.0", // 用来真机调试
    proxy: {
      // 代理方式处理跨域 (面试必问)
      "/api": {
        ws: false,
        target: " https://cnodejs.org/api/v1 ", // target就是请求接口的根路径
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
