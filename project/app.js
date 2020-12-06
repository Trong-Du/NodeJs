const express = require('express');
const app = express();

// gọi body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static("public"));

// Gọi ejs
app.set('view engine', 'ejs');

// Gọi database
require('./database');

// Gọi index
const index_controllers = require('./controllers/index_controllers');
app.use('/', index_controllers);

app.listen(8080, ()=>{ console.log('Server đã bật'); });

// Mô hình MVC

// M : Xử lý riêng bên mongodb
// C : Nơi xử lý chính
// V : Nơi hiển thị giao diện cho người dùng