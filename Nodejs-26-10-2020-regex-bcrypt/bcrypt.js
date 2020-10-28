//// 1. Tạo chuỗi hash
//// 2. So khớp

// load bcrypt
const bcrypt = require("bcrypt");

const saltRounds = 10; // độ băm
const password = '123456'; // user input

//tạo chuỗi hash
bcrypt.genSalt(saltRounds,(err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});
// $2b$10$tD1owb8SNS9DzvLTwCl6VOhuT8ubuFx9QWNW/CgJ7dnLSYCvSvgRK
var encryptPWD = '$2b$10$tD1owb8SNS9DzvLTwCl6VOhuT8ubuFx9QWNW/CgJ7dnLSYCvSvgRK';
// so khớp

bcrypt.compare(password, encryptPWD, (err, res) => {
    console.log(res);
});
// https://github.com/Trong-Du/NodeJs.git