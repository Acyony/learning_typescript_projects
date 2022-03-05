// Generic types are a fundamental feature of statically-typed languages, allowing developers to pass types as parameters to another type, function, or other structure.

// const names: Array<string | number> = ['Max', 'Rose', 'Joseph'];

// Creating a generic function

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergeObject = merge({name: 'Mickey', hobbies: ['Running', 'Muay Thai']}, {age: 45});
console.log(mergeObject);
console.log(mergeObject.name);


//

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';

    if (element.length === 1) {
        descriptionText = 'Got 1 element.'
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.'
    }
    return [element, descriptionText]

}

console.log(countAndDescribe('Hi there!'));