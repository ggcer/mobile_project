/**
 * ui框架组件，全局组件引入
 */
import Vue from "vue";
// 按需引入muse-ui
import "muse-ui/lib/styles/base.less";
import "muse-ui/lib/styles/theme.less";
import {
  Alert,
  AppBar,
  BottomNav,
  BottomSheet,
  Button,
  Card,
  Checkbox,
  DateInput,
  DataTable,
  Dialog,
  Divider,
  Drawer,
  Form,
  Grid,
  Icon,
  List,
  LoadMore,
  Menu,
  Paper,
  Picker,
  Popover,
  Radio,
  Select,
  SlidePicker,
  Slider,
  Snackbar,
  Switch,
  Tabs,
  TextField
} from "muse-ui";

Vue.use(Alert);
Vue.use(AppBar);
Vue.use(BottomNav);
Vue.use(BottomSheet);
Vue.use(Button);
Vue.use(Card);
Vue.use(Checkbox);
Vue.use(DateInput);
Vue.use(DataTable);
Vue.use(Dialog);
Vue.use(Divider);
Vue.use(Drawer);
Vue.use(Form);
Vue.use(Grid);
Vue.use(Icon);
Vue.use(List);
Vue.use(LoadMore);
Vue.use(Menu);
Vue.use(Paper);
Vue.use(Picker);
Vue.use(Popover);
Vue.use(Radio);
Vue.use(Select);
Vue.use(SlidePicker);
Vue.use(Slider);
Vue.use(Snackbar);
Vue.use(Switch);
Vue.use(Tabs);
Vue.use(TextField);

// 引入全局组件
import AppPage from "@/components/global/AppPage";
import AppHeader from "@/components/global/AppHeader";
import AppContent from "@/components/global/AppContent";
Vue.component("AppPage", AppPage);
Vue.component("AppHeader", AppHeader);
Vue.component("AppContent", AppContent);
