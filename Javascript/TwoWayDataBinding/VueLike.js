
//第三部分
function Watcher(vm, node, name, nodeType){
    Dep.target = this;
    this.name = name;
    this.node = node;
    this.vm = vm;
    this.nodeType = nodeType;
    this.update();
    Dep.target = null;
}

Watcher.prototype = {
    update: function(){
        this.get();
        // this.node.nodeValue = this.value;
        if (this.nodeType == 'text') {
            this.node.nodeValue = this.value;
        }
        if (this.nodeType == 'input') {
            this.node.value = this.value;
        }
    },
    get: function(){
        this.value = this.vm[this.name];
    }
}

function Dep(){
    this.subs = [];
}

Dep.prototype = {
    addSub: function(sub){
        this.subs.push(sub);
    },
    notify: function(){
        this.subs.forEach(function(sub){
            sub.update();
        });
    }
}

//第二部分
function defineProperty(vm, key, val){

    var dep = new Dep();

    Object.defineProperty(vm, key, {
        get: function (){
            if(Dep.target){
                dep.addSub(Dep.target);
            }
            return val;
        },
        set: function (newValue){
            // document.getElementById("show").innerHTML = newValue;
            // document.getElementById("input").value = newValue;
            if(newValue === val){
                return;
            }
            val = newValue;
            dep.notify();
        }
    });
}

function observe(data, vm){
    //Object.keys(data)返回data的key数组
    Object.keys(data).forEach(function(key){
        defineProperty(vm, key, data[key]);
    });
}

//第一部分
function compile(node, vm){
    if(node.nodeType === 1){
        var attr = node.attributes;
        for(let i = 0; i<attr.length; i++){
            if(attr[i].nodeName === 'v-model'){
                let name = attr[i].nodeValue;
                node.addEventListener('keyup', function(e){
                    vm[name] = e.target.value;
                });
                node.value = vm.data[name];
                node.removeAttribute('v-model');
            }
        }
        new Watcher(vm, node, name, "input");
    }
    if(node.nodeType === 3){
        let reg = /\{\{(.*)\}\}/;
        if(reg.test(node.nodeValue)){
            let name = RegExp.$1;
            name = name.trim();
            // node.nodeValue = vm.data[name];
            new Watcher(vm, node, name, "text");
        }
    }
}

function nodeToFragment(node, vm){
    var flag = document.createDocumentFragment();
    var child;
    while(child = node.firstChild){
        compile(child, vm);
        flag.appendChild(child);
    }
    return flag;
}

function Vue(options){
    var id = options.el;
    this.data = options.data;
    observe(this.data, this);//添加view=>model的绑定
    var dom = nodeToFragment(document.getElementById(id), this);
    document.getElementById(id).appendChild(dom);
}

var vm = new Vue({
    el: 'app',
    data: {
        input: 'hello',
        text: 'world'
    }
});