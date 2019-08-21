/* ------------------------------------------ stores入口 ------------------------------------------ */

import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
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
  modules: storeModules,
  plugins: [
    createPersistedState({
      key: "sessionVuexState",
      storage: window.sessionStorage
    })
  ]
});
