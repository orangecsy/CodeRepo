/**
 * ajax.readyState的可能取值
 * 0: 请求未初始化（代理被创建，但尚未调用open方法）
 * 1: 服务器连接已建立（open方法已经被调用）
 * 2: 请求已接收（send方法已经被调用，并且头部和状态已经可获得）
 * 3: 请求处理中（下载中，responseText属性已经包含部分数据）
 * 4: 请求已完成，且响应已就绪（下载操作已完成）
 * @param {string} url 请求地址
*/

const ajax = new XMLHttpRequest();
ajax.open('GET', url);
ajax.send();
ajax.onreadystatechange = function () {
  if (ajax.readyState == 4) {
    if (ajax.status == 200) {
      console.log(ajax.responseText);
    }
  }
};