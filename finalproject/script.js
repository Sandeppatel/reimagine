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

// scroll vala efect


var menu = document.querySelector(".menu");
var slide = document.querySelector(".slide");
var close = document.querySelector(".close")
var btn = document.querySelector(".btn")
var center = document.querySelector(".center")
var dets = document.querySelector(".slide .dets")



btn.addEventListener("mouseover", function () {
    btn.classList.add("bg-white")
    btn.classList.add("text-blue-500")
    btn.classList.remove("bg-blue-500")
    btn.classList.remove("text-white")
})
btn.addEventListener("mouseout", function () {
    btn.classList.remove("bg-white")
    btn.classList.remove("text-blue-500")
    btn.classList.add("bg-blue-500")
    btn.classList.add("text-white")
})

menu.addEventListener("click", function () {
    slide.classList.add("left-[0%]");
    slide.classList.remove("left-[-100%]");
})
close.addEventListener("click", function () {
    var clutter = " "
    slide.classList.remove("left-[0%]");
    slide.classList.add("left-[-100%]");
    dets.appendChild(information) = clutter; 
})
var details = [
    {
        name: "explore",
        info: [
            "Laptops",
            "Desktops",
            "Printers",
            "Monitors",
            "Accessories",
            "Support",
        ]
    },
    {
        name: "shop",
        info: [
            "Gaming Laptops",
            "Desktops",
            "premium laptop",
            "special laptop",
            "printer for home",
            "Ink & Toner",
            "Accessories",
        ]
    },
    {
        name: "support",
        info: [
            "Product Support",
            "Drivers and Software",
            "Troubleshooting",
            "User Guides",
            "Contact Support",
        ]
    },
    {
        name: "about us",
        info: [
            "Company Information",
            "Investor Relations",
            "Newsroom",
            "Sustainability",
        ]
    },
    {
        name: "contact us",
        info: [
            "Technical Support",
            "Sales and General Inquiries",
            "Product Assistance",
            "Customer Support",
        ]
    }
]
function print() {
    var info = document.querySelector(".info")
    var container = "";
    details.forEach(function (dets, index) {
        container += `<h1 id="${index}" class="hover:bg-black/20 p-1 flex justify-between mt-4 rounded-md px-2"> ${dets.name}<i class=" ri-arrow-right-wide-line"></i></h1>
      `
    })
    document.querySelector(".info").innerHTML = container
}
print()

slide.addEventListener("click", function (elem) {
    var num = elem.target.id
    var dets = document.querySelector(".dets")
      if(num  == '0'){
        details[elem.target.id].info.forEach(function(val){
          information = document.createElement("h1")
          information.textContent = val
          dets.appendChild(information)
        })
      }
      else if(num  == '1'){
        details[elem.target.id].info.forEach(function(val){
          information = document.createElement("h1")
          information.innerHTML = val
          dets.appendChild(information)
        })
      }
      else if(num  == '2'){
        details[elem.target.id].info.forEach(function(val){
          information = document.createElement("h1")
          information.innerHTML = val
          dets.appendChild(information)
        })
      }
      else if(num  == '3'){
        details[elem.target.id].info.forEach(function(val){
          information = document.createElement("h1")
          information.innerHTML = val
          dets.appendChild(information)
        })
      }
      else if(num  == '4'){
        details[elem.target.id].info.forEach(function(val){
          information = document.createElement("h1")
          information.innerHTML = val
          dets.appendChild(information)
          close.addEventListener("click", function (val) {
            slide.classList.remove("left-[0%]");
            slide.classList.add("left-[-100%]");
            information.innerHTML = val
            dets.removeChild(information) 
        })
        })
      }  
      
})


