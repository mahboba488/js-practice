
/*--------------------------navigation menu----------------------*/
(() =>{

   const hamburgerBtn = document.querySelector(".hamburger-btn"),
   navMenu = document.querySelector(".nav-menu"),
   closenavBtn = navMenu.querySelector(".colse-nav-menu");

   hamburgerBtn.addEventListener("click", showMenu);
   closenavBtn.addEventListener("click", hideMenu);

   function showMenu(){

      navMenu.classList.add("open");
  
   }

   function hideMenu(){

      navMenu.classList.remove("open");
  
   }

   function fadeOutEffect(){
      document.querySelector(".fade-out-effect").classList.add("active");
      setTimeout(()=>{
         document.querySelector(".fade-out-effect").classList.remove("active");
      },300)
   }
//attch and event handler to document

document.addEventListener('click',(event)=>{

   if(event.target.classList.contains('link-item')){
      /* make sure event.terget.hash has a value before overridding default behavior*/

      if(event.target.hash !==""){
         event.preventDefault();
         const hash = event.target.hash;
       //deactivate existing active 'section'
       document.querySelector(".section.active").classList.add("hide");
       document.querySelector(".section.active").classList.remove("active");

       //active new 'section'
       document.querySelector(hash).classList.add("active");
       document.querySelector(hash).classList.remove('hide');
      }
   }

 
})



})();




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

function bodyScrollingToggle(){
   document.body.classList.toggle("stop-scrolling");
}

/*----------------------------------portfolio filter and popup-----------------*/
(() =>{
   const filterContainer = document.querySelector(".portfolio-filter"),
   portfolioItemsContainer = document.querySelector(".portfolio-items"),
   portfolioItems = document.querySelectorAll(".portfolio-item"),
   popup = document.querySelector(".portfolio-popup"),
   preBtn = popup.querySelector(".pp-prev"),
   nextBtn = popup.querySelector(".pp-next"),
   closeBtn = popup.querySelector(".pp-close"),
   projectDetailsContainer = popup.querySelector(".pp-details"),
   projectDetailsBtn = popup.querySelector(".pp-project-details-btn");

   let itemIndex, slideIndex,screenshots;

   /* filter portfolio items*/
   filterContainer.addEventListener("click",(event)=>{

      if(event.target.classList.contains("filter-item") && ! event.target.classList.contains("active")){
        // decative existing active 'filter item'
        filterContainer.querySelector(".active").classList.remove("outer-shadow","active");
        //active new item
        event.target.classList.add("active" , "outer-shadow");

        const target = event.target.getAttribute("data-target");

        portfolioItems.forEach((item)=>{
          if(target === item.getAttribute("data-category") || target ==="all"){
             item.classList.remove("hide");
             item.classList.add("show");


          }else{

            item.classList.remove("show");
            item.classList.add("hide");

          }
        })
       
       

      }

     

   })


    portfolioItemsContainer.addEventListener("click",(event)=>{
       if(event.target.closest(".portfolio-item-inner")){
          const portfolioItem = event.target.closest(".portfolio-item-inner").parentElement;

        //get the portfolioitem index
        itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem);
        screenshots = portfolioItems[itemIndex].querySelector(".portfolio-item-img img").getAttribute("data-screenshots");
       //convert screenshots into array
       screenshots = screenshots.split(",");
       if(screenshots.length === 1 ){
          preBtn.style.display="none";
          nextBtn.style.display="none";


       }

       else{
         preBtn.style.display="block";
         nextBtn.style.display="block";
       }


      slideIndex = 0;
      popupToggle();
      popupSlideShow();
      popupDetails();
       }
    })


    closeBtn.addEventListener("click",()=>{

      popupToggle();


    })

    function popupToggle(){
       popup.classList.toggle("open");
       bodyScrollingToggle();
    }

    function  popupSlideShow(){
       const imgSrc = screenshots[slideIndex];
       const popupImg = popup.querySelector(".pp-img");
       /* activate loader until the popupImg loader */
       popup.querySelector(".pp-loader").classList.add("active");
       popupImg.src = imgSrc;
       popupImg.onload = () =>{
          //deativate loader after the  popupImg loader

          popup.querySelector(".pp-loader").classList.remove("active");
       }

       popup.querySelector(".pp-counter").innerHTML = (slideIndex+1) + " of " + screenshots.length;
 
    }

    //next slide

    nextBtn.addEventListener("click",() =>{
       if(slideIndex === screenshots.length-1){
          slideIndex = 0;
       }

       else{
          slideIndex++;
       }

       popupSlideShow();
    })

    //prev slide

    preBtn.addEventListener("click",() =>{
       if(slideIndex === 0){
          slideIndex = screenshots.length-1
       }

       else{
          slideIndex--;
       }

       popupSlideShow()
    })

    projectDetailsBtn.addEventListener("click",() =>{

      popupDetailsToggle();

    })

    function  popupDetails(){

      //if portfolio-item-details not exists

      if (!portfolioItems[itemIndex].querySelector(".portfolio-item-details")){
         projectDetailsContainer.style.display = 'none';
         return; /*end function execution*/
      }

      projectDetailsBtn.style.display="block";



      //get the project details

      const details = portfolioItems[itemIndex].querySelector(".portfolio-item-details").innerHTML;
      
      const title = portfolioItems[itemIndex].querySelector(".portfolio-item-title").innerHTML;
      popup.querySelector(".pp-title h2").innerHTML = title;
      const category = portfolioItems[itemIndex].getAttribute("data-category")

    }



    function  popupDetailsToggle(){

      if(projectDetailsContainer.classList.contains("active")){

         projectDetailsBtn.querySelector("i").classList.remove("fa-minus");

         projectDetailsBtn.querySelector("i").classList.add("fa-plus");

         projectDetailsContainer.classList.remove("active");
         projectDetailsContainer.style.maxHeight = 0 + "px"



      }else{

         projectDetailsBtn.querySelector("i").classList.remove("fa-plus");

         projectDetailsBtn.querySelector("i").classList.add("fa-minus");


         projectDetailsContainer.classList.add("active");

         projectDetailsContainer.style.maxHeight = projectDetailsContainer.scrollHeight + "px";

         popup.scrollTo(0,projectDetailsContainer.offsetTop);


      }


    }




})();


