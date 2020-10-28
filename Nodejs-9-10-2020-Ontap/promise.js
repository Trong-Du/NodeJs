// /////PROMISE
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

// var promise = new Promise((resolve, reject) => {
//     resolve("hello");
//     // reject("error");
// });
// promise.
// then((rs) => console.log(rs))
// .catch( (err) => console.log(err))
// ;


// var promise = new Promise((resolve, reject) => {
//     var b=4;
//     if(b==5) {
//         resolve("b la 5");
//     } else {
//         reject("b ko phai 5");
//     }
// });


// promise.
// then((rs) => console.log(rs))
// .catch( (err) => console.log(err));

// var f1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1);
//         console.log(11);
//     }, 2000)
// })
// var f2 = new Promise((resolve, reject) => {
//     resolve(2);
// })

// f1
//     .then((rs) => f2)
//     .then((rs2) => console.log(rs2))
//     .catch((err) => console.log(err));

////////Async/Await
function fnA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var b =5;
            (b==5) ? resolve("b la 5") : reject("Err");
        }, 2000)
    }).then((rs) => console.log(rs)).catch((err) => console.log(err));
}

function fnB() {
    return new Promise((resolve, reject) => {
        var b =8;
            (b==5) ? resolve("b la 5") : reject("Err");
    }).then((rs) => console.log(rs)).catch((err) => console.log(err));
}

async function kq() {
    await fnA();
    await fnB();
}
kq();