/* ------------------------------------------ 全局配置文件 ------------------------------------------ */

const globalConfig = {
  env: process.env.VUE_APP_ENV, // 当前环境
  serverUrl: process.env.VUE_SERVER_URL, // 服务器地址
  timeout: 60 * 1000, // 请求超时时长
  designWidth: 375, // 设计稿宽度
  isWx:
    window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) ==
    "micromessenger" //当前是否为微信
};

export default globalConfig;
