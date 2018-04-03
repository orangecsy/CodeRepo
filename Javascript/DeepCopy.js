/**
 * 深拷贝
 * 输入：待拷贝数组或对象
 * 输出：深拷贝的数组或对象
 * 方法：判断输入类型是否为object，是直接返回，不是则判断是数组还是对象，
 * 之后遍历原数组/对象，直接复制子元素，递归处理子数组/子对象
 */

function deepCopy(source) {
    //出口条件
    if (typeof source !== "object") {
        return source;
    } else {
        var newObj;
        if (source instanceof Array) {
            newObj = [];
        } else {
            newObj = {};
        }
        for (let i in source) {
            //i是source的键
            if (typeof source[i] !== "object"){
                newObj[i] = source[i];
            } else {
                newObj[i] = deepCopy(source[i]);
            }
        }
        return newObj;
    }
}

