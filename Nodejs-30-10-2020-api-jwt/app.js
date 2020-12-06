const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
const jwt = require("jsonwebtoken");

app.use('/', express.static("public"));

// Ý nghĩa API
////1. Bên ngoài có thể sử dụng dc
////2. 

//Để bảo mật API, sử dụng JWT

////1. Tạo token

app.get('/createToken', (req, res) => {
    payload = {
        name: "Nguyen Trong Du",
        username: "trongdu.ng",
        email: "trongdu.ng@gmail.com"
    };
    secretKey = "Th1s!sTh3S3cr3tK3y";
    token = jwt.sign(payload, secretKey, {expiresIn: 60});
    res.send(token);
});

////2. Sử dụng token
app.get('/useToken', (req, res) => {
    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTmd1eWVuIFRyb25nIER1IiwidXNlcm5hbWUiOiJ0cm9uZ2R1Lm5nIiwiZW1haWwiOiJ0cm9uZ2R1Lm5nQGdtYWlsLmNvbSIsImlhdCI6MTYwNDA2NTYwMiwiZXhwIjoxNjA0MDY1NjYyfQ.E5_lK919f5z895jc0cx3_h7xV4jm2PJ7fKF9u3-6JVQ';
    secretKey = "Th1s!sTh3S3cr3tK3y";
    jwt.verify(token, secretKey, (err, data) => {
        if(err) {
            res.send({err : err});
        }
        res.send(data);
    });
});

app.get('/', (req, res) => {
    res.send("hello");
});

app.post('/testPost', (req, res) => {
    token = req.body.token;
    secretKey = "Th1s!sTh3S3cr3tK3y";
    jwt.verify(token, secretKey, (err, data) => {
        if(err) {
            res.send({err : err});
        } else {
            var var1 = req.body.var1;
            var var2 = req.body.var2;
            res.send(var1 + "/" + var2);

        }
        
    });
});

app.listen(8080, () => {
    console.log("Server connect successfully");
});