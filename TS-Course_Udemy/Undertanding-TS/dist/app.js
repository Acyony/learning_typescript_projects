"use strict";
const userName = 'Alcione';
let age;
age = 30;
let userInput;
userInput = 'data';
console.log(userName);
const button = document.querySelector('button');
function clickHandler(message) {
    console.log('Clicked!' + message);
}
if (button) {
    button.addEventListener('click', clickHandler.bind(null, 'Hello Mundo!'));
}
const add = (a, b) => a + b;
const printOutput = output => console.log(output);
const buttonEvent = document.querySelector('button');
buttonEvent.addEventListener('click', event => console.log(event));
console.log(add(9, 10));
const hobbies = ['reading', 'crocheting', 'traveling'];
const activeHobbies = ['fotography', ...hobbies];
activeHobbies.push(...hobbies);
const person = {
    firstName: 'Alcione',
    ageUser: 33
};
const copiedPerson = Object.assign({}, person);
console.log(copiedPerson);
const adding = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addNumbers = adding(5, 15, 56, 25);
console.log('addNumbers: ', addNumbers);
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);
const { firstName, ageUser } = person;
console.log(firstName, ageUser);
class Departments {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Departments('Accounting');
accounting.describe();
accounting.addEmployee('Donald Duck');
accounting.addEmployee('Mickey Mouse');
accounting.describe();
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map