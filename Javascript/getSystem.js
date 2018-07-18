/**
 * 获取当前系统名称
 * ### Example
 * import { getSystem } from './getSystem.js';
 * const sys = getSystem();
 */
export function getSystem() {
  const ua = navigator.userAgent.toLowerCase();
  if (/android/.test(ua))
    return 'android';
  if (/ios|iphone|ipod|ipad/.test(ua))
    return 'ios';
  if (/macintosh/.test(ua))
    return 'mac';
  if (/windows/.test(ua))
    return 'windows';
  return 'unknown';
}