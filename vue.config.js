// 导入Vue CLI服务的配置函数
const { defineConfig } = require("@vue/cli-service");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

// 导出配置对象
module.exports = defineConfig({
  // 允许对依赖进行转译
  transpileDependencies: true,

  // 在保存时不进行代码风格检查
  lintOnSave: false,

  // 在vue-cli中使用webpack构建依赖
  chainWebpack(config) {
    config.plugin("monaco").use(new MonacoWebpackPlugin({}));
  },
});
