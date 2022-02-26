"use strict";
let user1;
user1 = {
    name: 'Minnie',
    age: 65,
    greet(phrase) {
        console.log(phrase + ' ' + this.name + '.' + ' I am ' + this.age);
    }
};
user1.greet('Hi there - I am');
//# sourceMappingURL=app.js.map