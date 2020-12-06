
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://trongdu94:Inspiron552^@cluster0.4tb1c.mongodb.net/nodeproject202011?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => console.log("Connect DB Success"))
    .catch((err) => console.log(err));
