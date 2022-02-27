type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

// Intersection Types

type ElevatedEmployee = Admin & Employee;

const employee1: ElevatedEmployee = {
    name: 'Adam',
    privileges: ['Create new server', ' Update new database'],
    startDate: new Date()
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges)
    }

    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate)
    }
}

console.log(printEmployeeInformation(employee1));


type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable | Numeric;


//Type guards = A type guard is some expression that performs a runtime check that guarantees the type in some scope. With type guards you avoid runtime errors by checking types before you try to do something with the values.
// typeof is in this example a type guards
function addFoo(a: number, b: number): number;
function addFoo(a: string, b: string): string;

function addFoo(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = addFoo('Donald', 'Duck');
console.log(result)

class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated union
interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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

moveAnimal({type: 'bird', flyingSpeed: 10});
moveAnimal({type: 'horse', runningSpeed: 60});


// Type casting
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
/*const userInputElement = <HTMLInputElement>document.getElementById('user-input')! as HTMLInputElement;

if (userInputElement) {
    userInputElement.value = 'Hi Mickey!';
}*/

// another option
const userInputElement = document.getElementById('user-input');

if (userInputElement) {
    (userInputElement as HTMLInputElement).value = 'Hi Donald!';
}


// Optional chaining
const fetchedUserData = {
    id: 'u1',
    name: 'Lilo',
    job: {title: 'CEO', description: 'My own company'},
};

console.log(fetchedUserData?.job?.title);


//Nullish Coalescing
// const userInputFoo = undefined;
const userInputFoo = ' .... ';

const storedData  = userInputFoo ?? 'DEFAULT';
console.log(storedData)