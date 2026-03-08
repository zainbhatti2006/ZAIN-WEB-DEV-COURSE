 
let random = Math.random();
console.log("The random number is: " + random);
let a = prompt("Enter the first number:");
let c = prompt("Enter the operator:");
let b = prompt("Enter the second number:");



let obj = {

    "+" : "-",
    "-" : "+",
    "*" : "/",
    "/" : "**",
}

if (random > 0.1) {
    // Perform the correct calculation based on the operator
    console.log("The result is: " + eval(a + c + b));
    alert("The result is: " + eval(a + c + b));
    alert("Congratulations! You got the correct answer.");
}
else {
    c = obj[c];
    // Perform the faulty calculation based on the operator
    console.log("The result is: " + eval(a + c + b));
    alert("The result is: " + eval(a + c + b));
    alert("Sorry, you got the wrong answer.");
}
