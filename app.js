const btn = document.querySelector(".hamburger");
const mobileview = document.querySelector(".mobile-view");
const navul = document.querySelector(".nav-ul");
const nav = document.querySelector("nav");
const rest = document.querySelector(".rest");
const icondown = document.querySelector(".icon-down");
const home = document.querySelector("#home");

btn.addEventListener("click", function () {
    btn.classList.toggle("hamburger-active");
    if (btn.classList.contains("hamburger-active")) {
        navul.style.visibility = "visible";
        nav.firstElementChild.classList.add("mobile-view");
        navul.className = "mobile-ul";
    }
    else{
        nav.firstElementChild.classList.remove("mobile-view");
        rest.firstElementChild.classList.add("nav-ul");
    } 
});
icondown.addEventListener("click", function(){

});
$('.about-cards').owlCarousel({
    loop:true,
    margin: 10,
    nav:false,
    autoplay: true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        500:{
            item:2
        },
        1000:{
            items:3
        },
        1100:{
            item:4
        },
        1150:{
            item:4
        }
    }
})
$('.port').owlCarousel({
    loop:true,
    margin: 10,
    nav:false,
    autoplay: true,
    dots:true,
    responsive:{
        0:{
            items:1
        }
    }
})
