const express = require("express");
const md5 = require("md5");
const multer = require("multer");

// Setup to save files
const storage = multer.diskStorage({
    //url to save files
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    // check file
    filename:(req, file, cb) => {
        cb(null, Date.now() + '-' +file.originalname);

        // 3 cases when upload a file
        // --1. File can't duplicate
        // --2. Check file extension before upload (for img almost .jpg, .png)
        // --3. Check file size before upload (file.size)
    }
});

const uploads = multer({storage: storage}).single('img');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));

app.get('/login', function (req, res) {
    res.sendFile(__dirname + '/login.html');
});
app.use('/',express.static("public"));

app.post('/getUserInfo',(req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    res.send("Hello username: " + username + ", password: " + md5(password));
});

app.post('/upload-file',(req, res) => {
    uploads(req, res, (err) => {
        if(err) res.send(err); else res.send("OK");
    })
});
app.listen(8080, () => {
    console.log("Server connect successfully");
});