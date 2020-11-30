function f1() {
    var a = 2;

    function f2() {
        console.log(a)
    }
}

f1(); //啥也不显示，毕竟没有调用f2
// console.log(a); //a is not define
// f1并不是闭包，缺少返回的函数

function fn() {
    var b = 3;

    function f3() {
        return b;
    }
    return f3;
}

var c = fn();
var d = fn;
console.log(c());
console.log(d())
    // 此时d指向fn的地址，d()也就是return f3，并没有执行


// 优缺点需要自己记住并且了解

// 原型与原型链
// 1.构造函数
function Person() {

}
var per = new Person();
Person.prototype.say = function() {
    console.log("hhh")
}
Person.prototype.name = "hase";
per.name = "dean";
console.log(per);
console.log(per.__proto__)
console.log(per.__proto__ === Person.prototype); //所以函数的proyotype
// 每个原型都有一个 constructor 属性指向关联的构造函数 实例原型指向构造函数
console.log(Person === per.__proto__.constructor)
console.log(Person.prototype.constructor === Person)

console.log(per.name);
delete per.name;
console.log(per.name);