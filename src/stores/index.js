/* ------------------------------------------ store入口 ------------------------------------------ */
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// 自动引入所有的模块
const modules = require.context("./modules", false, /.js$/);
const storeModules = modules.keys().reduce((result, fileName) => {
  const moduleName = fileName.replace(/\.\/(.*)\.js$/g, "$1");
  result[moduleName] = modules(fileName).default;
  return result;
}, {});

// 创建store对象
export default new Vuex.Store({
  modules: storeModules
});
