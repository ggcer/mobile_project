/* ------------------------------------------ 全局配置文件 ------------------------------------------ */
const globalConfig = {
  designWidth: 375, // 设计稿宽度
  remToPxRate: 100, //rem转px的比例 100表示1rem转为100px
  isWx:
    window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) ==
    "micromessenger" //当前是否为微信
};

export default globalConfig;
