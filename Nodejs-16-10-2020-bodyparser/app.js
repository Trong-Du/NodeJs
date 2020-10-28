const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.get('/ptb1', function (req, res) {
    res.sendFile(__dirname + '/ptb1.html');
});

app.post('/giaiPTB1',(req, res) => {
    var numA = req.body.numberA;
    var numB = req.body.numberB;
    res.send("numA: " + numA + ", numB: " + numB);
});

app.get('/giaiPTB1GET/:numA/:numB',(req, res) => {
    var numA = req.params.numA;
    var numB = req.params.numB;
    res.send("numA: " + numA + ", numB: " + numB);
});
app.listen(8080, () => {
    console.log("Server connect successfully");
});