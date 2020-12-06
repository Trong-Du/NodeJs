const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
router.use(bodyParser.urlencoded({ extended: false }));

const jwt = require("jsonwebtoken");
// Gọi model
const UserModels = require('../models/user_models');
const TokenModels = require('../models/token_models');
var LocalStorage = require("node-localstorage").LocalStorage;
localStorage = new LocalStorage('./scratch');

//Lay danh sach phana trang
router.get('/user/list/:skip/:limit', (req, res) => {
    UserModels.find()
    .skip(Number(req.params.skip))
    .limit(Number(req.params.limit))
    .exec((err, data) => {
        if(err) {
            res.send({kq: 0, err : err});
        } else {
            res.send({kq: 1, data: data});
        }
    })
});

//Lay danh sach tat ca thanh vien
router.get('/user/list/', (req, res) => {
    UserModels.find()
    .exec((err, data) => {
        if(err) {
            res.send({kq: 0, err : err});
        } else {
            res.send({kq: 1, data: data});
        }
    })
});

//Lay thong tin 1 thanh vien

router.get('/user/list/:id', (req, res) => {
    UserModels.find({_id: req.params.id})
    .exec((err, data) => {
        if(err) {
            res.send({kq: 0, err : err});
        } else {
            res.send({kq: 1, data: data});
        }
    })
});




// Xuất dữ liệu
module.exports = router;