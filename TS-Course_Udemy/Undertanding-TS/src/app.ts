// The interface is used to describe the object structure - defines how an object look like
// allow to define the structure of an object
interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user1: Person;

user1 = {
    name: 'Minnie',
    age: 65,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name + '.' + ' I am ' + this.age)
    }
}

user1.greet('Hi there - I am')