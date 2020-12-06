const { Socket } = require("dgram");
const express = require("express");
const app = express();
const server = require("http").Server(app);
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', express.static("public"));

// Gọi socket sử dụng

const io = require("socket.io")(server);

// Lý thuyết socket.io

// 1. emit : gửi đi
// 2. on : nhận

// 3. client khi gửi đi chỉ gửi cho server
// 4. server gửi đi
//// 4.1 : gửi cho chính họ
        // socket.emit("name", data);
//// 4.2 : gửi qua cho một người khác và chính họ
        // io.to(id).emit("name", data); //id người nhận
//// 4.3 : gửi cho những người khác, trừ client gửi

        // socket.broadcast.emit("name", data);
//// 4.4 : gửi cho tất cả
        // io.sockets.emit("name", data);

// Kiểm tra online
io.on('connection', (socket) => {
    
    console.log('Online: ' + socket.id);

    // server receive data
    socket.on('client-onlyRequestClient', (data) => {
        // trường hợp 1: gửi dữ liệu đi cho chính họ
        // socket.emit("server-onlyRequestClient", data);

        // trường hợp 3: gửi cho những người khác, trừ client gửi
        // socket.broadcast.emit("server-onlyRequestClient", data);

        // trường hợp 3: gửi cho tất cả
        io.sockets.emit("server-onlyRequestClient", data);
    });

    socket.on('loginSuccess', (data) => {
        io.sockets.emit('onUserLogin',data);
    });

    // Kiểm tra offline
    socket.on('disconnect', () => {
        console.log('Offline: ' + socket.id);
    });
});
app.get('/',(req, res) => {
    res.sendFile(__dirname+"/client.html");
});
app.get('/login',(req, res) => {
    res.sendFile(__dirname+"/login.html");
});
app.get('/chatroom',(req, res) => {
    res.sendFile(__dirname+"/chatroom.html");
});

app.post('/checkLogin',(req, res) => {
    var email = req.body.email;
    var pwd = req.body.pwd;
    var result = "fail";
    if(email.indexOf("a") > -1 && pwd.indexOf("b") > -1) {
        result = "success";
    }
    res.send(result);
});

server.listen(8080, () => {
    console.log("Server connect successfully");
});