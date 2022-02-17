function add(num1, num2) {
    return num1 + num2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(12, 67));
var combineValues = add;
console.log(combineValues(8, 8));
