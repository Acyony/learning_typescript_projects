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
    name: 'Alcione',
    age: 33
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
//# sourceMappingURL=app.js.map