var tl = gsap.timeline()
tl.from(".nav",{
    y:-200,
    opacity : 0,
    duration :0.5,
    stagger : 1
})
tl.from(".middle img",{
    opacity : 0,
    duration :0.5,
    stagger : 1
})
tl.from(".middle .tagline",{
    x:-200,
    opacity : 0,
    duration :1,
    stagger : 1.5,
})
tl.to(".middle",{
        opacity:0,
        duration:1,
        stagger:1,
})
setTimeout(function(){
    center.classList.remove("hidden")
    tl.from(".center h1",{
        x:-200,
        opacity : 0,
        duration :0.5,
        stagger: 0.15,

    })
    
tl.from(".line h1", {
    y: 500,
    stagger: 0.25,
    duration: 0.5,
    //  delay : 0.5,

})
tl.from("#line1-part1, .line span",{
    opacity : 0 ,
    onStart : function() {
        var h5timer = document.querySelector("#line1-part1 h5")
    var grow = 0
    setInterval(() => {

        if (grow < 100) {

            grow++;
            h5timer.innerHTML = grow
        }
        else {

            h5timer.innerHTML = grow
        }
    }, 1);
    }
})

tl.to("#loader", {
    opacity : 0,
    duration : 0.5,
    delay : 0.1 ,
})
//  pag1 animation

tl.from("#page1", {
    y : 500,
    opacity: 0,
    duration:0.25,
    // delay : 0.2,
    // ease:power4,
})
tl.to("#loader",{
    display : "none",
})


tl.from("#page1 #nav-left", {
    y: -500,
    duration: 0.2,  // Duration per animation block
    stagger: 0.05,   // Stagger within each block to fit the duration
});

// Animate #nav-center h3
tl.from("#page1 #nav-center h3", {
    y: -500,
    duration: 0.25,
    stagger: 0.17,
}, "-=0.1");  // Adjust overlap timing

// Animate #nav-right h3
tl.from("#page1 #nav-right h3", {
    y: -500,
    duration: 0.25,
    stagger: 0.17,
}, "-=0.1"); 
tl.from("#page1 #text h1", {
    x : -900,
    duration: 0.25,
    stagger: 0.17,
}, "-=0.2"); 
tl.from("#page1 #text h4", {
    x : -900,
    duration: 0.25,
    stagger: 0.17,
}, "-=0.2"); 
tl.from("#page1 #text button", {
    x : -700,
    duration: 0.25,
    stagger: 0.17,
}, "-=0.2"); 
},500)




function automaticbanner() {
    var tm = gsap.timeline({
        repeat: -1 // Infinite loop
    });
    tm.to("#page1 .banner-img", {
        x: '-100%', // Use x property for GSAP translation
        duration: 1,
        ease: "power4",
    }, "+=3")
    .to("#page1 .banner-img", {
        x: '-200%',
        duration: 1,
        ease: "power4",
    }, "+=3")
    .to("#page1 .banner-img", {
        x: '-300%',
        duration: 1,
        ease: "power4",
    }, "+=3")
    .to("#page1 .banner-img", {
        x: '-400%',
        duration: 1,
        ease: "power4",
    }, "+=3")
    .to("#page1 .banner-img", {
        x: '-500%',
        duration: 1,
        ease: "power4",
    }, "+=3");
}

automaticbanner();



gsap.from("#page1 #text h1, #page1 #text h4", {
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        scroller: "#main",
        trigger: "#page1",
        start: "top 108%",
        end: "top 10%",
        scrub: true,
        // markers: true
    }
});
// var tl = gsap.timeline();





var page1 = document.querySelector("#page1");
var curcer = document.querySelector("#curcer");
page1.addEventListener("mousemove", function(event) {
    curcer.style.left = event.clientX + "px";
    curcer.style.top = event.clientY + "px";
});


// page2 work

