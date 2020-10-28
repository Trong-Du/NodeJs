////////Data type////////

//**string
//1. Khai bao
var str = 'hello';
//2. Su dung
console.log(str);
//***number
//1. Khai bao
var num = 5;
//2. Su dung
console.log(num);
//****array
//1. Khai bao (2 ways)
// 1-1
var arr1 = [1, 2, 3, 4];
// 1-2
var arr2 = new Array(1, 2, 3, 4);
//2. Su dung
console.log(arr1[1]);
//****object
// 1. Khai bao
var obj = {
    name: "Nguyen Trong Du",
    age: 27
}
// 2. Su dung
console.log(obj.age);
//boolean
//undefined
//null



////////Khai bao bien///////
//let, var, const

/////Xuat du lieu/////

// console.log()
// alert()
// document.write()
// document.getElementById('').innerHTML = ''

/////////OPERATORS///////////
// var num1 = 5;
// var num2 = 7;
// var num3 = num1 + num2;
// console.log(num3);

var b1 = 10;
var b2 = b1++;
var b3 = ++b1;
console.log(b2, b3);


/////////// Function

// 1. Khai bao
function funcRun() {
    return true;
}
// 2. Su dung
console.log(funcRun());



/////////////Arrow function////////////
//1
eat = function () {
    return "eat";
}
//2
eat = () => {
    return "eat";
}

//3
eat = () => "eat";

//////Giai phuong trinh bac 1 ax + b = 0

ptb1 = (a, b) => {
    return a !== 0 ? -b / a : undefined;
}

console.log(ptb1(0, 8));
