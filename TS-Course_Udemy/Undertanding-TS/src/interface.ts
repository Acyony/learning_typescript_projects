// The interface is used to describe the object structure - defines how an object look like
// allow to define the structure of an object and allow to share functionalities amoung different classes.
// Difference between interface and customer type : Interface can be used only to describe the structure of an object. Customer type is possible to combine another types, like union types for example
// It's possible inheritance for multiple interfaces

// type addFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number;
}

let addNumber: AddFn;

addNumber = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Named {
    name?: string;
    outputName?: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;
    age = 30;

    constructor(name?: string) {
        if (name) {
            this.name = name;
        }
    }

    greet(phrase: string) {
        if(this.name){
            console.log(phrase + ' ' + this.name);
        }else {
            console.log('Hi!');
        }
    }

}

let user1: Greetable;

user1 = new Person();

user1.greet('Hi there - I am')