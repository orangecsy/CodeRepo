/**
 * 通过数据劫持实现双向绑定
 * 函数defineProperty保存变量val=obj.txt
 * Object.defineProperty劫持属性obj.txt
 * obj为数据对象
 * 最后绑定input的keyup事件，完成obj.txt的赋值
 */
function defineProperty(obj, key){
    var val;
    Object.defineProperty(obj, 'txt', {  
        get: function () {  
            return val;  
        },  
        set: function (newValue) {
            if(newValue === val){
                return;
            }
            val = newValue;
            document.getElementById('input').value = newValue;  
            document.getElementById('show').innerHTML = newValue;  
        }  
    });
}
var obj = {};
defineProperty(obj, 'txt');
document.getElementById('input').addEventListener('keyup', function (e) {  
    obj.txt = e.target.value;  
}); 

