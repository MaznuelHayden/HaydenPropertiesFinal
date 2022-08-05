const text1 = document.querySelector('.txt1')
const text2 = document.querySelector('.txt2')
const text3 = document.querySelector('.txt3')
const text4 = document.querySelector('.txt4')
const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const img3 = document.querySelector('.img3')
const img4 = document.querySelector('.img4')
const abouts = document.querySelectorAll('.about')
const ab1 = document.querySelector('.ab1')
const ab2 = document.querySelector('.ab2')
const ab3 = document.querySelector('.ab3')
const ab4 = document.querySelector('.ab4')


ScrollTrigger.matchMedia({
	
	// desktop
	"(min-width: 40em)": function() {
abouts.forEach((about) =>{
    gsap.to(about,{
        scale:0.8
    })
})

ScrollTrigger.create({
    trigger: text1,
   start: "top 50%",
   onEnter: about1,
   
})
ScrollTrigger.create({
    trigger: text2,
   start: "top 50%",
   onEnter: about2,
   
})
ScrollTrigger.create({
    trigger: text3,
   start: "top 50%",
   onEnter: about3,
   
})
ScrollTrigger.create({
    trigger: text4,
   start: "top 50%",
   onEnter: about4,
   
})



function about1(){
    gsap.to(ab1, {
        opacity:1,
        scale:1
    })
    gsap.to(text1, {
        x:0,
        opacity:1,
        duration:1
    })
    gsap.to(img1, {
        x:0,
        opacity:1,
        duration:1

    })
}
function about2(){
    gsap.to(ab2, {
        opacity:1,
        scale:1
    })
    gsap.to(text2, {
        x:0,
        opacity:1,
        duration:1
    })
    gsap.to(img2, {
        x:0,
        opacity:1,
        duration:1

    })
}
function about3(){
    gsap.to(ab3, {
        opacity:1,
        scale:1
    })
    gsap.to(text3, {
        x:0,
        opacity:1,
        duration:1
    })
    gsap.to(img3, {
        x:0,
        opacity:1,
        duration:1

    })
}
function about4(){
    gsap.to(ab4, {
        opacity:1,
        scale:1
    })
    gsap.to(text4, {
        x:0,
        opacity:1,
        duration:1
    })
    gsap.to(img4, {
        x:0,
        opacity:1,
        duration:1

    })
}
    }})
