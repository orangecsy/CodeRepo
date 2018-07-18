/**
 * 获取全部查询串
 * ### Example
 * import { getQueryStrings } from './getQueryStrings.js';
 * const { token, id } = getQueryStrings();
 */
export function getQueryStrings() {
  const arr = location.search.substr(1).split('&');
  const result = {};
  for (let i = 0, l = arr.length; i < l; i++) {
    const item = arr[i].split('=');
    const key = item.shift();
    result[key] = decodeURIComponent(item.join('='));
  }
  return result;
}