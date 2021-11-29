import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const modulesFiles = require.context("./modules", false, /\.js$/);

// 您不需要从'./modules/app'导入应用
// 它会自动需要modules文件中的所有vuex模块
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: modules,
});

export default store;
