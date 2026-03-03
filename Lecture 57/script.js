console.log("I am Tutorial of Loops in JavaScript");

// Loops in JavaScript are used to execute a block of code repeatedly until a specified condition is met.
//  There are several types of loops in JavaScript, including:
// 1. For Loop
// 2. While Loop
// 3. Do-While Loop
// 4. For...in Loop
// 5. For...of Loop

// 1. For Loop
// The for loop is used to execute a block of code a specific number of times.
//  It consists of three parts: initialization, condition, and increment/decrement.

// Example of a for loop:
for (let i = 0; i < 5; i++) {
    console.log("The value of i is: " + i);
}

// 2. While Loop
// The while loop is used to execute a block of code as long as a specified condition is true.      

// Example of a while loop:
let j = 0;
while (j < 5) {
    console.log("The value of j is: " + j);
    j++;
}

// 3. Do-While Loop
// The do-while loop is similar to the while loop, but it guarantees that the block of code
//  will be executed at least once, even if the condition is false.

// Example of a do-while loop:
let k = 0;
do {
    console.log("The value of k is: " + k);
    k++;
} while (k < 5);

// 4. For...in Loop
// The for...in loop is used to iterate over the properties of an object.   

// Example of a for...in loop:
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// 5. For...of Loop 
// The for...of loop is used to iterate over the values of an iterable object, 
// such as an array or a string.

// Example of a for...of loop:  
const fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}
