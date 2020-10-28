// 1. read file
// 2. create file
// 3. edit file
// 4. delete file

///////// 1. READ FILE

// Step 1. Load module fs
var fs = require('fs');

// Step 2. Read file
// fs.readFile(__dirname+"/text.txt", function(err, data) {
//     // console.log(data.toString()); // to string
//     // console.log(data); // return buffer
// });

// var content = fs.readFileSync(__dirname+"/text.txt");
// console.log(content); // to string
// console.log(content.toString()); // return buffer

///////// 2. CREATE FILE

// 1.1. Append file fs.appendFile

fs.appendFile("appendFile.txt","This is the append file", function(err) {
    if (err) throw err;
    // console.log("Saved");
});


// 1.2. Append file fs.open

fs.open("openFile.txt", "w", function(err, file) {
    if (err) throw err;
    // console.log("Saved");
})

// 1.3. Append file fs.writeFile

fs.writeFile("writeFile.txt","This is the write file", function(err) {
    if (err) throw err;
    // console.log("Saved");
});


///////// 3. UPDATE FILE

// 3.1. Append file fs.appendFile // append new content to old content

fs.appendFile("appendFile.txt","This is the append file already Edited", function(err) {
    if (err) throw err;
    // console.log("Saved");
});

// 3.2. Append file fs.writeFile // overwrite the content

fs.writeFile("writeFile.txt","This is the write file already Edited", function(err) {
    if (err) throw err;
    // console.log("Saved");
});

///////// 4. DELETE FILE

// fs.unlink("text.txt", function(err) {
//     if (err) throw err;
//     console.log("DELETED");
// });
///// Add Sync after function for synchronous, ex appendFileSync

///////CREATE FOLDER
var dir = './tmp';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}