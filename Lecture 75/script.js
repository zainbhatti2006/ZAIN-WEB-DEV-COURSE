console.log("Zain")
console.log("Bhatti")

setTimeout(() => {
    console.log("This is a timeout function");
}, 0);

setTimeout(() => {
    console.log("This is a timeout function2");
}, 0);

console.log("Ahmad");

const fn  = () => {
  console.log("Nothing");
}


const callback = (arg) => {
    console.log(arg);
    fn();
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload =callback("Zain Bhatti", fn);
    document.head.append(sc);
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js", callback)

