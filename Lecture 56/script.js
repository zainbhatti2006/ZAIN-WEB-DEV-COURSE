// In this we will learn about conditional statements in JavaScript.
//  Conditional statements are used to perform different actions based on different conditions. 
//  The most common conditional statements are if, else if, and else.

console.log("Hello I am Conditional Tutorial");

let age = 18;
// let grace = 2;

//  age += grace
// console.log(age);
// console.log(age + grace);
// console.log(age - grace);
// console.log(age * grace);
// console.log(age / grace);
// console.log(age % grace);
// console.log(age ** grace);

if (age == 18) { 
    console.log("You can drive");
}   
else if (age == 18) {
    console.log("You have passed the test");
}
else if (age == 17) {
    console.log("You have failed the test");
}
else{
    console.log("You cannot drive");
}

// Ternary operator is a shorthand for if-else statement. 
// It is used to assign a value to a variable based on a condition. The syntax is:
// condition ? value_if_true : value_if_false;

let a = 10;
let b = 20;

let c = a < b ? (a-b) : (b-a);
console.log(c);