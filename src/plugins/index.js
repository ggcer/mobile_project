/* ------------------------------------------ plugin入口 ------------------------------------------ */
// 自动引入所有的模块
const modules = require.context("./modules", false, /.js$/);
modules.keys().forEach(fileName => {
  const moduleName = fileName.replace(/\.\/(.*)\.js$/g, "$1");
  require(`./modules/${moduleName}`);
}, {});
