/* ------------------------------------------ filters入口 ------------------------------------------ */

// 自动引入所有的模块
const modules = require.context("./modules", false, /.js$/);
const filters = modules.keys().reduce((result, fileName) => {
  const moduleName = fileName.replace(/\.\/(.*)\.js$/g, "$1");
  const moduleContent = modules(fileName).default;
  Object.keys(moduleContent).forEach(key => {
    result[`${moduleName}_${key}`] = moduleContent[key];
  });
  return result;
}, {});

export default filters;
