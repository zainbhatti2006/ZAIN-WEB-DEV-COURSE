
 let a = prompt("Enter 1st Number:")
 let b = prompt("Enter 2nd Number:")
if (isNaN(a) || isNaN(b)){
   throw SyntaxError("Please enter valid numbers")
}
 let sum = parseInt(a) + parseInt(b);
let x = 10;
async function main(){
 try{
 console.log("The sum is:", sum*x);
return true;
 } catch(error){
    console.log("An error occurred:");
    return false;
 }
 finally{
    console.log("This will always execute");
 }
}
let c = main();

