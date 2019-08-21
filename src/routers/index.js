/* ------------------------------------------ routers入口 ------------------------------------------ */

import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

// 自动引入所有的模块
const modules = require.context("./modules", false, /.js$/);
const routes = modules.keys().reduce((result, fileName) => {
  result = [...result, ...modules(fileName).default];
  return result;
}, []);

// 创建router对象
const router = new Router({
  routes: routes
});

// 路由切换处理函数
router.beforeEach((to, from, next) => {
  // 判断图片预览层是否关闭，如果未关闭，先关闭
  if (!closePhotoPreview()) {
    next(false);
    return;
  }
  // 设置标题
  document.title = to.meta.title;
  // 放行
  next();
});
// 判断图片预览层是否关闭，如果未关闭，先关闭
function closePhotoPreview() {
  // 当前图片预览层为打开
  if (document.querySelector(".pswp--open")) {
    // 手动触发关闭按钮click
    document.querySelector(".pswp__button--close").click();
    // 获取当前页面滚动高度--vue-navigation在next(false)时会失去页面高度
    const scrollTop = utils.ui.getBodyScrollTop();
    // 重新滚动到之前记录的高度
    setTimeout(() => {
      window.scrollTo(0, scrollTop);
    });
    return false;
  }
  return true;
}
export default router;
