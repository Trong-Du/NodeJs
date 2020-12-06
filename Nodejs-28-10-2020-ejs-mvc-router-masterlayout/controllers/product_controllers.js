const express = require("express");
const router = express.Router();
router.get('/product',(req, res) => {
    var onlyString = 'products/main';
    res.render("index", {onlyString: onlyString});

});

// Xuất dữ liệu
module.exports = router;