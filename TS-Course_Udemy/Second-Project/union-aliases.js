function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === 'as-number') {
        return +result;
    }
    else {
        return result;
    }
}
var combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
var combinedStringAges = combine('40', '56', 'as-number');
console.log(combinedStringAges);
var combinedAges = combine(40, 56, 'as-number');
console.log(combinedAges);
