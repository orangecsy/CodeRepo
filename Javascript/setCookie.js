/**
 * 设置 cookie
 * @param {string} key cookie键
 * @param {string} value cookie值
 * ### Example
 * import { setCookie } from './setCookie.js';
 * setCookie('name', 'csy');
 */
export function setCookie(key, value) {
  document.cookie = encodeURIComponent(key) + '=' + encodeURIComponent(value);
}