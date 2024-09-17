// const { defaultConfiguration } = require("express/lib/application");



gsap.from("#product-best-sellers #best-product", {
    y: 70,
    duration: 0.7,
    stagger: 0.1,
    delay:0.2,
    scrollTrigger:{
        trigger:"#product-best-sellers #best-product",
        scroller:"body",
        // markers:true,
        start: "top 60%"
    }

})

gsap.from("#new-arrivals-sellers #best-product", {
    y: 70,
    duration: 0.7,
    stagger: 0.1,
    scrollTrigger:{
        trigger:"#new-arrivals-sellers #best-product",
        scroller:"body",
        // markers:true,
        start: "top 50%"
    }

})

gsap.from("#gift-sets-sellers #best-product", {
    y: 70,
    duration: 0.7,
    stagger: 0.1,
    scrollTrigger:{
        trigger:"#gift-sets-sellers #best-product",
        scroller:"body",
        // markers:true,
        start: "top 50%"
    }

})

gsap.from(".page-1-text h1", {
    y:30,
    duration:0.5,
    delay:1,
    opacity:0
    
})


// locomotive js is here --------------------->

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});