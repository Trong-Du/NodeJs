const express = require("express");
const app = express();
const multer = require("multer");
var fs = require('fs');
var dir = './uploads';

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
    res.sendFile(__dirname + '/index.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
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