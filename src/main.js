import Vue from "vue";
import App from "./views/App.vue";
import router from "./routers";
import store from "./stores";

// serviceWorker
import "@/assets/lib/serviceWorker/registerServiceWorker";

// window全局挂载
import globalCode from "@/assets/global/globalCode";
import globalConfig from "@/assets/global/globalConfig";
import interfaces from "@/interfaces";
import utils from "@/utils";
window.globalCode = globalCode;
window.globalConfig = globalConfig;
window.interfaces = interfaces;
window.utils = utils;

// 注入全部filter
import filters from "@/filters";
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

// vue-navigation
import Navigation from "vue-navigation";
Vue.use(Navigation, {
  router
});

// vue-lazyload
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload, {
  preLoad: 1.3, // 预加载高度，为屏幕的倍数
  attempt: 2, // 尝试加载次数
  // loading: "", // loading时显示的图片
  error: require("@/assets/imgs/global/pic/img_load_fail.png") // 图片加载失败时显示的图片
});

// vue-photo-preview
import preview from "vue-photo-preview";
import "vue-photo-preview/dist/skin.css";
Vue.use(preview);

// 按需引入muse-ui
import "muse-ui/lib/styles/base.less";
import "muse-ui/lib/styles/theme.less";
import {
  Alert,
  AppBar,
  AutoComplete,
  Avatar,
  Badge,
  BottomNav,
  BottomSheet,
  Breadcrumbs,
  Button,
  Card,
  Checkbox,
  Chip,
  DateInput,
  DataTable,
  Dialog,
  Divider,
  Drawer,
  ExpansionPanel,
  Form,
  Grid,
  GridList,
  Helpers,
  Icon,
  List,
  LoadMore,
  Menu,
  Pagination,
  Paper,
  Picker,
  Popover,
  Progress,
  Radio,
  Select,
  SlidePicker,
  Slider,
  Snackbar,
  Stepper,
  SubHeader,
  Switch,
  Tabs,
  TextField,
  Tooltip
} from "muse-ui";

Vue.use(Alert);
Vue.use(AppBar);
Vue.use(AutoComplete);
Vue.use(Avatar);
Vue.use(Badge);
Vue.use(BottomNav);
Vue.use(BottomSheet);
Vue.use(Breadcrumbs);
Vue.use(Button);
Vue.use(Card);
Vue.use(Checkbox);
Vue.use(Chip);
Vue.use(DateInput);
Vue.use(DataTable);
Vue.use(Dialog);
Vue.use(Divider);
Vue.use(Drawer);
Vue.use(ExpansionPanel);
Vue.use(Form);
Vue.use(Grid);
Vue.use(GridList);
Vue.use(Helpers);
Vue.use(Icon);
Vue.use(List);
Vue.use(LoadMore);
Vue.use(Menu);
Vue.use(Pagination);
Vue.use(Paper);
Vue.use(Picker);
Vue.use(Popover);
Vue.use(Progress);
Vue.use(Radio);
Vue.use(Select);
Vue.use(SlidePicker);
Vue.use(Slider);
Vue.use(Snackbar);
Vue.use(Stepper);
Vue.use(SubHeader);
Vue.use(Switch);
Vue.use(Tabs);
Vue.use(TextField);
Vue.use(Tooltip);

// 引入全局组件
import AppPage from "@/components/global/AppPage";
import AppHeader from "@/components/global/AppHeader";
import AppContent from "@/components/global/AppContent";
Vue.component("AppPage", AppPage);
Vue.component("AppHeader", AppHeader);
Vue.component("AppContent", AppContent);

// mixin
Vue.mixin({
  methods: {
    // 指定path跳转(不带参数)
    go(path) {
      this.$router.push(path);
    },
    // 回到上一个页面
    back() {
      this.$router.back();
    },
    //指定path跳转，带query参数(在url地址栏显示)
    goWithQuery(path, dataObj) {
      this.$router.push({
        path: path,
        query: dataObj
      });
    },
    //指定路由名字跳转，带params参数(不在url地址栏显示)
    goWithParams(name, dataObj) {
      this.$router.push({
        name: name,
        params: dataObj
      });
    }
  }
});

// 关闭生产模式下给出的提示
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