gsap.to("#page2 #cards", {
    x: "-100%", // Move the cards to the left
    ease: "none",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        // markers: true,
        scrub: 2,
        start: "top top",
        end: "top -100%",
        pin: true,
        onUpdate: (self) => {
            if (self.progress === 1) {
                // Animation has completed, do something if needed
            }
        }
    }
});
gsap.to("#page2 #cardses", {
    x: "-100%",
    // duration : 2,
    ease: "none",

    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        // markers: true,
        scrub: true,
        start: "top -100",
        end: "top -100%",
        // pin: true,
       
    }
});
var arr = [
    {
        img: "./image-removebg-preview (1).png",
        modal: "HP Pavilion",
        description: "Affordable, versatile, everyday tasks",
        initialPrice: "$100",
        finalPrice: "$80",
    },
    {
        img: "./image-removebg-preview (2).png",
        modal: "HP Envy",
        description: "Premium, high performance, sleek",
        initialPrice: "$150",
        finalPrice: "$120",
    },
    {
        img: "./image-removebg-preview (3).png",
        modal: "HP Spectre",
        description: "Ultra-thin, stylish, convertible",
        initialPrice: "$200",
        finalPrice: "$160",
    },
    {
        img: "./image-removebg-preview (4).png",
        modal: "HP EliteBook",
        description: "Business, secure, durable",
        initialPrice: "$20",
        finalPrice: "$80",
    },
    {
        img: "./image-removebg-preview (5).png",
        modal: "HP ProBook",
        description: "Mid-range, business, balanced",
        initialPrice: "$100",
        finalPrice: "$80",
    },
    {
        img: "./image-removebg-preview (6).png",
        modal: "HP Omen",
        description: "Gaming, high-performance, advanced",
        initialPrice: "$150",
        finalPrice: "$120",
    },
    {
        img: "./image-removebg-preview (7).png",
        modal: "HP ZBook",
        description: "Workstation, powerful, professional",
        initialPrice: "$200",
        finalPrice: "$160",
    },
    {
        img: "./image-removebg-preview (8).png",
        modal: "HP Chromebook",
        description: "Lightweight, web-based, affordable",
        initialPrice: "$20",
        finalPrice: "$80",
    },
    {
        img: "./image-removebg-preview (9).png",
        modal: "HP Spectre x360",
        description: "Convertible, premium, touch",
        initialPrice: "$200",
        finalPrice: "$160",
    },
    {
        img: "./image-removebg-preview (10).png",
        modal: "HP Envy x360",
        description: "Convertible, powerful, stylish",
        initialPrice: "$20",
        finalPrice: "$80",
    },
];

 function page2() {
    
var container = "";
arr.forEach((val)=>{
   container += `
   <div id="card" class="text-xl font-semibold   rounded-2xl">
   
            <div id="img" class="h-[240px] w-[265px]   rounded-2xl overflow-hidden">
              <img  class="h-full w-full object-contain" src="${val.img}" alt="">
            </div>
            <h1 class=" mt-2">${val.modal}</h1>
            <h5 class=" hidden opacity-70  text-wrap">${val.description}</h5>
           <div id="paage2h1" class=" flex items-center justify-between w-[250px]  gap-20 ">
            <h1 class="mt-1 opacity-70 line-through">${val.initialPrice} </h1>
            <h1 class=" mt-1">${val.finalPrice}</h1>
           </div>
            <button class="mt-4 bg-white text-black h-[60px] w-[250px] rounded-full">show details <i class="ri-arrow-right-line"></i></button>
          </div>`
})

document.querySelector("#cards").innerHTML = container ;
 }
 page2();

var page2 =  document.querySelector("#page2");
var logo = document.querySelector("#logo");


page2.addEventListener("mousemove", function(even) {
    logo.style.left = even.clientX + "px";
    logo.style.top = even.clientY + "px";
});


 
 var add = [
    {
        imga : "./image-removebg-preview (11).png",
        modal : "HP Laserjet pro",
       discription : "A high-performance 2-in-1 laptop ",
        initial : "$999"   ,
    final : "$799",


    },

    {
        imga : "./image-removebg-preview (12).png",
        modal : "HP AMD all in ONE",
       discription : "A stylish and portable laptop .",
        initial : "$121",
    final : "$99",
    },
    
    {
        imga : "./image-removebg-preview (13).png",
        modal : "HP SSD",
       discription : "A gaming laptop with powerful graphics.",
        initial : "$100",
    final : "$51",
    },
    {
        imga : "./image-removebg-preview (14).png",
        modal : "HP Gaming Graphic Card",
       discription : "An ultra-light, high-performance business .",
        initial : "$200",
    final : "$121",

    },
    {
        imga : "./image-removebg-preview (15).png",
        modal : "HP Printer Ink",
       discription : "A high-performance 2-in-1 laptop ",
        initial : "$999"   ,
    final : "$799",


    },

    {
        imga : "./image-removebg-preview (16).png",
        modal : "HP Pen Drive",
       discription : "A stylish and portable laptop .",
        initial : "$121",
    final : "$99",
    },
    
    {
        imga : "./image-removebg-preview (17).png",
        modal : "HP 316 Printer",
       discription : "A gaming laptop with powerful graphics.",
        initial : "$100",
    final : "$51",
    },
    {
        imga : "./image-removebg-preview (18).png",
        modal : "HP Victus",
       discription : "An ultra-light, high-performance business .",
        initial : "$200",
    final : "$121",

    },
    {
        imga : "https://in-media.apjonlinecdn.com/catalog/product/cache/314dec89b3219941707ad62ccc90e585/h/p/hp_bluetooth_travel_mouse_frontview_2.png",
        modal : "HP Omen 15",
       discription : "A gaming laptop with powerful graphics.",
        initial : "$100",
    final : "$51",
    },
    {
        imga : "https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/h/p/hp-k100-wired-keyboard_high.png",
        modal : "HP Elite Dragonfly",
       discription : "An ultra-light, high-performance business .",
        initial : "$200",
    final : "$121",

    },
 ]
