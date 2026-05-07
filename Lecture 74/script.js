let btn = document.getElementById("btn");

btn.addEventListener("click",() =>{
    document.querySelector(".box").style.backgroundColor = "red"
})
btn.addEventListener("contextmenu",() =>{
   alert("Right Clicked")
})
btn.addEventListener("keydown",(e) =>{
  console.log(e, e.key, e.keyCode)
})