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


//Type guards = A type guard is some expression that performs a runtime check that guarantees the type in some scope.
// typeof is in this example a type guards
function addFoo(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

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