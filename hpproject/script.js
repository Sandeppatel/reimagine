gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
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
    { name: "find your car", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS39CiTRtuC05a0oBGaoDQJZ-XQzeZqBs_LlA&s"}, { name: "click to buy", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7YgRT1GJ_HrRevrPgluQcJy_CXnzW5GTl0Uj1PXLUboNKvLPuJrNszsK_oOKD-oC_Too&usqp=CAU"}, { name: "connect to services", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS39CiTRtuC05a0oBGaoDQJZ-XQzeZqBs_LlA&s" }, { name: "hyundai story", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRay41OmRfO5Z5qz3Csg8sAYFmqgo6xDr5GM483JOSl0lkCReBT_Bxtd5NadkClHriItJE&usqp=CAU"}, { name: "mobility solutions", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzCGoaCuLeawzVfD7cF0WSRfPIwXdJrM30FA&s" }, { name: "contact us", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpIWH9BOOiSMe6CaNBkaDwxgZwRoVV4flZyw&s" }]



function print() {
    var info = document.querySelector(".info")
    var container = ""
    details.forEach(function (details) {
        container += `<h1 class="hover:bg-black/20 p-1 flex items-center justify-between  mt-2 rounded-md px-2"> ${details.name}<i class=" ri-arrow-right-wide-line"></i>  <img src="${details.image}" alt=""></h1>
         <div class="h-[0.5px] mt-3 w-full bg-black "></div> `
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


var main = document.querySelector(".main");
var curser = document.querySelector("#circle-one");



main.addEventListener("mousemove", function(dets) {
    curser.style.left = dets.clientX + "px";
    curser.style.top = dets.clientY + "px";
});


var laptop  = document.querySelector("#laptop").textContent
var one = laptop.split("");
var container = "";
one.forEach((val)=>{
   container += `<span>${val}</span>`;
})
document.querySelector("#laptop").innerHTML = container ;

gsap.to("#laptop span" , {
    scale : 0.5,
    y : -1000,

    color : "#FFC83E",
    stagger : 0.3,
    scrollTrigger : {
        scroller : "#main",
        trigger : "#laptop",
        // markers : true,
        start : "top 20%",
        end : "top -30%",
        scrub : 2 ,
    }
})
var tl = gsap.timeline();
tl.from("#laptop" , {
    y : 1000,
    stagger : 0.1 ,
    opacity : 0,
    duration : 0.5,
   
})
tl.from(".middle" , {
    x : -1000,
    stagger : 0.1 ,
    opacity : 0,
    duration : 0.5,
   
})
gsap.to(".main img" , {
    scale : 1.5,
    stagger : 0.1,
    scrollTrigger : {
        scroller : "#main",
        trigger : "img",
        // markers : true,
        start : "top 10%",
        end : "top -60%",
        scrub : 3 ,
    }
})



//  page2 

gsap.to("#page2-one " , {
     width : "100%",
    stagger : 0.1,
    scrollTrigger : {
        scroller : "#main",
        trigger : "#page2-one",
        // markers : true,
        start : "top 80%",
        end : "top 0%",
        scrub : 3 ,
    }
})

gsap.to("#intro-video", {
    // scale: 1.2, // Example: Scale the video by 1.2
    width : "100%",
    scrollTrigger: {
        trigger: "#page2-one",
        start: "top 90%", // Start the animation when the top of the video is 80% in view
        end: "top 50%", // End the animation when the top of the video is 20% in view
        scrub: true, // Smoothly animate the scale of the video
        // markers: true // Display ScrollTrigger markers for debugging
    }
});



var page2 = document.querySelector("#page2");
var curcer = document.querySelector("#curcer");



page2.addEventListener("mousemove", function(event) {
    curcer.style.left = event.clientX + "px";
    curcer.style.top = event.clientY + "px";
});


//  page 3 
function printingtext() {
    var textElements = document.querySelectorAll("#page3 #text h1");

    textElements.forEach(function(element) {
        var words = element.textContent.split(' ');
        var wrappedWords = words.map(function(word) {
            return '<span>' + word + '</span>';
        }).join(' ');
        element.innerHTML = wrappedWords;
    });
}

printingtext();

// gsap.registerPlugin(ScrollTrigger);

gsap.from("#text span", {
    y: 1000, 
    opacity: 0,
    color: "#FFC83E", // Initial color
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        scroller: "#main",
        trigger: "#text",
        start: "top 80%",
        end: "top 10%",
        markers: true,
        scrub: true,
    }
});

gsap.to("#text span", {
    color: "white", // Final color
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        scroller: "#main",
        trigger: "#text",
        start: "top 80%",
        end: "top 10%",
        markers: true,
        scrub: true,
    }
});



//  page 5
function page5one() {
    
var arr = [
    {  images : "https://i.gadgets360cdn.com/large/hp-omen-transcend-14-review_main_1712054543536.jpg",  name : "Transcend 14-FB0089TX" , firstprice : "-60% of" , final : " final : $121"},
    { images : "https://www.reliancedigital.in/medias/HP-EF2035TU-Laptops-493838394-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1OTA1MXxpbWFnZS9qcGVnfGltYWdlcy9oODYvaGY5LzEwMDc3NTk1MDQxODIyLmpwZ3wwYzc2YTYzZjU3NzAwZTU2NjU5N2Y1ZmRkOGFkNTE3NDM0M2JkOGE0ZDJlOGZiNWNhMGFjMjFmZGNlMmM1MmFj",  name : "HP Spectre x360 14" , firstprice : "-60% of" , final : " final : $121"},
    { images : "https://s.yimg.com/ny/api/res/1.2/ohQavNb4cPn6p6.DUOKQnA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDg-/https://s.yimg.com/os/creatr-uploaded-images/2022-02/4c84e640-8dc3-11ec-9eef-cc136156c77e",  name : "HP Spectre x360 16" , firstprice : "-60% of" , final : " final : $121"},
    { images : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStsr_mlpku4bHZcgPXQyiW0Y7zsDhFwZ_IEQ&s",  name : "HP Pavilion Plus 16" , firstprice : "-60% of" , final : " final : $121"},
    { images : "https://media.istockphoto.com/id/1492821856/photo/modern-vintage-dark-workspace-with-portable-tablet-mockup-on-a-wooden-desk.jpg?s=2048x2048&w=is&k=20&c=J-X3r1WF5RmZa9R9soUJsPbrpVayvb1HOtHwq3vWojQ=",  name : "HP Pavilion Plus 16" , firstprice : "-60% of" , final : " final : $121"},
]

var container = "";

arr.forEach((val)=>{
  container += ` <div id="cards-one" class=" h-[45vh] w-[15vw] bg-[#71717A] text-white showdo-2xl rounded-2xl p-3">
                 <div id="card" class=" h-[240px] w-[265px]  rounded-2xl overflow-hidden">
                  <img data-scroll data-scroll-speed="0.5"  class="h-full w-full object-cover " src="${val.images}" alt="">
                </div>
                <h3 class="text-lg font-medium mt-1 pl-2">${val.name}</h3>
                <h3 class="text-lg font-medium mt-1 pl-2 opacity-50">${val.firstprice}</h3>
                <h3 class="text-lg font-medium mt-1 pl-2">${val.final}</h3>
                <button data-scroll data-scroll-speed="0.2" class="text-lg bg-[#FFC83E] font-medium mt-1 pl-2 py-2 px-6 border-2 border-block rounded-full"> VIEW DITAILSE</button>
             
          </div>`
})
document.querySelector("#page5-one").innerHTML = container ;
}
page5one();



function pagg5two() {
    
var numearr = [
    {  imag : "https://media.istockphoto.com/id/1422234821/photo/school-supply-still-life-stock-photo.jpg?s=2048x2048&w=is&k=20&c=l0TsfkADWIP5pE27qUAiZE0AQex72txxf5ynT1YspkE=",  names : "Transcend 14-FB0089TX" , first : "-60% of" , finalp : " final : $121"},
    {  imag : "https://media.istockphoto.com/id/664712890/photo/group-of-multicolored-office-folders-and-glasses.jpg?s=2048x2048&w=is&k=20&c=rLF0qQZzj6B15_iP74zH1CEe6NVyC2d14E7O4N844bc=",  names : "Transcend 14-FB0089TX" , first : "-60% of" , finalp : " final : $121"},
    {  imag : "https://plus.unsplash.com/premium_photo-1681666713728-9ed75e148617?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8",  names : "Transcend 14-FB0089TX" , first : "-60% of" , finalp : " final : $121"},
    {  imag : "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",  names : "Transcend 14-FB0089TX" , first : "-60% of" , finalp : " final : $121"},
    {  imag : "https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",  names : "Transcend 14-FB0089TX" , first : "-60% of" , finalp : " final : $121"},
 
 ]
 var count = "";
 
 numearr.forEach((valu )=>{
   count += ` <div id="cards-one" class=" h-[45vh] w-[15vw] bg-[#71717A] text-white showdo-2xl rounded-2xl p-3">
             <div id="card" class=" h-[240px] w-[265px]  rounded-2xl overflow-hidden">
              <img data-scroll data-scroll-speed="0.5" class="h-full w-full object-cover " src="${valu.imag}" alt="">
            </div>
            <h3 class="text-lg font-medium mt-1 pl-2">${valu.names}</h3>
            <h3 class="text-lg font-medium mt-1 pl-2 opacity-50">${valu.first}</h3>
            <h3 class="text-lg font-medium mt-1 pl-2">${valu.finalp}</h3>
            <button data-scroll data-scroll-speed="0.2" class="text-lg bg-[#FFC83E] font-medium mt-1 pl-2 py-2 px-6 border-2 border-block rounded-full"> VIEW DITAILSE</button>
         
           </div>`
 })
 document.querySelector("#page5-two").innerHTML = count;
}
pagg5two();