function page2buttom() {
    
 var count = "";
 add.forEach((elem)=>{
     count += `  <div id="buttom-cards" class="flex flex-col items-start justify-start pl-3 pt-2   text-xl  font-semibold  rounded-xl" >
               
           <div id="imag" class="h-[200px] w-[260px]  rounded-xl overflow-hidden">
            <img  class="h-full w-full object-cover" src="${elem.imga}" alt="">
           </div>
           <h1 class="">${elem.modal}</h1>
           <h5 class="hidden opacity-70 text-lg ">${elem.discription}</h5>
           <div id="textone" class="flex items-center justify-between h-[50px] w-[250px]">
             <h3 class="opacity-70 line-through">${elem.initial}</h3>
             <h3>${elem.final}</h3>
           </div>
           <button class=" mb-2 bg-white text-black h-[60px] w-[250px] rounded-full">show details</button>
          </div>`
 })
 document.querySelector("#cardses").innerHTML = count;
}
page2buttom();


// page3 

function printingtext() {
    var textElements = document.querySelectorAll("#page3 #text h4");

    textElements.forEach(function(element) {
        var words = element.textContent.split(' ');
        var wrappedWords = words.map(function(word) {
            return '<span>' + word + '</span>';
        }).join(' ');
        element.innerHTML = wrappedWords;
    });
}

printingtext();

gsap.registerPlugin(ScrollTrigger);

gsap.from("#page3 #text h4 span", {
    // y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        scroller: "#main",
        trigger: "#text",
        start: "top -170%",
        end: "top -220%",
        markers: true,
        scrub: true,
        pin: false,
    }
});


var added = [
    { imgas: "https://images.unsplash.com/photo-1543269664-7eef42226a21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Exclusive Student Store",
      discription: "Join now to get exclusive student discounts",
    },
    { imgas: "https://images.unsplash.com/photo-1531547255897-f400dc1b7de2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "HP for Business",
      discription: "Providing your business with the best value and solutions",
    },
    { imgas: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
      name: "HP Employee Purchase",
      discription: "Enjoy added benefits from 1st to 10th of every month",
    },
    { imgas: "https://plus.unsplash.com/premium_photo-1670071482180-747498494ca6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Corporate Employee Program",
      discription: "Log in with your Company .",
    },
];

var adds = "";
added.forEach((e) => {
    adds += `
    <div id="page5-card" class="h-[60vh] w-[20vw] bg-[#2F2F3A] rounded-2xl">
        <div id="imag" class="h-[40vh] w-full rounded-2xl overflow-hidden">
            <img data-scroll data-scroll-speed="1" class="h-full w-full object-cover" src="${e.imgas}" alt="">
        </div>
        <h2 class="text-xl font-semibold pl-4 mt-2">${e.name}</h2>
        <h5 class="text-md font-semibold opacity-70 pl-4 mt-1">${e.discription}</h5>
        <button data-scroll data-scroll-speed="0.2" class="py-2 px-6 rounded-full bg-black ml-4">Learn more</button>
    </div>`;
});

document.querySelector("#page5-cards").innerHTML = adds;


function page4buttom() {
    

var feture = [
    
    {
     name : "Loptop",
     imgas : "https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08252924-touch_3_1.png",
       
     price : "from : $121.00",
       
     },
     
     { 
         name : "Desktop",
         imgas : "https://au-files.apjonlinecdn.com/landingpages/content-pages/visid-rich-content/hp-aio-27-desktop/images/w100_product_highlight_v2.png",
      price: "from : $234.000",
     },
     {
         name : "printers",
          imgas : "https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/1/F/1F3Y2A-1_T1680351612.png",
     price: "from : $322.00",
 
     },
     { 
         name : "Accessories",
         imgas : "https://www.connection.com/media/5tsbp2me/638322-hp-showcase-3box-2-accessories.png?b=63939",
       price : "from : $567.000",
 
     },
     { 
         name : "lnk & Toner",
         imgas : "https://in-files.apjonlinecdn.com/landingpages/content-pages/hp-ink-toner-paper/images/image_paperhead_8.png",
       price : "from : $567.000",
 
     },
 ]   
 
 var card = "";
  feture.forEach((el)=>{
     card += `<div id="contain"  class="h-[25vh] w-[16vw] bg-[#2C3038] flex flex-col items-center justify-center gap-2  rounded-xl">
                 <h5 class=" text-lg font-semibold opacity-80">${el.name}</h5>
                 <div id="img1" class="h-[20vh] w-[14vw]  overflow-hidden">
                 <img data-scroll
         data-scroll-speed="1" class=" h-full w-full object-cover" src="${el.imgas}" alt="">
                 </div>
                 <h5 class="text-lg font-semibold opacity-80">${el.price}</h5>
                </div>`
  })
  document.querySelector("#page4-cards").innerHTML  = card ; 
}
page4buttom();