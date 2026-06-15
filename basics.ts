//primitives: number, string, boolean
//More complex types: arrays, objects
//function types , parameters

//primitives
let age: number;

age = 12;

let userName: string;

userName = 'Max';

let isActive: boolean;

isActive = true;

//More complex types
let hobbies: string[];

hobbies = ['Sports', 'cooking'];

let person: {
    name: string;
    age: number;
};

person = {
    name: 'Max',
    age: 29
};

// person = {
//     isEmployee: true
// }

let people: {
    name: string;
    age: number;
}[];

//Type inference
let course = 'React with Typescript';
// course = 1234

//union types
let courseTitle: string | number = 'React with Typescript';
courseTitle = 12

//Type aliases
type User = {
    name: string;
    age: 32;
}
let user: User;

//Functions and types
function add(a: number, b: number) {
    return a + b;
}

function print(value: any) {
    console.log(value)
}

// Generics

function insertAtBeginning(array: any[], value: any){
    const newArray = [value, ...array];
    return newArray;
}
const demoArray = [1,2,3];
const updatedArray = insertAtBeginning(demoArray, -1); //[-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')