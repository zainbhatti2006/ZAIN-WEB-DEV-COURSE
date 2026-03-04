console.log("This is tutorial of Functions in JavaScript");

// Function is a block of code designed to perform a particular task.
//  It is executed when "something" invokes it (calls it).

function greet(name) {
    console.log("Hello, " + name + " you are nice!");
    console.log("Hello, " + name + " you are good!");
    console.log("Hello, " + name + " you are smart!");
    console.log("Hello, " + name + " you are intelligent!");
}

function sum(a, b, c = 3) {
    console.log(a, b, c);
    return a + b + c;
}
let result1 = sum(5, 10);
let result2 = sum(7, 6);
let result3 = sum(8, 4);
console.log("The sum of a and b is " + result1);
console.log("The sum of a and b is " + result2);
console.log("The sum of a and b is " + result3);

const func1 = (x) => {
    console.log("The square of " + x + " is " + (x * x));
}
func1(5);
func1(6);
func1(7);
