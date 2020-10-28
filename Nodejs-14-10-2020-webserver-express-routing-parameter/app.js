const express = require("express");
const app = express();

//method: get, post, delete, path,...
// this is routing
app.get("/", (req, res) => {
    res.send("<b>hello world s ds ddd </b><b>hello world s ds ddd </b>");
});

app.get("/:id", (req, res) => {
    res.send(req.params.id);
});

app.get("/sumcalc/:num1/:num2/:num3", (req, res) => {
    var sum = parseInt(req.params.num1) + parseInt(req.params.num2) + parseInt(req.params.num3);
    res.send(sum.toString());
});

app.get('/form', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.listen(8080, () => {
    console.log("Server connect successfully");
});
