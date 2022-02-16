/*const person: {
    name: string;
    age: number;
    userName: string;
    hobbies: string[];
    role: [number, string] // Tuples => Tuple can contain two values of different data types.
} = {
// const person = {
    name: 'Alcione',
    age: 33,
    userName: 'Acyony',
    hobbies: ['reading', 'traveling'],
    role: [2, 'author']
}*/

enum Role { ADMIN, READ_ONLY, AUTHOR} // enum assign labels to number
/*const person: {
    name: string;
    age: number;
    userName: string;
    hobbies: string[];
    role: Role.ADMIN
} = {*/
const person = {
    name: 'Alcione',
    age: 33,
    userName: 'Acyony',
    hobbies: ['reading', 'traveling'],
    role: Role.ADMIN
}


if(person.role == Role.AUTHOR){
    console.log('is author')
}
// person.role.push('admin');
// person.role[1] = 10;


console.log(person)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}