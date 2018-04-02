/**
 * 通过数据劫持实现双向绑定的初步完整实现
 * 第一部分的作用是遍历vm.el下所有节点，编译后重新添加到vm.el下
 * compile(node, vm)分别处理元素节点和文本节点，为有v-model的节
 * 点或模板字符串赋值，并添加Watcher
 * 第二部分遍历vm.data下所有数据，为每一个数据添加消息分发者Dep，
 * 利用Object.defineProperty定义set、get方法get方法中将绑定的节
 * 点添加到消息分发者Dep的sub数组中，set方法更新属性的值并调用分
 * 发者的分发方法通知所有sub数组成员
 * 第三部分构造观察者Watcher、分发者Dep，为节点绑定Watcher，为数
 * 据绑定Dep
 */

//第三部分
function Watcher(vm, node, name, nodeType){
    Dep.target = this;
    this.vm = vm;
    this.node = node;
    this.name = name;
    this.nodeType = nodeType;
    this.update();
    Dep.target = null;
}

Watcher.prototype = {
    update: function(){
        this.get();
        if (this.nodeType === 'text') {
            this.node.nodeValue = this.value;
        }
        if (this.nodeType === 'input') {
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
                node.value = vm[name];
                node.removeAttribute('v-model');
                new Watcher(vm, node, name, "input");
            }
        }
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
    var data = options.data;
    observe(data, this);//添加view=>model的绑定
    var dom = nodeToFragment(document.getElementById(id), this);
    document.getElementById(id).appendChild(dom);
}

var vm = new Vue({
    el: 'app',
    data: {
        input: 'hello'
    }
});