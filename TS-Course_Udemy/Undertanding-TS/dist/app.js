"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObject = merge({ name: 'Mickey' }, { age: 45 });
console.log(mergeObject);
console.log(mergeObject.name);
//# sourceMappingURL=app.js.map