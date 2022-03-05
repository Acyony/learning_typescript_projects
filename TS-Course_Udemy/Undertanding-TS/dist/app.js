"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObject = merge({ name: 'Mickey', hobbies: ['Running', 'Muay Thai'] }, { age: 45 });
console.log(mergeObject);
console.log(mergeObject.name);
function countAndDescribe(element) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(''));
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'Alcione' }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Mickey');
textStorage.addItem('Donald Duck');
textStorage.removeItem('Donald Duck');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
//# sourceMappingURL=app.js.map