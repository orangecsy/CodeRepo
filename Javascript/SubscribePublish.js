
var pub = {
    publish: function () {
        dep.notify();
    }
};

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

function Dep () {
    this.sub = [sub1, sub2];
}

Dep.prototype.notify = function () {
    this.subs.forEach(function (sub) {
        sub.update();
    });
};

var dep = new Dep();
pub.publish();