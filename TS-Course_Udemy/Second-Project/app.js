function add(num1, num2) {
    return num1 + num2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(12, 67));
// CallBack function
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log('addAndHandle: ' + result);
});
// Function types allows us to describe which type of functions I want use
var combineValues;
combineValues = add;
// combineValues = printResult;
console.log(combineValues(8, 8));
