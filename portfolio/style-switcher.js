/*----------- toggle style switcher-----------------*/

const styleToggler = document.querySelector(".style-switcher-toggler");

styleToggler.addEventListener("click",() =>{
document.querySelector(".style-switcher").classList.toggle("open");
    

})

//hide style - switcher on scroll

window.addEventListener("scroll",()=>{
   if(document.querySelector(".style-switcher").classList.contains("open")){

    document.querySelector(".style-switcher").classList.remove("open");

    

   }
})