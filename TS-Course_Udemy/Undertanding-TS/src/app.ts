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
    privileges: ['Create new server', 'Udate new database'],
    startDate: new Date()
}

console.log(employee1);

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable | Numeric;

