var crsr = document.querySelector(".cursor")
var blur = document.querySelector(".cursor-blur")


document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px" 
    blur.style.left = dets.x - 150 +"px"
    blur.style.top = dets.y - 150 +"px" 

})

// document.addEventListener("mousemove",function(dets){
//     blur.style.left = dets.x+"px"
//     blur.style.top = dets.y+"px" 
// })

var h4all = document.querySelectorAll(".navbar h4");

h4all.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        crsr.style.scale = 3
        crsr.style.border = "0.1px solid #fff"
        crsr.style.color = "#000"
        crsr.style.backgroundColor = 'transparent'
    })
    e.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = '#95C11E'
    })
})
    



gsap.to(".navbar",{
    backgroundColor: "#000",
    height:"80px",
    duration:0.5,
    scrollTrigger:{
        trigger:".navbar",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from(".about-us img,.about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 58%",
        scrub:1
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from("#colon1", {
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:'top 55%',
        end:"top 45%",
        scrub:1
    }
})

gsap.from("#colon2", {
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        // markers:true,
        start:'top 55%',
        end:"top 45%",
        scrub:1
    }
})

gsap.from(".page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:".page4 h1",
        scroller:"body",
        // markers:true,
        start:'top 75%',
        end:"top 70%",
        scrub:3
    }
})



// var h4 = document.querySelectorAll(".f2 h4");
// h4.forEach(function(e){
//     e.addEventListener("mouseenter", function(){
//         crsr.style.scale = 3
//         crsr.style.border = "0.1px solid #fff"
//         crsr.style.backgroundColor = 'transparent'
//     })
//     e.addEventListener("mouseleave", function(){
//         crsr.style.scale = 1
//         crsr.style.border = "0px solid #95C11E"
//         crsr.style.backgroundColor = '#95C11E'
//     })
// })