/**
 * 获取所在 App 的名称 
 * ### Example
 * import { getAppName } from './getAppName.js';
 * const app = getAppName();
 */
export function getAppName() {
  const AppList = {
    alipay: /alipayclient/,
    mqq: /qq\//,
    weibo: /weibo/,
    weixin: /micromessenger/
  };
  const appName = Object.keys(AppList);
  const ua = navigator.userAgent.toLowerCase();
  for (let i = 0, l = appName.length; i < l; i++) {
    if (AppList[appName[i]].test(ua)) {
      return appName[i];
    }
  }
  return 'web'
}