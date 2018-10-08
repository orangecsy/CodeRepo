/**
 * 使用嗅探的方式判断浏览器是否支持 webp 格式图片
 * ### Example
 * import { supportWebp } from './supportWebp.js';
 * const flag = supportWebp();
 */
export function supportWebp() {
  let flag;
  var img = new Image();
  img.onload = function () {
    flag = img.width > 0 && img.height > 0;
  };
  img.onerror = function () {
    flag = false;
  };
  img.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
  return flag;
}