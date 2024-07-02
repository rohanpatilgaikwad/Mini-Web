let nav =document.querySelector(".nav");
let navi=document.querySelector(".nav-icons");

toggel=(()=>{
    nav.classList.toggle("active");
})

navi.addEventListener("click",()=>toggel());