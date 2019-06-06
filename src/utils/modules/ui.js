/* ------------------------------------------ ui相关工具类 ------------------------------------------ */
const ui = {
  // 获取浏览器视口宽度
  getClientWidth() {
    let clientWidth = 0;
    if (document.compatMode == "CSS1Compat") {
      clientWidth = document.documentElement.clientWidth;
    } else {
      clientWidth = document.body.clientWidth;
    }
    return clientWidth;
  },
  // 获取浏览器视口高度
  getClientHeight() {
    let clientHeight = 0;
    if (document.compatMode == "CSS1Compat") {
      clientHeight = document.documentElement.clientHeight;
    } else {
      clientHeight = document.body.clientHeight;
    }
    return clientHeight;
  },
  // 获取当前页面总高度
  getScrollHeight() {
    let scrollHeight = 0,
      bodyScrollHeight = 0,
      documentScrollHeight = 0;
    if (document.body) {
      bodyScrollHeight = document.body.scrollHeight;
    }
    if (document.documentElement) {
      documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight =
      bodyScrollHeight - documentScrollHeight > 0
        ? bodyScrollHeight
        : documentScrollHeight;
    return scrollHeight;
  },
  // 获取当前页面滚动高度
  getScrollTop() {
    let scrollTop = 0,
      bodyScrollTop = 0,
      documentScrollTop = 0;
    if (document.body) {
      bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
      documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop =
      bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop;
    return scrollTop;
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
  }
};

export default ui;
