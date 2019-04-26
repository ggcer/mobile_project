/* ------------------------------------------ localStorage缓存工具类 ------------------------------------------ */
const local = {
  //localStorage 设置缓存
  set(key, value) {
    if (typeof value == "string") {
      localStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  },
  //localStorage 获取缓存
  get(key) {
    let value = localStorage.getItem(key);
    if (value && (value.substr(0, 1) == "{" || value.substr(0, 1) == "[")) {
      try {
        value = eval("(" + value + ")");
      } catch (e) {
        console.log("error in get cache key:" + key + ", value:" + value);
      }
    }
    return value;
  },
  //localStorage 获取并删除缓存
  getThenRemove(key) {
    let value = this.get(key);
    this.removeItem(key);
    return value;
  },
  //localStorage 删除指定key的缓存
  removeItem(key) {
    localStorage.removeItem(key);
  },
  //localStorage 删除全部缓存
  clear() {
    localStorage.clear();
  }
};

export default local;
