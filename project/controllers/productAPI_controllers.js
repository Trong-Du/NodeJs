const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
router.use(bodyParser.urlencoded({ extended: false }));

const jwt = require("jsonwebtoken");
// Gọi model
const ProductModels = require('../models/product_models');
const TokenModels = require('../models/token_models');
var LocalStorage = require("node-localstorage").LocalStorage;
localStorage = new LocalStorage('./scratch');

function ChangeToSlug(title)
{
    //Đổi chữ hoa thành chữ thường
    slug = title.toLowerCase();
 
    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    //Xóa các ký tự đặt biệt
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    //Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, " - ");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    //Xóa các ký tự gạch ngang ở đầu và cuối
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');
    //In slug ra textbox có id “slug”
    return slug;
}

router.post('/product/add', (req, res) => {
    let obj = {
        name: req.body.name,
        link: ChangeToSlug(req.body.name),
        description: req.body.description,
        content: req.body.content,
        image: req.body.image,
        images: req.body.images,
        price: req.body.price,
        category_id: req.body.category_id,
        // user_id: req.body.user_id, // Lay tu token
    }
    ProductModels.create(obj, (err, data) => {
        if(err) {
            res.send({kq: 0, err: err});
        } else {
            res.send({kq: 1, data: data});
        }
    });
})

/////Viết API
//thêm
//sửa

router.post('/product/edit', (req, res) => {
    let id = req.body.id;
    let obj = {
        name: req.body.name,
        link: ChangeToSlug(req.body.name),
        description: req.body.description,
        content: req.body.content,
        image: req.body.image,
        images: req.body.images,
        price: req.body.price,
        category_id: req.body.category_id,
        // user_id: req.body.user_id, // Lay tu token
    }
    ProductModels.updateMany({_id: id}, obj, (err, data) => {
        if(err) {
            res.send({kq: 0, err: err});
        } else {
            res.send({kq: 1, data: data});
        }
    });
});

//xóa
router.post('/product/delete', (req, res) => {
    let id = req.body.id;
    ProductModels.findByIdAndDelete({_id: id}, (err, data) => {
        if(err) {
            res.send({kq: 0, err: err});
        } else {
            res.send({kq: 1, data: data});
        }
    });
});


//tìm kiếm
router.post('/product/search', (req, res) => {
    let name = req.body.name;
    ProductModels
    .find({name: {'$regex' : name}})
    .sort({_id: -1})
    .exec((err, data) => {
        if(err) {
            res.send({kq: 0, err: err});
        } else {
            res.send({kq: 1, data: data});
        }
    });
});

//phân trang

router.post('/product/list/', (req, res) => {
    let skip = req.body.skip;
    let limit = req.body.limit;
    ProductModels.find()
    .skip(Number(skip))
    .limit(Number(limit))
    .exec((err, data) => {
        if(err) {
            res.send({kq: 0, err : err});
        } else {
            res.send({kq: 1, data: data});
        }
    })
});

//lấy danh mục con, category, làm menu

// Xuất dữ liệu
module.exports = router;