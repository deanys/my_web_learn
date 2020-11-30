// Comment: 书名《 Javascript 权威指南》
// chapter
// 基于原型prototype-based
// netscape创建javascript,语言标准交给ecma欧洲计算机协会
// 通过方括号定义数组元素和通过花括号定义对象属性名和属性值之间的映射
// 初始化表达值initializer Expression
// javascript是用unicode字符集编码，区分大小写
// ex:\u00e9
/* 这是多行注释
 */
// 直接量12，null空
// {x:1,y:1}
// [1,2,3,4,5]
// 标识符以_和$还有字母
// 可选分号 a=3;a.toString()
// 类型，值和变量
[1, 2, 3].forEach(console.log);
// 数据类型分为： 原始类型primitive type 和对象类型object type
// null和undefined
// 对象(obj)是属性(property)的集合
// 全局对象global object全局对象
// 数组array
// 如果函数用来初始化(new 运算符)一个新建的对象，我们称之为构造函数（constructor）
// 每个构造函数定义了一类对象，由构造函数初始化对象组成的集合
// 类可以看作是对象类型的子类型
// 自由的进行数据转换
console.log(1 + "1"); //11
console.log("2" - 1); //1

// 数字：不区分整数型和浮点型
console.log(0.2 == 0.1 + 0.1) //false,不能用这种方式进行金融计算

// 溢出overflow和无穷infinity

console.log(1 / 0);
console.log(0 / 0);
console.log(NaN == NaN);
console.log(null == undefined);


// 转义字符：
console.log("I \"你好\"");
console.log("\u0022") //字符串“

// 字符串的使用，16位值组成不可变序列，utf-16编码
var e = "\ud835\udc52";
var s = "我";
console.log(e, e.length);
console.log(s.length);
// var s = "abc";
// 1111 1111 111 1111
// 长度为2的字符串(两个16位的值)有可能表示一个unicode字符
// es5中可以拆分成很多行，以\结束
var str = "ni\
hao\
          a"; //结果如下nihao          a，不推荐使用
console.log(str);

// 字符串使用，字符串方法，模式匹配（正则）

// 布尔（boolen）
console.log(typeof null) //返回obj,特殊的对象值,含义为非对象,表示数字，字符串和对象无值
console.log(typeof undefined) //未定义 表示变量没有初始化，函数无返回值时

// 全局对象：全局对象的属性时全局对象的符号
// 全局属性：undefined，NaN,Infinity
// 全局函数：isNaN
// 构造函数：String()
// 全局对象 Math
var globle = this; //定义一个引用全局对象的全局变量
console.log(globle);

// 包装对象:当属性值是一个函数时候，用o.m()来调用
// 创建完成后销毁
// String(),Number(),Boolean()构造函数创建一个临时对象，都是只读，有别于对象
// new String()方式转换成对象，所以字符串才有属性，
var t = "srt";
t.len = 3;
var h = t.len;
console.log(h); //undefined
var S = new String("ssd")

// 原始值不可以更改
// 对象和数组为可变，当引用同一个基对象，才相等
var a = [1, 2],
    b = [1, 2];
console.log(a == b);
var c = [1, 2],
    d = c;
console.log(d == c);
d[0] = 5;
console.log(d == c);

// 类型转换
console.log(1 + "2", 5 - "3", "3" * 5, "4" * "3");
// ==运算符不转花为布尔值
// 显示转换
console.log(Number("3"), Object(4));
// 除了null和undefined，其他都有toString()方法
// 数字转换
console.log(1234.34567.toFixed(2));
console.log(12345.3456.toExponential(2));
console.log(123.345.toPrecision(10));
var num = 3;
console.log(num.toString(), num.toString(2), num.toString(16));
console.log(Number("d3d")); //NaN
console.log(parseInt("23def45"));
console.log(parseInt("df23def45")); //NaNNaN

// 对象转原始值
var ob = { x: 1, y: 2 };
console.log(ob.toString()) //object object
console.log([1, 2, 3].toString())
console.log((new Date()).toString())

// 另一个转换对象是valueof
console.log(ob.valueOf())

//变量申明和变量作用域
// 在函数体中局部变量优先于全局变量
var fu = "globle";

function fn() {
    console.log(fu); //输出undefined
    var fu = "local";
    console.log(fu);
}

fn();
console.log(fu);
// 块级作用域，变量声明提前
// 全局变量，实际上是全局对象的一个属性，所以这个变量无法用delete删除
var tk = 1;
fak = 2;
console.log(delete tk);
console.log(delete fak);
console.log(delete this.tk);

// 作用域链，如果在本作用域中未找到，就会继续查找链上的下一个对象
// 表达式和运算符，对象创建表达式
// 创建一个对象并调用一个函数
console.log(new Object(2, 3));
// 运算符：typeof void instanceof
// 三元运算符？：
// a=i++,先给i 赋值给a,然后i+1

// == 和===
// in 运算符
// eval()尽量避免

// x>0?x:-x
// for(var i in o){
// console.log(o[i])
// }

a = [1, 2];
for (var i in a) console.log(a[i]);

// break 和continue
// 跳转语句
// mainloop:statemnet,可以通过标签名来引用这些语句
// try {

// } catch (e) {
//     console.log(e + "我预料的错误")

// } finally {
//     最终都要执行
// }

// with语句
// debugger
// "use strict"
// throw Error("我想报错")

// 对象详解
// 可以从一个称为原型的对象继承属性
// 对象的方法通常是继承的属性
// 原型式（prototypal inheritance）继承
// es5中则是可以加以配置，对象创建的属性
// 对象的原型是指另外一个对象，对象的类指标识对象的字符串，对象的扩展笔记指明可否添加新属性
// 内置对象如：array,Date
// 宿主对象
// 自定义对象，由运行的代码创建的对象那个
// 自有属性
// 继承属性 

