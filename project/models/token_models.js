const mongoose = require('mongoose');

// Tạo cấu trúc cho collection
const Schema = mongoose.Schema;

const TokenSchema = new Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    token: String,
    status: {
        type: Boolean,
        default: true
    }
});

// Tạo collection
module.exports = mongoose.model('tokens', TokenSchema);