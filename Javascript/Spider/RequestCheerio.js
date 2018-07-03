/**
 * 使用Request和Cheerio的nodejs爬虫
 * @param {string} url 要爬的地址
*/

const request = require('request');
const cheerio = require('cheerio');

const url = 'https://www.baidu.com/';

request({
  url,
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36'
  }
}, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    const $ = cheerio.load(body, {
      ignoreWhitespace: true
    });
    console.log($.html());
  }
});