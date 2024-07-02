let menubtns = document.querySelector(".menu-btns");
let header = document.querySelector(".header");
toggleNavbar=(()=>{
header.classList.toggle("active"); // the classlist is for adding class
                                    // we use togel for it to add and delete

})

menubtns.addEventListener("click",()=>toggleNavbar());

