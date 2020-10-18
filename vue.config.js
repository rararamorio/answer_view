module.exports = {
  devServer: {
    proxy: {
      "/answerapi": {
        target: "https://6pen25otxb.execute-api.ap-northeast-1.amazonaws.com/Prod",
        changeOrigin: true
      }
    }
  }
}