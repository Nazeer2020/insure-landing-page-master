const btn = document.querySelector(".fa-bars");


btn.addEventListener("click", ()=>{
    document.querySelector(".fa-bars").classList.toggle("fa-times");
    document.querySelector(".mobile-menu").classList.toggle("mobile-hide");
    document.querySelector(".mobile-menu").classList.add("animate__backInRight");
})
