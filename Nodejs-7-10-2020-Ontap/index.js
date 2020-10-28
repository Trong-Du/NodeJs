var arr = [1, 2, 3, 4, 5];

var result = "";
arr.forEach((value, index) => {
    result += "index: " + index + ", value: " + value + "\n";
});
// console.log(result);

/////////// class
//Cu phap
class testClass {
    index() {
        return "hello";
    }
}
var result = new testClass();
console.log(result.index());