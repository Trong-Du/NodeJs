const express = require('express');
const router = express.Router();

// Gọi admin
const admin_controllers = require('./admin_controllers');
router.use('/', admin_controllers);

// Gọi product
const product_controllers = require('./product_controllers');
router.use('/', product_controllers);

// Gọi category
const category_controllers = require('./category_controllers');
router.use('/', category_controllers);

// Gọi user
const user_controllers = require('./user_controllers');
router.use('/', user_controllers);

// Gọi user
const userAPI_controllers = require('./userAPI_controllers');
router.use('/api/', userAPI_controllers);

// Gọi product
const productAPI_controllers = require('./productAPI_controllers');
router.use('/api/', productAPI_controllers);
// Gọi category
const categoryAPI_controllers = require('./categoryAPI_controllers');
router.use('/api/category/', categoryAPI_controllers);

module.exports = router;