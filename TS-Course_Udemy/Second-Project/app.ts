function add(num1: number, num2: number) {
    return num1 + num2;
}


function printResult(num: number): void { //: void = means this function doesn't return anything
    console.log('Result: ' + num)
}

printResult(add(12, 67));


// CallBack function
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result)
}

addAndHandle(10, 20, (result) => {
    console.log( 'addAndHandle: ' + result)
})

// Function types allows us to describe which type of functions I want use
let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printResult;

console.log(combineValues(8, 8))