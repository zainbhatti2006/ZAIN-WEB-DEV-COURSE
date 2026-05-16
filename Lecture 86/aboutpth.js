import path from "path"

let myPath = "c:\Users\Dell\Desktop\ZAIN-WEB-DEV-COURSE\Lecture 86\html.txt"
console.log(path.extname(myPath))

console.log(path.dirname(myPath))
console.log(path.basename(myPath))

console.log(path.join("c:/", "programs\\html.txt"))