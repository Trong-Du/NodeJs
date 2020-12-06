// gọi mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://trongdu94:Inspiron552^@cluster0.4tb1c.mongodb.net/nodeproject202011?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
// thành công
.then( () => console.log('Kết nối DB thành công') )
// thất bại, báo lỗi
.catch( (err) => console.log(err) );