/*---------------------testimonial slider----------------------*/

(()=>{

   const sliderContainer = document.querySelector(".testi-slider-container"),
   slides = sliderContainer.querySelectorAll(".testi-item"),
   slideWidth = sliderContainer.offsetWidth,
   prevBtn = document.querySelector(".testi-slider-nav .prev"),
   nextBtn = document.querySelector(".testi-slider-nav .next"),
   activeSlide = sliderContainer.querySelector(".testi-item.active");

   let slideIndex = Array.from( activeSlide .parentElement.children).indexOf(activeSlide);
   

   //set width of all slides

   slides.forEach((slide)=>{
      slide.style.width = slideWidth + "px";
   })

   //set width of sliderContainer

   sliderContainer.style.width = slideWidth * slides.length + "px";

   nextBtn.addEventListener("click",()=>{
      if(slideIndex === slides.length-1){
         slideIndex = 0;
      }else{
         slideIndex++;
      }

     sliderContainer.style.marginLeft = - (slideWidth * slideIndex) + "px";
   })

   prevBtn .addEventListener("click",()=>{
      if(slideIndex === 0){
         slideIndex = slides.length - 1 ;
      }else{
         slideIndex--;
      }

      slider();

   })

   function slider(){
      //deactivate existing active slides

      sliderContainer.querySelector(".testi-item.active").classList.remove("active");

      //activate new slide

      slides[slideIndex].classList.add("active");

     sliderContainer.style.marginLeft = - (slideWidth * slideIndex) + "px";


   }

   slider();



   

})();

/*-------------------------hide all section except active----------------*/
const sections = document.querySelectorAll(".section");
sections.forEach((section) =>{
   if(!section.classList.contains("active")){
      section.classList.add("hide")
   }
})