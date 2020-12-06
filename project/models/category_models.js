const mongoose = require('mongoose');

// Tạo cấu trúc cho collection
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    link: {
        type: String,
        unique: true
    },
    parents: {
        type: String
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        default: null
    },
    status: {
        type: Boolean,
        default: false
    }
});

// Tạo collection
module.exports = mongoose.model('categories', CategorySchema);