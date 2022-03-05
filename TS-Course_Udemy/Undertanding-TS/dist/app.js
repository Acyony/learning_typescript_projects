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
//# sourceMappingURL=app.js.map