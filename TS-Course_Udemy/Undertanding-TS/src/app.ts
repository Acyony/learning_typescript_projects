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
    firstName: 'Alcione',
    ageUser: 33

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


//Array and Object Destructuring
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

const {firstName, ageUser} = person;
console.log(firstName, ageUser);

// working with classes
class Departments {
    // private name: string;
    // private id: string;
    private employees: string[] = []; // private means it can be accessed only inside the class "Department"

    constructor(private readonly id: string, public name: string) {
        // this.name = name;
        // this.id = id;
    }

    describe(this: Departments) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}


// Class Inheritance
class ITDepartment extends Departments {
    // admins: string[];

    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}


class AccountingDepartment extends Departments {
    constructor(id: string, private reports: string[]) {
        super(id, 'IT');
    }

    addReport(text: string) {
        this.reports.push(text)
    }

    printReports() {
        console.log(this.reports)
    }
}


// const accounting = new Departments('d1', 'Accounting');
const it = new ITDepartment('d1', ['Rose', 'Lilly', 'Lisa', 'Jenny']);
it.describe();

// const accountingCopy = {name: 'Mickey', describe: accounting.describe};
// accountingCopy.describe();

it.addEmployee('Donald Duck');
it.addEmployee('Mickey Mouse');

it.describe();
it.printEmployeeInformation();
console.log(it);

const accounting = new AccountingDepartment('d2', []);
accounting.addReport('Something went wrong!');
accounting.addReport('Reset the server!');
accounting.addReport('Reset the password!');
accounting.printReports();