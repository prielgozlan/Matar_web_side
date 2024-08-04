// ב HTML
// צריך לשים איי די גם לאייקון של הבורגר
// וגם לנאב עצמו


function declareBtns(){
  let burger_btn = document.querySelector("#burger_btn");
  let nav_open = document.querySelector("#nav_open");
  burger_btn.addEventListener("click",function(){
    //
    (nav_open.style.display != "block") ?  nav_open.style.display = "block" :  nav_open.style.display = "none";
    
    // if(nav_open.style.display != "block"){
    //   nav_open.style.display = "block";
    // }
    // else{
    //   nav_open.style.display = "none";
    // }
  })
}

declareBtns();

function scrollToSection1(){
  document.getElementById("section1").scrollIntoView({ behavior: "smooth" });
}
function scrollToSection2(){
  document.getElementById("section2").scrollIntoView({ behavior: "smooth" });
}
function scrollToSection3(){
  document.getElementById("section3").scrollIntoView({ behavior: "smooth" });
}
function scrollToSection4(){
  document.getElementById("section4").scrollIntoView({ behavior: "smooth" });
}
function scrollToSection5(){
  document.getElementById("section5").scrollIntoView({ behavior: "smooth" });
}