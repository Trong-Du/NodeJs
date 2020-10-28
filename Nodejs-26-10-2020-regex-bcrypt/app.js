// https://freetuts.net/hoc-php/hoc-regular-expression-php
const express = require("express");
const app = express();
app.use('/', express.static("public"));

/////REGULAR EXPRESSION
//1. Pattern (regex)
//2. Subject (data user input)
//3. Công thức 
////3.1. test
    //// pattern.test(subject) ? return true : return false;
////3.2. match
    //// subject.match(pattern) ? return true : return false;

// Note: 
///1. phân biệt chữ hoa thường
///2. nằm trong / /
///3. ^ : bắt đầu 1 kí tự
///4. $ : kết thúc 1 kí tự
///5. [0-9]: toàn bộ số
///6. [a-z]: toàn bộ chữ thường
///7. [A-Z]: toàn bộ chữ hoa
///8. {min,max} : min là số thấp nhất để điền vào chuỗi, max là số cao nhất để điền vào chuỗi
///9. * : chấp nhận rỗng -> vô hạn
///10. + : chấp nhận ít nhất 1 chữ (hoặc số) đến vô hạn
///11. ? : chấp nhận 1 chữ (hoặc số) hoặc rỗng
///12. . : bất kì kí tự nào
///13. | : hoặc
///14. gom nhóm (A|B)

// pattern = /^[A-Z]$/; // only check 1 character
// pattern = /^[A-Z]{1,5}[0-9]$/; // regex
// pattern = /^[A-Z]?$/; // regex
// pattern = /^(.)*$/; // regex
// subject = 'AB'; // user input

// Kiếm tra số điện thoại theo cú pháp
// 10 hoặc 11 số

// 0000-000-000
pattern = /^0[0-9]{3}\-[0-9]{3}\-[0-9]{3}$/; // regex
subject = '0123-456-789'; // user input
console.log((pattern.test(subject)) ?  true :  false);


// 0000-000-0000
pattern = /^0[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/; // regex
subject = '0123-456-7899'; // user input
console.log((pattern.test(subject)) ?  true :  false);

// 0000-000-0000 OR 0000-000-000
pattern = /^0[0-9]{3}\-[0-9]{3}\-[0-9]{3,4}$/; // regex
subject = '0123-456-7899'; // user input
console.log((pattern.test(subject)) ?  true :  false);

// Kiểm tra email
pattern = /^\w{3,}\@gmail\.(com|co)$/; // regex
subject = 'wdung@gmail.com'; // user input
console.log((pattern.test(subject)) ?  true :  false);


// app.listen(8080, () => {
//     console.log("Server connect successfully");
// });