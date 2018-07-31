/**
 * 获取 URL 查询串
 * @param {string} key 键值
 * ### Example
 * import { getQueryString } from './getQueryString.js';
 * const token = getQueryString('token');
 */
export function getQueryString(key) {
  const arr = location.search.substr(1).split('&');
  for (let i = 0, l = arr.length; i < l; i++) {
    const item = arr[i].split('=');
    if (item.shift() === key) {
      return decodeURIComponent(item.join('='));
    }
  }
  return '';
}