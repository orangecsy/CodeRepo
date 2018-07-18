/**
 * 获取 cookie
 * @param {string} key cookie键
 * ### Example
 * import { getCookie } from './getCookie.js';
 * getCookie('name');
 */
export function getCookie(key) {
  const arr = document.cookie.split('; ');
  for (let i = 0, l = arr.length; i < l; i++) {
    const item = arr[i].split('=');
    if (item.shift() === key) {
      // 可能第一个等号后面还有等号
      return decodeURIComponent(item.join('='));
    }
  }
  return '';
}