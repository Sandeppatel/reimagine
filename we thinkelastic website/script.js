gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});

// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

const videoContainer = document.getElementById('video-container');
const introVideo = document.getElementById('intro-video');


var menu = document.querySelector(".menu");
var slide = document.querySelector(".slide");
var btn = document.querySelector(".btn");

btn.addEventListener("mouseover", function () {
    btn.classList.add("bg-white")
    btn.classList.add("text-red-500")
    btn.classList.remove("bg-red-500")
    btn.classList.remove("text-white")
})
btn.addEventListener("mouseout", function () {
    btn.classList.remove("bg-white")
    btn.classList.remove("text-red-500")
    btn.classList.add("bg-red-500")
    btn.classList.add("text-white")
})
menu.addEventListener("click", function () {
    slide.classList.add("left-[0%]");
    slide.classList.remove("left-[-100%]");
})
slide.addEventListener("click", function () {
    slide.classList.remove("left-[0%]");
    slide.classList.add("left-[-100%]");
})
var details = [
    { name: "find your car", }, { name: "click to buy", }, { name: "connect to services", }, { name: "hyundai story", }, { name: "mobility solutions", }, { name: "contact us", }]



function print() {
    var info = document.querySelector(".info")
    var container = ""
    details.forEach(function (details) {
        container += `<h1 class="hover:bg-black/20 p-1 flex justify-between mt-2 rounded-md px-2"> ${details.name}<i class=" ri-arrow-right-wide-line"></i></h1>
         <div class="h-[0.5px] mt-3 w-full bg-black"></div>`
    })
    document.querySelector(".info").innerHTML = container
}
print();



document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseover', function () {
            card.classList.add('enlarge');
            if (card.classList.contains('card1')) {
                document.querySelector('.card2').style.transform = 'translateX(20%)';
                document.querySelector('.card3').style.transform = 'translateX(20%)';
            } else if (card.classList.contains('card2')) {
                document.querySelector('.card1').style.transform = 'translateX(-20%)';
                document.querySelector('.card3').style.transform = 'translateX(20%)';
            } else if (card.classList.contains('card3')) {
                document.querySelector('.card1').style.transform = 'translateX(-20%)';
                document.querySelector('.card2').style.transform = 'translateX(-20%)';
            }
        });

        card.addEventListener('mouseleave', function () {
            card.classList.remove('enlarge');
            document.querySelectorAll('.card').forEach(c => {
                c.style.transform = 'translateX(0)';
            });
        });

        card.addEventListener('click', function () {
            card.classList.toggle('flipped');
        });
    });
});




//  page 4


//  page 5
var arr = [
    {images : "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name : "Get Your Car In" , palce : "Ahemdabad"},
    {images : "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name : "Get Your Car In" , palce : "Bangalore"},
    {images : "https://plus.unsplash.com/premium_photo-1676289157074-1afc4b1dfdea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name : "Get Your Car In" , palce : " Chennai "},
    {images : "https://images.unsplash.com/photo-1444084316824-dc26d6657664?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name : "Get Your Car In" , palce : " Delhi NCR "},
    {images : "https://images.unsplash.com/photo-1519010470956-6d877008eaa4?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name : "Get Your Car In" , palce : " Gurgaon "},
    {images : "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name : "Get Your Car In" , palce : " Hydrerabad "},
    {images : "https://images.unsplash.com/photo-1502899576159-f224dc2349fa?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name : "Get Your Car In" , palce : " Kolkata"},
    {images : "https://images.unsplash.com/photo-1512531123205-560f5974e686?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name : "Get Your Car In" , palce : " Mumbai "},
    {images : "https://images.unsplash.com/photo-1547841243-eacb14453cd9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name : "Get Your Car In" , palce : " New Delhi"},
    {images : "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name : "Get Your Car In" , palce : " Noida "},
   
]


var container = "";

arr.forEach((val)=>{
    container += `<div class="cards h-[280px] w-[240px] bg-zinc-100 shadow-2xl rounded-2xl flex flex-col items-center justify-center py-2 leading-none">
        <img class="h-[70%] w-[80%] bg-blue-400 rounded-full" src="${val.images}" alt="">
        <h3 class="pt-2 text-xs leading-none opacity-60 font-semibold">${val.name}</h3>
        <h1 class="font-semibold text-2xl leading-none">${val.palce}</h1>
       </div>`
       console.log(container);
})
document.querySelector(".cardcontainer").innerHTML = container ;





gsap.from(".mainone .cardcontainer", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".page4",
        start: "top 80%",
        end: "bottom top",
        scrub: true,
        scroller: "#main",
        markers : true,
    }
});

gsap.from(".page4 h1", {
    y: 10,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".page4",
        start: "top 80%",
        end: "bottom top",
        scrub: true,
        scroller: "#main",
        markers : true,
    }
});

