/* ------------------------------------------ loader加载器 ------------------------------------------ */

/**
 * 加载图片--单张
 * @param {*} imgEle 图片src或img dom对象
 */
export const loadImg = imgEle => {
  // 如果传过来的是个字符串，则创建image对象去加载
  if (typeof imgEle == "string") {
    let src = imgEle;
    imgEle = new Image();
    imgEle.src = src;
  }
  return new Promise((resolve, reject) => {
    if (imgEle.complete) {
      //已经加载完成
      resolve();
    } else {
      //还没加载完成
      // 加载完成
      imgEle.onload = () => {
        resolve();
      };
      // 加载失败
      imgEle.onerror = () => {
        reject();
      };
    }
  });
};

/**
 * 加载图片--多张
 * @param {*} imgList 单张图片或多张图片(src或img dom对象)
 */
export const loadImgs = imgList => {
  // 非数组转成数组
  if (imgList.constructor != Array) {
    imgList = [imgList];
  }
  // 遍历需要加载的图片列表，生成promise列表
  let promiseList = [];
  imgList.forEach(item => {
    promiseList.push(loadImg(item));
  });
  // 返回同时加载的promise
  return Promise.all(promiseList);
};

/**
 * 返回一个指定毫秒后才返回成功的promise，用于做延迟
 * @param {*} delay 延迟毫秒
 */
export const delayPromise = delay => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, delay || 300);
  });
};

const loader = {
  loadImg,
  loadImgs,
  delayPromise
};

export default loader;
