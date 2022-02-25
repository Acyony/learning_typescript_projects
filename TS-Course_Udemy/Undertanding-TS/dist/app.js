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
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Departments {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
        this.admins = admins;
    }
}
class AccountingDepartment extends Departments {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentlyReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No reports found!');
    }
    set mostRecentlyReport(value) {
        if (!value) {
            throw new Error('Please provide a valid value!');
        }
        this.addReport(value);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const it = new ITDepartment('d1', ['Rose', 'Lilly', 'Lisa', 'Jenny']);
it.describe();
it.addEmployee('Donald Duck');
it.addEmployee('Mickey Mouse');
it.describe();
it.printEmployeeInformation();
console.log(it);
const accounting = new AccountingDepartment('d2', []);
accounting.addReport('Something went wrong!');
accounting.addReport('Reset the server!');
accounting.addReport('Reset the password!');
accounting.addReport('New =^.^= alert!');
accounting.mostRecentlyReport = 'Year end report.';
console.log(accounting.mostRecentlyReport);
accounting.printReports();
//# sourceMappingURL=app.js.map