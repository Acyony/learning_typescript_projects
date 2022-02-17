function combine(input1: number | string, input2: number | string, resultConversion: string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString()
    }

    if (resultConversion === 'as-number') {
        return +result;
    } else {
        return result;
    }
}

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames)

const combinedStringAges = combine('40', '56', 'as-number');
console.log(combinedStringAges)

const combinedAges = combine(40, 56, 'as-number');
console.log(combinedAges)