const fs = require("fs")

console.log(fs)

console.log("Starting....")
// 

fs.writeFile("html2.txt","Zain is a nice person",()=>{
    console.log("Done");
    fs.readFile("html.txt",(error,data)=>{
        console.log(error,data.toString());
    })
})

fs.appendFile("html.txt", "Bhatti",(e,d)=>{
    console.log(d)
})

console.log("Ending....")