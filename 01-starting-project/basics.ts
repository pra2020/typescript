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
