/**
 * 观察者/发布者模式
 * pub为发布者，有通知方法publish，方法内调用不同分发者的notify方法
 * Dep为分发者，维护订阅者列表sub，并有通知方法notify，遍历sub数组并
 * 调用每个订阅者的update方法
 * sub1，sub2为订阅者，update方法会在pub调用publish时执行
 */

//发布者
var pub = {
    publish: function () {
        //发布者通过分发者通知订阅者
        dep.notify();
    }
};

//观察者
var sub1 = {
    update: function () {
        //子对象1执行
    }
};

var sub2 = {
    update: function () {
        //子对象2执行
    }
};

//分发者
function Dep () {
    this.sub = [sub1, sub2];
}

Dep.prototype.notify = function () {
    this.subs.forEach(function (sub) {
        sub.update();
    });
};

//定义分发者，调用发布者发布方法
var dep = new Dep();
pub.publish();