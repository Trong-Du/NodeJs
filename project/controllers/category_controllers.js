const express = require('express');
const router = express.Router();

router.get('/category', (req, res)=>{
    link=req.originalUrl;
    str = '';
    main = 'categories/main';
    res.render('index', {main: main, link:link, str : str});
});

router.get('/category/add', (req, res)=>{
    main = 'categories/add';
    res.render('index', {main: main});
});

// Xuất dữ liệu
module.exports = router;