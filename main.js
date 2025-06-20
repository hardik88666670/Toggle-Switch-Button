let button=document.querySelector("#btn")
let light=document.querySelector(".light")
button.addEventListener("click",()=>{
        button.classList.toggle("active");
        light.classList.toggle("on");
});