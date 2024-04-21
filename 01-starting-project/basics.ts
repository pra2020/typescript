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