/* ------------------------------------------ ui相关工具类 ------------------------------------------ */

/**
 * 获取浏览器视口宽度
 */
export const getClientWidth = () => {
  let clientWidth = 0;
  if (document.compatMode == "CSS1Compat") {
    clientWidth = document.documentElement.clientWidth;
  } else {
    clientWidth = document.body.clientWidth;
  }
  return clientWidth;
};

/**
 * 获取浏览器视口高度
 */
export const getClientHeight = () => {
  let clientHeight = 0;
  if (document.compatMode == "CSS1Compat") {
    clientHeight = document.documentElement.clientHeight;
  } else {
    clientHeight = document.body.clientHeight;
  }
  return clientHeight;
};

/**
 * 获取当前页面总高度
 */
export const getScrollHeight = () => {
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
};

/**
 * 获取当前页面滚动高度
 */
export const getScrollTop = () => {
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
};

const ui = {
  getClientWidth,
  getClientHeight,
  getScrollHeight,
  getScrollTop
};

export default ui;
