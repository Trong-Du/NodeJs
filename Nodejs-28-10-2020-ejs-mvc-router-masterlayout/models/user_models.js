
////Tạo cấu trúc cho collection (schema)
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String
    },
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
        type: String
    },
    address: {
        type: String
    },
    role: Array,
    status: {
        type: Boolean,
        default: false
    }

});

//// Taoj collection
module.exports = mongoose.model('users', UserSchema);