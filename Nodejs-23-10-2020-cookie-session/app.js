const express = require("express");
const app = express();
const multer = require("multer");
var fs = require('fs');
var dir = './uploads';

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
//Cookie
//Ứng dụng
// 1. Kiểm tra đăng nhập
// 2. Quản lí phiên làm việc của người dùng

// Process
// 1. Tạo cookie
// 2. Sử dụng cookie
// 3. Hủy cookie

///////////////npm install cookie-parser
//Gọi thư viện cookie

const cookie = require("cookie-parser");

app.use(cookie());
app.post("/createCookie", (req, res) => {
    var userInfo = req.body.userInfo;
    res.cookie('name', userInfo, {maxAge: 1000*120}).end("Cookie was created");
});


/////////////2. Sử dụng cookie
app.get('/useCookie', (req, res) => {
    res.end(req.cookies.name);
});

/////////////3. Hủy cookie
app.get('/deleteCookie',(req, res) => {
    res.clearCookie('name').end('Cookie was deleted');
});
// Setup to save files
const storage = multer.diskStorage({
    //url to save files

    destination: (req, file, cb) => {

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        cb(null, 'uploads');
    },
    // check file
    filename: (req, file, cb) => {
        if (file.mimetype != 'image/jpeg') {
            cb("file invalid extension");
        } else {
            cb(null, Date.now() + '-' + file.originalname);
        }
    }
});
var limits = { fileSize: 1024 * 50 };
const uploads = multer({ storage: storage, limits: limits }).single('img');



app.use('/', express.static("public"));


app.get('/register', (req, res) => {
    console.log(req.cookies.name);
    if(req.cookies.name === undefined) {
        res.redirect('/login');
    }
    res.sendFile(__dirname + '/index.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});
app.get('/logout', (req, res) => {
    res.clearCookie('name');
    res.redirect('/login');
});
app.post('/upload-file', (req, res) => {
    uploads(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            res.send({ status: "error", res: err });
        } else if (err) {
            res.send({ status: "error", res: err });
        } else {
            res.send({ status: "success", res: req.file });
        }
    })
});


app.listen(8080, () => {
    console.log("Server connect successfully");
});