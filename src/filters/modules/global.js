/* ------------------------------------------ 公共filter ------------------------------------------ */

import globalCode from "@/assets/global/globalCode";

// globalCode code desc map
const codeDescMap = {};
for (const key in globalCode) {
  if (!codeDescMap[key]) codeDescMap[key] = {};
  for (const key_ in globalCode[key]) {
    codeDescMap[key][globalCode[key][key_].code] = globalCode[key][key_].desc;
  }
}

const global = {
  // globalCode：码表映射desc
  /**
   *  码表映射desc
   *  @param {string} value     码表对应的code
   *  @param {number} type      码表类型
   *  @param {boolean} defaultValue   默认值
   */
  code(value, type, defaultValue) {
    return codeDescMap[type][value] || defaultValue || value;
  },
  /**
   *  字符串过长时多余字符省略
   *  @param {string} value       传入的字符串
   *  @param {number} length    显示的字符长度
   *  @param {boolean} expand   是否展开字符串
   */
  strOmit(value, length, expand) {
    if (!value) {
      return "";
    }
    if (expand == true) {
      return value;
    } else {
      return value.slice(0, length) + "...";
    }
  }
};

export default global;
