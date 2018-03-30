
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

