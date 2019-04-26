/* ------------------------------------------ interfaces入口 ------------------------------------------ */
// 自动引入所有的模块
const modules = require.context("./modules", false, /.js$/);
const interfaces = modules.keys().reduce((result, fileName) => {
  const moduleName = fileName.replace(/\.\/(.*)\.js$/g, "$1");
  result[moduleName] = modules(fileName).default;
  return result;
}, {});

export default interfaces;
