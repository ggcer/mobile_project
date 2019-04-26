/* ------------------------------------------ ui相关工具类 ------------------------------------------ */
import Message from "muse-ui-message";

const ui = {
  // 获取当前屏幕宽度
  getClientWidth() {
    return document.documentElement.clientWidth; //当前屏幕宽度
  },
  // 获取当前屏幕高度
  getClientHeight() {
    return document.documentElement.clientHeight; //当前屏幕高度
  },
  // 获取当前页面滚动高度
  getBodyScrollTop() {
    return document.body.scrollTop || document.documentElement.scrollTop;
  },
  // 根据当前屏幕得出canvas绘图比例，防止失真
  getCanvasPixelRatio(context) {
    // 该属性的值决定了浏览器在渲染canvas之前会用几个像素来来存储画布信息
    const backingStore =
      context.backingStorePixelRatio ||
      context.webkitBackingStorePixelRatio ||
      context.mozBackingStorePixelRatio ||
      context.msBackingStorePixelRatio ||
      context.oBackingStorePixelRatio ||
      context.backingStorePixelRatio ||
      1;
    // 得出canvas绘图比例
    return (window.devicePixelRatio || 1) / backingStore;
  },
  // alert
  alert(opt = {}) {
    Message.alert(opt.content, opt.title, {
      icon: opt.icon, // 对话框的图标
      okLabel: opt.okLabel || "确定", // 确定按钮文字
      className: opt.className, // 对话框的自定义class
      beforeClose: (result, instance, done) => {
        opt.confirm && opt.confirm(); // 确认按钮回调函数
        done();
      }
    });
  },
  // confirm
  confirm(opt = {}) {
    Message.confirm(opt.content, opt.title, {
      icon: opt.icon, // 对话框的图标
      okLabel: opt.okLabel || "确定", // 确定按钮文字
      cancelLabel: opt.cancelLabel || "取消", // 取消按钮文字
      className: opt.className, // 对话框的自定义class
      beforeClose: (result, instance, done) => {
        if (result) {
          opt.confirm && opt.confirm(); // 确认按钮回调函数
        } else {
          opt.cancel && opt.cancel(); // 取消按钮回调函数
        }
        done();
      }
    });
  },
  // prompt
  prompt(opt = {}) {
    Message.prompt(opt.content, opt.title, {
      icon: opt.icon, // 对话框的图标
      okLabel: opt.okLabel || "确定", // 确定按钮文字
      cancelLabel: opt.cancelLabel || "取消", // 取消按钮文字
      className: opt.className, // 对话框的自定义class
      inputType: opt.inputType, // 输入框的类型
      inputPlaceholder: opt.inputPlaceholder, // placeholder
      inputValue: opt.inputValue, // 输入框的默认值
      validator: opt.validator, // 输入框验证函数
      beforeClose: (result, instance, done) => {
        if (result) {
          opt.confirm && opt.confirm(); // 确认按钮回调函数
        } else {
          opt.cancel && opt.cancel(); // 取消按钮回调函数
        }
        done();
      }
    });
  }
};

export default ui;
