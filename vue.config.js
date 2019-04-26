const GitRevisionPlugin = require("git-revision-webpack-plugin");
const DefinePlugin = require("webpack").DefinePlugin;

// ------------------webpack插件注入 开始------------------
const webpackPlugins = [];
// git版本信息获取
const gitRevisionPlugin = new GitRevisionPlugin();
const GIT_COMMITHASH = gitRevisionPlugin.commithash();
const GIT_BRANCH = gitRevisionPlugin.branch();
webpackPlugins.push(
  // 全局变量
  new DefinePlugin({
    GIT_COMMITHASH: JSON.stringify(GIT_COMMITHASH),
    GIT_BRANCH: JSON.stringify(GIT_BRANCH)
  })
);
// ------------------webpack插件注入 结束------------------

// 打包提示
if (process.env.NODE_ENV == "production") {
  console.log(
    `\u001b[32m打包环境：\u001b[33m${process.env.VUE_APP_ENV}\u001b[0m`
  );
  console.log("---------------------------------------------------------");
  console.log(`\u001b[32m打包分支：\u001b[33m${GIT_BRANCH}\u001b[0m`);
  console.log("---------------------------------------------------------");
  console.log(`\u001b[32m当前提交：\u001b[33m${GIT_COMMITHASH}\u001b[0m`);
  console.log("---------------------------------------------------------");
}

module.exports = {
  // 基本路径
  publicPath: "",
  // 输出文件目录
  outputDir: process.env.VUE_APP_ENV,
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {
    msTileColor: "#4DBA87",
    name: "mobile_project"
  },
  // 第三方插件配置
  pluginOptions: {},
  // webpack配置
  configureWebpack: {
    plugins: webpackPlugins
  },
  // Webpack链，用于配置 loader rules 和 plugins
  chainWebpack: config => {
    // scss注入
    const oneOfsMap = config.module.rule("scss").oneOfs.store;
    oneOfsMap.forEach(item => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          resources: [
            "./src/assets/css/global/functions.scss",
            "./src/assets/css/global/mixins.scss",
            "./src/assets/css/global/vars.scss"
          ]
        })
        .end();
    });
  },
  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    host: "0.0.0.0",
    port: 8989,
    https: false,
    hotOnly: false,
    //代理配置
    // proxy: {
    //     '/api': {
    //         target: '<url>',
    //         ws: true,
    //         changOrigin: true
    //     }
    // },
    before: app => {}
  }
};
