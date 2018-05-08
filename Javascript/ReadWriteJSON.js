/**
 * 利用Node读写JSON
 * @param {string} filePath JSON文件所在路径
 * @param {object} obj 需要写入的对象
 */

const fs = require('fs');

function readJSON(filePath) {
  return JSON.parse(fs.readFileSync(filePath));
}

function writeJSON(filePath, obj) {
  fs.writeFileSync(filePath, JSON.stringify(obj));
}
