// Generic types are a fundamental feature of statically-typed languages, allowing developers to pass types as parameters to another type, function, or other structure.

// const names: Array<string | number> = ['Max', 'Rose', 'Joseph'];

// Creating a generic function

function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergeObject = merge({name: 'Mickey'}, {age: 45});
console.log(mergeObject)
console.log(mergeObject.name)