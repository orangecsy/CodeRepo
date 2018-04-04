/**
 * 观察者模式
 * observers：观察者集合，被观察者改变时，通知所有观察者
 * addObserver：将观察者加入集合
 * toObserver：用proxy改变原对象set行为，使值改变时通知所有观察者
 * set：重写对象的set方法
 * 下面声明两个观察者obs1、obs2，添加进观察者数组，之后声明被观察
 * 者person，此时修改person属性会通知观察者
 */

const observers = new Set();
const addObserver = obj => observers.add(obj);

function set(target, key, value, reveiver) {
    observers.forEach(observer => observer());
    const res = Reflect.set(target, key, value, reveiver);
    return res;
}
const toObserver = obj => new Proxy(obj, {set});

function obs1() {
    console.log("observer1");
}
function obs2() {
    console.log("observer2");
}
addObserver(obs1);
addObserver(obs2);

const person = toObserver({
    name: "a",
    age: 1
});
person.name = "b";
