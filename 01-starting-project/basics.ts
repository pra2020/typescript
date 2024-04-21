// Primitives: number, string, boolean
// More complex types: arrays, objects
// function types, parameters


// Primitives:

let age: number = 24;
age = 21;

let userName: string;
userName = 'Max';

let booleanVal: boolean;
booleanVal = true;

// array type
let hobbies: string[];
hobbies = ['sports', 'cooking', 'painting'];

let scoresArr: number[];
scoresArr = [95, 32, 21, 99];

// objevt type
// let person: any;

let person: {
    name: string,
    age: number
}

person = {
    name: 'Max',
    age: 32
}

// array of objects of same kind
let people : {
    name: string,
    age: number
}[];

//Type inference: not nescessary to define type always
let course = 'React';
// course = 123;

// Union Types: it is a type defintion that allows more than 1 type

let firstName: string | string[];

let varName: string | number | boolean = 'React';
varName = 777;
varName = true;


// Type Alias
type Person = {
    name: string,
    age: number
};

let personObj : Person;
let personArr : Person[];

// function and func types

function add(a: number, b: number) {
    return a+b;
}
// OR

function add1(a: number, b: number): number | string {
    return a+b;
}

function printOp(value: any) {
    console.log(value);   
}

// Generics: type safe and flexible
/* function insertAtBegin(array: any[], value: any){
    const newArray = [value, ...array]
    return newArray;
} */
function insertAtBegin<T>(array: T[], value: T){
    const newArray = [value, ...array]
    return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtBegin(demoArray, -1);
const stringArray = insertAtBegin(['a','b','c'], 'd');

// this will not work for numbers
// updatedArray[0].split('');

stringArray[0].split('');