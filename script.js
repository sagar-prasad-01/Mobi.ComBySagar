let abt=document.querySelector(".aboutitems");
abt.addEventListener("click",function(){
   let abtitm=document.querySelector(".hideabout")
    if(abtitm.style.display==="none"||abtitm.style.display==="")
    {
       abtitm.style.display = "block";
       abtitm.style.padding = "10px";

    }
    else{
        abtitm.style.display="none"

    }

})

let bar = document.querySelector(".bar");
let navhai = document.querySelector(".navhai");

bar.addEventListener("click", function () {
  navhai.classList.toggle("hidden");       // hide/show karega
  navhai.classList.toggle("absolute");     // position absolute
  navhai.classList.toggle("bg-white");     // background white
  navhai.classList.toggle("top-[74px]");   // navbar ke thoda niche
  navhai.classList.toggle("right-0");      // right se chipka do
  navhai.classList.toggle("w-full");       // full width le le
});



 window.addEventListener("scroll", function () {
      const navbar = document.getElementById("nav2");
      if (window.scrollY > 20) {
        navbar.style.backgroundColor="#ffffff";
      } else {
        navbar.style.backgroundColor="#eeeeee";
      }
    });
console.log("hello");
console.log(abt);



  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const img = card.querySelector("img");

    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
      card.style.transition = "box-shadow 0.3s ease";
      img.style.transform = "scale(1.1)";
      img.style.transition = "transform 0.4s ease";
    });

    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "none";
      img.style.transform = "scale(1)";
    });
  });
