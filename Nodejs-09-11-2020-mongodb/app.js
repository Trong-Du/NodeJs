///////////////////MONGODB

// https://topdev.vn/blog/mongodb-la-gi/

// là 1 dạng cơ sở dữ liệu NoSQL
// Mỗi collection đã có sẵn Primary key: mặc định _id (Object ID)
// Lưu dữ kiệu dưới dạng JSON: {key : value}
// để kết nối và thao tác các hàm thêm xóa sửa, sử dụng thư viện MONGOOSE

// Các kiểu dữ liệu mongodb
////1. String
////2. Number
////3. Boolean
////4. Double
////5. Min/ Max keys
////6. Array
////7. Timestamp
////8. Object
////9. Null
////10. Symbol
////11. Date
////12. Object ID
////13. Binary Data
////14. Code
////15. Regular Expresion

////Tạo cấu trúc collection: Schema
////Tạo collection: Model

const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://trongdu94:Inspiron552^@cluster0.4tb1c.mongodb.net/nodeproject202011?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => console.log("Connect DB Success"))
    .catch((err) => console.log(err));

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
const UserModel = mongoose.model('users', UserSchema);

// Thêm document
////1. Save

// obj = new UserModel({
//         name : 'Nguyen Trong B',
//         username: 'nguyentrongb',
//         password: '1234567899999',
//         email: 'nguyentrongb@gmail.com',
//         phone: '012233223',
//         address: '189B Cong Quynh, Q1',
//         role: [1,2]
// });

// obj.save((err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

////2. Create

// var objData = {
//     name : 'Nguyen Trong Du',
//     username: 'nguyentrongdu',
//     password: '123456'
// };
// UserModel.create(objData, (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// var objDataWithMultipleRecords = [
//     {
//         name : 'Nguyen Trong I',
//         username: 'nguyentrongi',
//         password: '12345678999999',
//         email: 'nguyentrongi@gmail.com',
//         phone: '01223322343533',
//         address: '189B Cong Quynh, Q1a4',
//         role: [1,2]
//     }, 
//     {
//         name : 'Nguyen Trong G',
//         username: 'nguyentrongg',
//         password: '12345678999939',
//         email: 'nguyentrongg@gmail.com',
//         phone: '012233234523ds',
//         address: '189B Cong Quynh, Q12121',
//         role: [1,2]
//     }, 
//     {
//         name : 'Nguyen Trong H',
//         username: 'nguyentrongh',
//         password: '123456782399999',
//         email: 'nguyentrongh@gmail.com',
//         phone: '012233223453rưer',
//         address: '189B Cong Quynh, Q123243243',
//         role: [1,2]
//     }, 
// ];
// UserModel.create(objDataWithMultipleRecords, (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

//// 3.Cập nhật
// var objDataForEdit = 
// {
//     name : 'Nguyen Trong C Edited',
//     username: 'nguyentrongc',
//     password: '12345678999999',
//     email: 'nguyentrongc@gmail.com',
//     phone: '012233223435',
//     address: '189B Cong Quynh, Q1a Edited',
//     role: [1,2]
// };

// UserModel.updateMany({_id: '5fabe6fdeb313018d05466d3'}, objDataForEdit, (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// //// 4. Xóa dữ liệu

// UserModel.findByIdAndDelete({_id: '5fabe6fdeb313018d05466d3'}, (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

////5. Lấy dữ liệu

// UserModel.find().exec((err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

////6. Tìm kiếm
// UserModel.find({name: {'$regex' : 'Nguyen Trong'}}).exec((err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

/// 7. Sắp xếp
////// sort = -1 : sort descending
////// sort = 1 (default) : sort ascending


// UserModel.find().sort({name: -1}).exec((err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

//// 8. Phân trang

//skip : vị trí bắt đầu
//limit: số lượng document

UserModel.find().skip(0).limit(2).exec((err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});