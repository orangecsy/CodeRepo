/**
 * 判断对象是否为空
 * @param {object} obj 待判断对象
 * ### Example
 * import { isEmptyObject } from './isEmptyObject.js';
 * isEmptyObject({});
 */
export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}