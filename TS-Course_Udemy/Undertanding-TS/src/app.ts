const userName = 'Alcione';
let age: number;
age = 30;

let userInput: string;
userInput = 'data';
console.log(userName)

const button = document.querySelector('button')!; // ! not null value


function clickHandler(message: string) {
    console.log('Clicked!' + message);

}

// use either ! or if condition
if (button) {
    button.addEventListener('click', clickHandler.bind(null, 'Hello Mundo!'))
}

const add = (a: number, b: number) => a + b;

const printOutput: (a: number | string) => void = output => console.log(output);

const buttonEvent = document.querySelector('button')!;

buttonEvent.addEventListener('click', event => console.log(event))

console.log(add(9, 10));

// spread operator
const hobbies = ['reading', 'crocheting', 'traveling'];
const activeHobbies = ['fotography', ...hobbies];
activeHobbies.push(...hobbies);

const person = {
    name: 'Alcione',
    age: 33

}

const copiedPerson = {...person};
console.log(copiedPerson)


// rest operator
const adding = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0)
}

const addNumbers = adding(5, 15, 56, 25);
console.log('addNumbers: ', addNumbers)