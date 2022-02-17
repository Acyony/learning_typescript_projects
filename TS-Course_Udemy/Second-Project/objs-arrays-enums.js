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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {})); // enum assign labels to number
/*const person: {
    name: string;
    age: number;
    userName: string;
    hobbies: string[];
    role: Role.ADMIN
} = {*/
var person = {
    name: 'Alcione',
    age: 33,
    userName: 'Acyony',
    hobbies: ['reading', 'traveling'],
    role: Role.ADMIN
};
if (person.role == Role.AUTHOR) {
    console.log('is author');
}
// person.role.push('admin');
// person.role[1] = 10;
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
