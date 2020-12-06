const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    link=req.originalUrl;

    main = 'partials/main_home'; // 3.1
    // bang = '<span style="color:red">hello</span>'; // 3.2
    // obj = {
    //     name: 'Nguyễn Văn A',
    //     age: 18
    // }; // 3.3
    // mang = [
    //     {
    //         name: 'NVA'
    //     },
    //     {
    //         name: 'NVB'
    //     },
    //     {
    //         name: 'NVC'
    //     }
    // ];

    res.render('index', {main: main, link:link});
});

// Xuất dữ liệu
module.exports = router;