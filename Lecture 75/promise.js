console.log('This is Promises');

let prom1 = new Promise ((resolve, reject) => {
    let a  = Math.random();
    if(a < 0.5){
        reject("Failed to load");
    }
    else{
        setTimeout(() => {
            console.log('Zain Bhatti');
            resolve("Zain");
        }, 1000);
    }
});

let prom2 = new Promise ((resolve, reject) => {
    let a  = Math.random();
    if(a < 0.5){
        reject("Failed to load 2");
    }
    else{
        setTimeout(() => {
            console.log('Zain Bhatti 2');
            resolve("Zain 2");
        }, 1000);
    }
});

let p3 = Promise.race([prom1, prom2]);
p3.then((a) =>{
    console.log(a);
}).catch(err =>{
    console.log(err);
})