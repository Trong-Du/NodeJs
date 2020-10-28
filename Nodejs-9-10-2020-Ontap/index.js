// function a(callback1,callback2) { //callback only para name, function
//     setTimeout(() => {
//         console.log(1);
//         callback1();
//         callback2();
//     }, 1000)
// }
// function b() {
//     console.log(2);
// }
// function c() {
//     setTimeout(() => {
//     console.log(3);
//     },2000);
// } 
// a(b,c);

// function a(vb,callback1) { //callback only para name, function -- vb variable
//     setTimeout(() => {
//         console.log(vb);
//         callback1();
//     }, 1000)
// }
// function b(vb2,callback2) { //callback only para name, function
//     setTimeout(() => {
//         console.log(vb2);
//         callback2();
//     }, 2000)
// }
// ///callback hell
// a("bien so 1", function() {
//     b("bien so 2", function() {
//         a("bien so 3", function () {
//             b("bien so 4",()=>{});
//         })
//     })
// });

function sumTwoInteger(a, b) {
    return a+b;
}
function subtractTwoInteger(a, b) {
    return a-b;
}
function calculate(a, b) { //calculate sum, after that cal subbtract, then subtract them// 10, 4: 14 , 6 => 8
    var r1 = r2 = 0;
    setTimeout(() => {
        r1 = sumTwoInteger(a, b);
    },2000);

    r2 = subtractTwoInteger(a, b);

    return subtractTwoInteger(r1, r2);
}

// console.log(calculate(10, 4));

function x(a, b) {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(a+b);
        },2000);
    });
    return promise;
 }
//  console.log(x(10,2));
 x(10,2).then(function(done) {
   console.log(done); // --> 'done!'
 });