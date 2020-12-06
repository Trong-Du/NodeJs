const express = require("express");
const router = express.Router();
const admin_controller = require('./admin_controllers');
router.use('/', admin_controller);

const product_controller = require('./product_controllers');
router.use('/', product_controller);
// Xuất dữ liệu
module.exports = router;