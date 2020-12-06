const express = require("express");
const app = express();
app.use('/', express.static("public"));

/////////////////EJS

//1. Là 1 view engine
//2. View engine: code html ngắn gọn, đồng thời có thể sử dụng lại/ có thể đưa dữ liệu từ server và render ra html cuối cùng
//3. Cách sử dụng dữ liệu từ server gửi qua
////3.1. Xuất ra 1 giá trị: <%=name%>
////3.2. Xuất ra 1 giá trị có chứa code html: <%-name%>
////3.3. Viết các câu lệnh: <% câu lệnh%>
////3.4. Gọi đến 1 file: <%- include(name); %>

///Gọi EJS ra sử dụng

app.set('view engine', 'ejs');
require('./database');
// Load từ file để sử dụng
const index_controller = require('./controllers/index_controllers');
app.use('/', index_controller);

app.listen(8080, () => {
    console.log("Server connect successfully");
});