// 创建对象
var ob = { x: 0, y: 1 };
var o = new Object(); //创建空对象
var o1 = Object.create({ x: 1, y: 2 }); //o1继承了属性x和y
var o2 = Object.create(null); //不继承任何属性和方法，
var o3 = Object.create(Object.prototype); //和new object()一样
console.log(ob, o, o1, o2, o3);
console.log(Object);
console.log(Object.prototype);
// 原型：除（null），每一个对象都是从原型（prototype）继承属性
// 所有通过对象直接量创建的对象都具有同一个原型对象，通过Javascript代码Object.prototype获得对原型对象的引用
// ex:new array()创建的对象的原型就是array.prototype
//Object.prototype不继承任何属性

//这个函数需要再理解
function inherit(p) {
    if (p == null) throw TypeError("p 是对象，但不能是null");
    if (Object.create) return Object.create(p);
    var t = typeof p;
    if (t !== "object" && t !== "function") throw TypeError("只能是obj,或者function");

    function f() {};
    f.prototype = p;
    return new f();
}


// 属性的查询,o.name o[name],用.来访问的时候，不可修改


// 继承
// ex：x中查找x属性，如果没有，会接着在p中寻找，再没有会在原型中寻找
var p = { x: 1, y: 2 };
var x = Object.create(p);
console.log(x.x);
x.x = 3;
x.h = 4;
console.log(x.x);
console.log(p.x);
console.log(x.toString()); //继承自原型prototype

// 属性赋值操作首先检查原型链，如果x继承只读属性，那么赋值操作不允许

console.log(x.z); //undefined
// 删除属性,delete
// 检测属性:in ,hasOwnProperty,！==
// propertyIsEnumerable(),只有检测到自有属性，且这个属性的可枚举性

console.log(x.z !== undefined);
console.log(x.hasOwnProperty("x"));
console.log(x.hasOwnProperty("y"));
console.log(x.propertyIsEnumerable("y"));

// 枚举属性
// 遍历对象的属性
for (h in x) console.log(h, x[h]);

// 属性的getter和setter，称作存取性属性
// 不同于数据属性，数据属性只有一个简单的值
// 当程序查询存取性的值，调用getter(),无参，设置存取性的值，调用setter()
// ex:
var p = {
    x: 1,
    y: 1,
    get r() {
        return this.x + this.y;
    },
    set r(value) {
        this.x = value;
        this.y = value + this.y;
    },
    get th() {
        return 2 * this.x + 2 * this.y;
    }
}

//th和r可以继承

console.log(p.r);
console.log(p.th);
p.r = 6;
console.log(p.r);
console.log(p.th);
console.log(p.x, p.y);

// 属性特性，可写，可枚举，可配置性。
// 通过调用object.getOwnPropertyDescript()可以获得某个对象特定属性的属性描述
// 只能得到自有属性的描述符
console.log(Object.getOwnPropertyDescriptor(p, "r"));

// 获得继承属性的特性，需要遍历原型链


// 设置属性的特性,value ,writeable,enimerable,configurable
console.log(x);
Object.defineProperty(x, "h", { writable: false }) //让x.h变为只读属性,不能修改继承属性
x.h = 6;
console.log(x.h); //并没有更改x的值
Object.defineProperty(x, "h", { get: function() { return this.x } }); //讲h属性给改为setter属性
console.log(x.h);
console.log(x);

var obj4 = {};
Object.defineProperty(obj4, "x", {
    value: 1,
    writable: true,
    enumerable: false,
    configurable: true
})

// 对于不允许修改或创建的属性；来说，调用object.defin,会抛出类型错误
//对象的三个属性，原型（prototype）,class和可扩展性extensible attribute
// 原型属性是用来继承属性,用p.isPrototypeOf(o),o继承自p
//类属性表示对象的类型信息
//可否给对象添加新属性，就是可扩展性，将对象转为不可扩展就就不可转回可扩展

function classof(o) {
    if (o === null) return "null";
    if (o === undefined) return "undefined"
    return Object.prototype.toString.call(o).slice(8, -1);
}

//序列化对象,将对象状态转换为字符串
var o11 = { x: 1, y: 2 };
var jso = JSON.stringify(o11); //序列化
var sp = JSON.parse(jso); //还原
console.log(o11, "dg", jso, "ddd0", sp)

//工厂函数来创建对象
function fn() {
    var obj = new Object();
    obj.name = "hhh";
    return obj;
}

console.log(fn());




function Person() {
    this.name = "wo";
    this.age = 12;
}
var a1 = Person(); //此时undefined
var a2 = new Person();
console.log(a1, "sss", a2);


//var self=this;this的值指向它调用的对象

//如果函数或者方法调用之前带有关键字new,它就构成构造函数调用



var o = {
    m: function() {
        var self = this;
        console.log(this, typeof this)
        console.log(this === o);
        f();

        function f() {
            console.log(this);
            console.log(this === o);
            console.log(self === o);
        }
    }
}
console.log("**************")
o.m();
console.log("**************")
new o.m();
// 再需要理解

f(4, 3, 2, 5);
f(1);
// 省略的参数都是undefine,多出的参数自动省略
function f(x, y, z) {
    if (arguments.length != 3) {
        for (var i = 0; i < arguments.length; i++) {
            console.log("参数是" + arguments[i]);
        }
        // throw new Er("参数输入错误");
    }
    console.log(x, y, z);
}

//不定实参的个数不能为0
//严格模式下不能个arguments赋值

// 将对象属性用作实参
// function arraycopy(args){

// }

// 函数属性
// function fac(n) {
//     if (isFinite(n) && n > 0 && n == Math.round(n)) {
//         if (!(n in factorial))
//     }
// }

