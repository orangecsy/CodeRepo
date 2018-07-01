
const request = require('request');
const cheerio = require('cheerio');

const url = 'https://www.baidu.com/';

request({
  url,
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36'
  }
}, function (error, response, body) {
  if (!error) {
    const $ = cheerio.load(body);
    console.log($.html());
    // console.log(body)
  }
});