/**
 * 获取全部 cookie
 * ### Example
 * import { getCookies } from './getCookies.js';
 * const cookies = getCookies();
 * const { name, age } = getCookies();
 */
export function getCookies() {
  const cookies = document.cookie.split('; ');
  const result = {};
  for (let i = 0, l = cookies.length; i < l; i++) {
    const item = cookies[i].split('=');
    const key = item.shift();
    // 可能第一个等号后面还有等号
    result[key] = decodeURIComponent(item.join('='));
  }
  return result;
}