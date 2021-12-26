/*--------------------------about section tabs----------------------*/
(()=>{

   const aboutSection = document.querySelector(".about-section"),
   tabsContainer = document.querySelector(".about-tabs");

   tabsContainer.addEventListener("click",(event)=>{
       /* if event .target conatins 'tabl-item' class and not conatins 'active 'class*/
    if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
       const target = event.target.getAttribute("data-target");

       //decatived existing active "tab-item"

       tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");

        //ative new "tab-item"
        event.target.classList.add("outer-shadow","active");

        // deactivate existing active 'tab-content
 
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        // activate new 'tab-content'
 
        aboutSection.querySelector(target).classList.add("active");
   
    }

      



   })

})();