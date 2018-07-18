/**
 * 生成查询串
 * @param {object} obj 待生成为查询串的对象
 * ### Example
 * import { toQueryString } from './toQueryString.js';
 * const qs = toQueryString({
 *   a: '1'
 * });
 */
export function toQueryString(obj) {
  const result = Object.keys(obj).map(function (key) {
    return key + '=' + encodeURIComponent(obj[key] === void 0 ? '' : obj[key]);
  }).join('&');
  return result;
}