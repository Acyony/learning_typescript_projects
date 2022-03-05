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
console.log(countAndDescribe(''));

// generic types with keyof
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

extractAndConvert({name: 'Alcione'}, 'name');

// generic classes
// It allows to build a flexible but also strongly typed class
class DataStorage<T extends string | number| boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

// If I can store string
const textStorage = new DataStorage<string>();
textStorage.addItem('Mickey');
textStorage.addItem('Donald Duck');
textStorage.removeItem('Donald Duck');
console.log(textStorage.getItems());


// Or if I can store numbers
const numberStorage = new DataStorage<number | string>();


//
// const objStorage = new DataStorage<object>();
// const angelinaObj = {name: 'Algelina'};
// const bradObj = {name: 'Brad'};
// objStorage.addItem(angelinaObj);
// objStorage.addItem(bradObj);
// // =^.^=
// objStorage.removeItem(bradObj);
// console.log(objStorage.getItems());