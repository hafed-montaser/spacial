// ======nav bar and heder=========
let myNav=document.getElementById("nav");
let myList=document.getElementById("down-list");
let myList2=document.getElementById("up-list");
let showClose = document.querySelector(".close-list");

myList.onclick=function(){
    myNav.classList.add("open");
    myList.style.display="none";
    showClose.classList.add("colse-list-show");
};
myList2.onclick=function(){
    myNav.classList.remove("open");
    myList.style.display="block";
    showClose.classList.remove("colse-list-show");
};
// ---------------------------
let my_link = document.getElementById("my_link");
let my_link2 = document.getElementById("my_link2");
let my_link3 = document.getElementById("my_link3");
let my_link4 = document.getElementById("my_link4");
let my_link5 = document.getElementById("my_link5");
my_link.onclick =function(){
   myNav.classList.remove("open");
   myList.style.display="block";
    showClose.classList.remove("colse-list-show");
}
my_link2.onclick =function(){
   myNav.classList.remove("open");
   myList.style.display="block";
   showClose.classList.remove("colse-list-show");
}
my_link3.onclick =function(){
   myNav.classList.remove("open");
    myList.style.display="block";
    showClose.classList.remove("colse-list-show");
}
my_link4.onclick =function(){
   myNav.classList.remove("open");
    myList.style.display="block";
    showClose.classList.remove("colse-list-show");
}
my_link5.onclick =function(){
   myNav.classList.remove("open");
    myList.style.display="block";
    showClose.classList.remove("colse-list-show");
}
// ---------------------------
// =========== nav a focase===========

let read = document.querySelector(".read-more");
let read2 = document.querySelector(".read-more2");
let read3 = document.querySelector(".read-more3");
let btm = document.getElementById("readMore");
let btm2 = document.getElementById("readMore2");
let btm3 = document.getElementById("readMore3");

btm.onmouseenter = function(){
   read.classList.add("sohaw-read-more");
};
btm.onmouseleave = function(){
   read.classList.remove("sohaw-read-more");
};
btm2.onmouseenter = function(){
   read2.classList.add("sohaw-read-more");
};
btm2.onmouseleave = function(){
   read2.classList.remove("sohaw-read-more");
};
btm3.onmouseenter = function(){
   read3.classList.add("sohaw-read-more");
};
btm3.onmouseleave = function(){
   read3.classList.remove("sohaw-read-more");
};
// footertest scroll1     1-295   2-595 3-175 4-


// let scrollX = window.onscroll =function(){
//     console.log(this.scrollX);
// }; 

let toTop =document.getElementById("top");

toTop.onclick = function(){
    window.scrollTo({
    top:0,
    behavior:"smooth",
    });

    };
    let windowWidth = window.innerWidth;
   if( windowWidth === 610){
      console.log("this is 610 width");
   };
    /*================ scroall reveaol =========================== */ 
    ScrollReveal({
       reset: true,
       distance: `90px`,
       duration:2000,
       delay:200
    });
    ScrollReveal().reveal(' .content-home h1,.image-home, .heading', { origin: `top`});
    ScrollReveal().reveal(' .cont-serv, .content-skills, .conact-me form', { origin: `bottom`});
    ScrollReveal().reveal(' .my-info', { origin: `left`});
    ScrollReveal().reveal('.cont-me-text', { origin: `right`});

     /*================ typed js =========================== */ 
     const typed = new Typed(`.multiple-text`, {
         strings: [ `Frontend Developer`, `student IT department`,`porgramming from south Yemen`],
         typeSpeed: 120,
         backSpeed: 100,
         backDelay: 1200,
         loop: true
     });
