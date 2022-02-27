"use strict";
let addNumber;
addNumber = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(name) {
        this.age = 30;
        if (name) {
            this.name = name;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi!');
        }
    }
}
let user1;
user1 = new Person();
user1.greet('Hi there - I am');
//# sourceMappingURL=interface.js.map