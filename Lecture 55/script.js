console.log("Hey this is my Lecture 55");

let a = 5;
let b = 10;
let c = a + b;
let d = "Zain";


// var 5a = 20; // This will give an error because variable name cannot start with a number.   
// var _5a = 20; // This is valid variable name because it starts with an underscore.

// console.log(a + b + c );
// console.log(d);
// console.log(typeof a, typeof b, typeof c, typeof d);

{
    let a = 20;
    console.log(a);
}
console.log(a);

// const a1 = 6;
// a1 = a1+1; 
// Not Allowed because a1 is a constant variable and its value cannot be changed.

let x = "Zain";
let y = 20;
let z = 1.2;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

let o = {
    "Name": "Zain",
    "Job Role": "Software Engineer",
    "is_handsome": true
}
console.log(o);
o.salary = 100000;
console.log(o);
o.salary = 120000;
console.log(o);
console.log(typeof o);