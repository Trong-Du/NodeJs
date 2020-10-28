const express = require("express");
const app = express();
app.use('/', express.static("public"));

/////////////////EJS

//1. Là 1 view engine
//2. View engine: code html ngắn gọn, đồng thời có thể sử dụng lại/ có thể đưa dữ liệu từ server và render ra html cuối cùng

///Gọi EJS ra sử dụng

app.set('view engine', 'ejs');

app.get('/',(req, res) => {
    res.send("hello");
});

app.listen(80