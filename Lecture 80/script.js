// let obj ={
//     a:1,
//     b:"Zain"
// }
// console.log(obj);

// let animal ={
//     eats:"true"
// };
// let rabbit ={
//     jumps:"true"
// };

// rabbit.__proto__ = animal;

class Animal{
    constructor(name){
        this.name = name;
        console.log("Object is created ....")
    }
    eats(){
        console.log("Kha Rha Hoon ....")
    }
    jumps(){
        console.log("Kod Raha Ho  ....")
    }
}
class lion extends Animal{
     constructor(name){
        super()
        this.name = name;
        console.log("Object is created he is a lion....")
    }
    eats(){
        super.eats()
        console.log("Kha Rha Hoon Roar....")
    }
}
let a = new Animal("Bunny");
console.log(a);

let l = new lion("Simba");
console.log(l);

