const mongoose = require('mongoose');

// Tạo cấu trúc cho collection
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    username: {
        type: String,
        unique: true
    },
    password: String,
    email: {
        type: String,
        unique: true
    },
    phone: {
        type: String,
        unique: true
    },
    address: String,
    role: Array,
    status: {
        type: Boolean,
        default: false
    }
});

// Tạo collection
module.exports = mongoose.model('users', UserSchema);