const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
router.use(bodyParser.urlencoded({ extended: false }));

const jwt = require("jsonwebtoken");
// Gọi model
const CategoryModels = require('../models/category_models');
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
    slug = slug.replace(/ /gi, "-");
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

router.post('/add', (req, res) => {
    let obj = {
        name: req.body.name,
        link: ChangeToSlug(req.body.name),
        parents: req.body.parents
    }
    CategoryModels.create(obj, (err, data) => {
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

router.post('/edit', (req, res) => {
    let id = req.body.id;
    let obj = {
        name: req.body.name,
        link: ChangeToSlug(req.body.name),
        parents: req.body.parents,
    }
    CategoryModels.updateMany({_id: id}, obj, (err, data) => {
        if(err) {
            res.send({kq: 0, err: err});
        } else {
            res.send({kq: 1, data: data});
        }
    });
});

//xóa
router.post('/delete', (req, res) => {
    let id = req.body.id;
    CategoryModels.findByIdAndDelete({_id: id}, (err, data) => {
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
    CategoryModels
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
    CategoryModels.find()
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
router.post('/get_category/:parent_id', (req, res) => {
    let parent_id = req.params.parent_id;
    CategoryModels
    .find({parents: parent_id})
    .sort({name: -1})
    .exec((err, data) => {
        if(err) {
            res.send({kq: 0, err: err});
        } else {
            res.send({kq: 1, data: data});
        }
    });
});

// Xuất dữ liệu
module.exports = router;