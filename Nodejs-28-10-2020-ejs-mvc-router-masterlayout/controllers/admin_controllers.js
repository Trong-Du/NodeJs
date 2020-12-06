const express = require("express");
const router = express.Router();
router.get('/',(req, res) => {
    var onlyString = 'partial/main_home';
    var sendHTML = "<span style='color: red;'>This is send HTML to ejs pratice<span>";
    var obj = {
        name: 'Nguyen Trong Du',
        age: 18
    };
    var arr = [
        {
            name: "Nguyen Trong Du"
        },
        {
            name: "Nguyen Huyen Ngoc Hoai"
        },
        {
            name: "Nguyen Van D"
        },
    ];
    // res.render("index", {onlyString: onlyString,sendHTML: sendHTML, obj: obj, arr: arr});
    res.render("index", {onlyString: onlyString});
});

// Xuất dữ liệu
module.exports = router;