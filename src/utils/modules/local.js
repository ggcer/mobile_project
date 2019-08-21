/* ------------------------------------------ localStorage缓存工具类 ------------------------------------------ */

/**
 * 设置缓存
 * @param {*} key 键
 * @param {*} value 值
 */
export const set = (key, value) => {
  if (typeof value == "string") {
    localStorage.setItem(key, value);
  } else {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

/**
 * 取缓存
 * @param {*} key 键
 */
export const get = key => {
  let value = localStorage.getItem(key);
  if (value && (value.substr(0, 1) == "{" || value.substr(0, 1) == "[")) {
    try {
      value = eval("(" + value + ")");
    } catch (e) {
      console.log("error in get cache key:" + key + ", value:" + value);
    }
  }
  return value;
};

/**
 * 获取并删除缓存
 * @param {*} key 键
 */
export const getThenRemove = key => {
  let value = get(key);
  removeItem(key);
  return value;
};

/**
 * 删除缓存
 * @param {*} key 键
 */
export const removeItem = key => {
  localStorage.removeItem(key);
};

/**
 * 清空缓存
 */
export const clear = () => {
  localStorage.clear();
};

const local = {
  set,
  get,
  getThenRemove,
  removeItem,
  clear
};

export default local;
