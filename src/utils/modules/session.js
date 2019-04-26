/* ------------------------------------------ sessionStorage缓存工具类 ------------------------------------------ */
const session = {
  //sessionStorage 设置缓存
  set(key, value) {
    if (typeof value == "string") {
      sessionStorage.setItem(key, value);
    } else {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  },
  //sessionStorage 获取缓存
  get(key) {
    let value = sessionStorage.getItem(key);
    if (value && (value.substr(0, 1) == "{" || value.substr(0, 1) == "[")) {
      try {
        value = eval("(" + value + ")");
      } catch (e) {
        console.log("error in get cache key:" + key + ", value:" + value);
      }
    }
    return value;
  },
  //sessionStorage 获取并删除缓存
  getThenRemove(key) {
    let value = this.get(key);
    this.removeItem(key);
    return value;
  },
  //sessionStorage 删除指定key的缓存
  removeItem(key) {
    sessionStorage.removeItem(key);
  },
  //sessionStorage 删除全部缓存
  clear() {
    sessionStorage.clear();
  }
};

export default session;
