const express = require('express');
const router = express.Router();

router.get('/product', (req, res)=>{
    link=req.originalUrl;

    main = 'products/main';
    res.render('index', {main: main, link:link});
});

router.get('/product/add', (req, res)=>{
    main = 'products/add';
    res.render('index', {main: main});
});

// Xuất dữ liệu
module.exports = router;