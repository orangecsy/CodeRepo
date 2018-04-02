//发布者
var pub = {
    publish: function () {
        //发布者通过分发者通知订阅者
        dep.notify();
    }
};

//订阅者
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