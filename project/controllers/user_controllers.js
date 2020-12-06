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
router.get('/user', (req, res) => {

    link = req.originalUrl;

    main = 'users/main';

    UserModels.find()
        .sort({ _id: -1 })
        .exec((err, data) => {
            if (err) {
                res.send({ kq: 0, err: err })
            } else {

                str = '';

                data.forEach((v) => {

                    str += `<tr id="` + v._id + `">
                <td>` + v.name + `</td>
                <td>Doe</td>
                <td>
                    <a href="user/edit/`+ v._id + `" class="btn btn-info">
                        Sửa
                    </a>  
                    <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#myModal`+ v._id + `">
                        Xóa
                    </button>
                </td>
                </tr>`;
                    str += `
                <div class="modal" id="myModal`+ v._id + `">
                    <div class="modal-dialog">
                      <div class="modal-content">
                  
                        <!-- Modal Header -->
                        <div class="modal-header">
                          <h4 class="modal-title">Thông báo</h4>
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                  
                        <!-- Modal body -->
                        <div class="modal-body">
                          Bạn có muốn xóa ?? <b>`+ v.name + `</b>
                        </div>
                  
                        <!-- Modal footer -->
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal" onClick="_delete('`+ v._id + `')">Xóa ngay</button>
                            <button type="button" class="btn" data-dismiss="modal">Thoát</button>
                        </div>
                  
                      </div>
                    </div>
                </div>`

                });

                // Gọi view
                res.render('index', { main: main, link: link, str: str });
            }
        });
});

router.get('/user/add', (req, res) => {
    link = '/user';
    main = 'users/add';

    // Gọi view
    res.render('index', { main: main, link: link });
});

router.get('/user/login', (req, res) => {
    link = '/user';
    main = 'users/add';

    // Gọi view
    res.render('users/login', { main: main, link: link });
});

router.get('/user/edit/:id', (req, res) => {
    link = '/user';
    main = 'users/edit';
    UserModels.find({ _id: req.params.id })
        .exec((err, data) => {
            // Gọi view
            res.render('index', { main: main, link: link, data: data });
        });
});

router.post('/user/check_login', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            UserModels.find({ username: username})
                .exec((err, data) => {
                    payload = {
                        name: data[0].fullname,
                        username: data[0].username,
                        email: data[0].email
                    };
                    console.log(data[0]._id);
                    secretKey = "Th1s!sTh3S3cr3tK3y";
                    token = jwt.sign(payload, secretKey, {expiresIn: 300}, (err, token) => {
                        obj_token = {
                            user_id: data[0]._id,
                            token: token
                        }
                        console.log(obj_token);
                        TokenModels.create(obj_token, (err, data) => {
                            if (err) {
                                res.send({ result: 0, err: err });
                            } else {
                                res.send({ result: 1, data: data });
                            }
                        });
                    });
                    // Gọi view
                    // res.render('index', {main: main, link: link, data: data});
                });
        });
    });

});

const saltRounds = 10; // độ băm
router.post('/user/add/getUserInfo', (req, res) => {

    var password = req.body.password;
    //tạo chuỗi hash
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            var obj = {
                username: req.body.username,
                email: req.body.email,
                password: hash,
                name: req.body.fullname,
                phone: req.body.phone,
                address: req.body.address

            };
            UserModels.create(obj, (err, data) => {
                if (err) {
                    res.send({ result: 0, err: err });
                } else {
                    res.send({ result: 1, data: data });
                }
            });
        });
    });
});

router.post('/user/edit/updateUserInfo', (req, res) => {
    var obj = {
        username: req.body.fullname,
        email: req.body.email,
        name: req.body.fullname,
        phone: req.body.phone,
        address: req.body.address

    };
    UserModels.updateMany({ _id: req.body.user_id }, obj, (err, data) => {
        if (err) {
            res.send({ result: 0, err: err });
        } else {
            res.send({ result: 1, data: data });
        }
    });
});
// searchUser
router.post('/user/edit/updateUserInfo', (req, res) => {
    var search_info = req.body.search_info;
    UserModel.find({ name: { '$regex': search_info } }).exec((err, data) => {
        if (err) {
            res.send({ result: 0, err: err });
        } else {
            res.send({ result: 1, data: data });
        }
    });
});
router.post('/user/deleteUser/', (req, res) => {
    var id = req.body.id;
    UserModels.findByIdAndDelete({ _id: id }, (err, data) => {
        if (err) {
            res.send({ result: 0, err: err });
        } else {
            res.send({ result: 1, data: data });
        }
    });
});




// Xuất dữ liệu
module.exports = router;