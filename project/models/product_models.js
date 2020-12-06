const mongoose = require('mongoose');

// Tạo cấu trúc cho collection
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    link: {
        type: String,
        unique: true
    },
    description: String,
    content: String,
    image: String,
    images: Array,
    price: {
        type: Number,
        default: 0
    },
    category_id: mongoose.Schema.Types.ObjectId,
    user_id: mongoose.Schema.Types.ObjectId,
    status: {
        type: Boolean,
        default: false
    }
});

// Tạo collection
module.exports = mongoose.model('products', ProductSchema);

////Đánh giá sao
//Tạo thêm 1 bảng Start gồm: id_user, id_product, start