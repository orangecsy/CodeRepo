/**
 * 使用phantom.js爬取网页
 * @param {string} url 要爬的地址
*/

const page = require('webpage').create();
const url = 'https://www.baidu.com/';

phantom.outputEncoding = 'utf-8';
page.open(url, function (status) {
  if (status === 'success') {
    console.log(page.title);
  }
  phantom.exit();
});