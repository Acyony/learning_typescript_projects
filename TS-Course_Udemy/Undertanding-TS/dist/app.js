"use strict";
var _a;
const employee1 = {
    name: 'Adam',
    privileges: ['Create new server', ' Update new database'],
    startDate: new Date()
};
function printEmployeeInformation(emp) {
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}
console.log(printEmployeeInformation(employee1));
function addFoo(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = addFoo('Donald', 'Duck');
console.log(result);
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo(amount) {
        console.log('Loading cargo...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
moveAnimal({ type: 'horse', runningSpeed: 60 });
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
    userInputElement.value = 'Hi Donald!';
}
const fetchedUserData = {
    id: 'u1',
    name: 'Lilo',
    job: { title: 'CEO', description: 'My own company' },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInputFoo = ' .... ';
const storedData = userInputFoo !== null && userInputFoo !== void 0 ? userInputFoo : 'DEFAULT';
console.log(storedData);
//# sourceMappingURL=app.js.map