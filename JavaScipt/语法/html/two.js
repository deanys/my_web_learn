function f1() {
    var a = 2;

    function f2() {
        console.log(a)
    }
}

f1();
console.log(a); //a is not define