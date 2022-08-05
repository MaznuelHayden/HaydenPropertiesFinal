
//COUNTERS
const years = document.querySelector('#years')
const properties = document.querySelector('#properties')
const family = document.querySelector('#family')
//HOME 
const home = document.querySelector('.modern-image')
const investment = document.querySelector('.investment')
const description = document.querySelector('.modern-description')
const button = document.querySelector('.modern-btn')
//CARDS
const cards = document.querySelector(".cards");
const Cards = document.querySelectorAll(".card");
const textDiv = document.querySelector(".videoText")
//VIDEO SECTION
const ceo = document.querySelector(".ceo")
const ps = document.querySelectorAll(".p")
const p1 = document.querySelector(".p1")
const p2 = document.querySelector(".p2")
const p3 = document.querySelector(".p3")
const phrase = document.querySelector(".phrase")
//CONTACT AND FOOTER
const contactUsDiv = document.querySelector('.contact-us')
const formContainer = document.querySelector('.form-container')
const footer = document.querySelector('.footer')
const f = document.querySelector('.f')
//PHOTO GRID
const photo = document.querySelector('.photo')
const ph1 = document.querySelectorAll(".div1")
const ph2 = document.querySelectorAll(".div2")
const ph3 = document.querySelectorAll(".div3")
const ph4 = document.querySelectorAll(".div4")
const ph5 = document.querySelectorAll(".div5")
const func = document.querySelector(".func")
//CARDS PHOTO
const icon1 = document.querySelector(".icon1")
const icon2 = document.querySelector(".icon2")
const icon3 = document.querySelector(".icon3")
const CPtext1 = document.querySelector(".CPtext1")
const CPtext2 = document.querySelector(".CPtext2")
const CPtext3 = document.querySelector(".CPtext3")






Cards.forEach(card =>{
    gsap.to(card,{
        opacity:0,
        scale:0.8,
    })
})

ScrollTrigger.create({
    trigger: icon1,
   start: "top 500px",
   onEnter: carding,
})

let helper = 1


ps.forEach(p =>{
    gsap.to(p,{
        opacity:0,
    })
})

gsap.to(f,{
    height:0
})
gsap.to(textDiv,{
    x:-700
})
gsap.to(ceo,{
    x:-700
})
gsap.to(phrase,{
    opacity:0,
})


ScrollTrigger.create({
         trigger: cards,
        start: "top 500px",
        onEnter: addTimeline,
        
})
ScrollTrigger.create({
         trigger: textDiv,
        start: "top 500px",
        onEnter: videoAnimation,
        
})


function videoAnimation(){

    const tl = gsap.timeline()
        tl.to(textDiv,{
            x:0,
            duration:1,
            ease: "power4.out"
        })
        tl.delay(1)
        tl.to(ceo,{
            x:0,
            duration:0.5
        })
        tl.to(p1,{
            opacity:1,
            duration:0.3
        })
        tl.to(p2,{
            opacity:1,
            duration:0.3
        })
        tl.to(p3,{
            opacity:1,
            duration:0.3
        })
        tl.to(phrase,{
            opacity:1,
            duration:0.3
        })
    
}


function addTimeline() {
    if(helper< 2){

const tlc = gsap.timeline()
tlc.to(".one",
 {
     opacity:1,
     scale:1,
     duration: 0.3,
})
tlc.to(".two",
{
    opacity:1,
    scale:1,
    duration: 0.3,
})
tlc.to(".three",
 {
     opacity:1,
     scale:1,
     duration: 0.3
})
tlc.from('.cards',
{
    y:-180,
    duration:1,
})
tlc.to('.whyus',{
    x: 0,
    duration:0.3,
})
tlc.to('.hayden-description',{
    x: 0,
    duration:0.3,
})
    helper++
    }
    }


gsap.to( years,{
    scrollTrigger:{
         trigger: years,
        start: "top 550px",
        onEnter: increaseYears,
    }
})








  
function increaseYears(){
    setInterval(()=>{
        if(years.innerHTML < 201){
        years.innerHTML++
        if(years.innerHTML == 201){
            gsap.to(years,{
                scale:1.2,
                ease: Elastic.easeOut,
                duration:1
            })
        }
    }
},1)

setInterval(()=>{
    if(properties.innerHTML < 22){
        properties.innerHTML++
        if(properties.innerHTML == 22){
            gsap.to(properties,{
                scale:1.2,
                ease: Elastic.easeOut,
                duration:1
            })
        }
    }
},60)

setInterval(()=>{
    if(family.innerHTML < 78){
        family.innerHTML++
        if(family.innerHTML == 78){
            gsap.to(family,{
                scale:1.2,
                ease: Elastic.easeOut,
                duration:1
            })
        }
    }
},20)


}



setInterval(()=>{
    phAnimation()
}, 8000)


let i = 1
function phAnimation(){
    let tl = gsap.timeline()
   if(i == 1){
    tl.to(ph1,{
        scale:0,
        opacity:0,
        duration:0.2,
        backgroundImage:`url(./photos/img11.jpg)`
    })
    tl.to(ph4,{
        scale:0,
        opacity:0,
        duration:0.2,  
        backgroundImage:`url(./photos/img44.jpg)`
      })
    tl.to(ph2,{
        scale:0,
        opacity:0,
        duration:0.2,     
        backgroundImage:`url(./photos/img22.jpg)`
       })
    tl.to(ph3,{
        scale:0,
        opacity:0,
        duration:0.2,   
        backgroundImage:`url(./photos/img33.jpg)`  
       })
    tl.to(ph5,{
        scale:0,
        opacity:0,
        duration:0.2,  
        backgroundImage:`url(./photos/img55.jpg)`   
       })
    tl.to(ph1,{
        scale:1,
        opacity:1,
        duration:0.2,  
      })
    tl.to(ph4,{
        scale:1,
        opacity:1,
        duration:0.2,

     })
    tl.to(ph2,{
        scale:1,
        opacity:1,
        duration:0.2 ,  
     })
    tl.to(ph3,{
        scale:1,
        opacity:1,
        duration:0.2,
     })
    tl.to(ph5,{
        scale:1,
        opacity:1,
        duration:0.2,  
     })
     i = 2
    }
   else if(i ==2){
        tl.to(ph1,{
            scale:0,
            opacity:0,
            duration:0.2,
            backgroundImage:`url(./photos/img1.jpg)`
        })
        tl.to(ph4,{
            scale:0,
            opacity:0,
            duration:0.2,  
            backgroundImage:`url(./photos/img4.jpg)`
          })
        tl.to(ph2,{
            scale:0,
            opacity:0,
            duration:0.2,     
            backgroundImage:`url(./photos/img2.jpg)`
           })
        tl.to(ph3,{
            scale:0,
            opacity:0,
            duration:0.2,   
            backgroundImage:`url(./photos/img3.jpg)`  
           })
        tl.to(ph5,{
            scale:0,
            opacity:0,
            duration:0.2,  
            backgroundImage:`url(./photos/img5.jpg)`   
           })
        tl.to(ph1,{
            scale:1,
            opacity:1,
            duration:0.2,  
          })
        tl.to(ph4,{
            scale:1,
            opacity:1,
            duration:0.2,
    
         })
        tl.to(ph2,{
            scale:1,
            opacity:1,
            duration:0.2 ,  
         })
        tl.to(ph3,{
            scale:1,
            opacity:1,
            duration:0.2,
         })
        tl.to(ph5,{
            scale:1,
            opacity:1,
            duration:0.2,  
         })  
         i = 3
    }
   else if(i ==3){
        tl.to(ph1,{
            scale:0,
            opacity:0,
            duration:0.2,
            backgroundImage:`url(./photos/img111.jpg)`
        })
        tl.to(ph4,{
            scale:0,
            opacity:0,
            duration:0.2,  
            backgroundImage:`url(./photos/img444.jpg)`
          })
        tl.to(ph2,{
            scale:0,
            opacity:0,
            duration:0.2,     
            backgroundImage:`url(./photos/img222.jpg)`
           })
        tl.to(ph3,{
            scale:0,
            opacity:0,
            duration:0.2,   
            backgroundImage:`url(./photos/img333.jpg)`  
           })
        tl.to(ph5,{
            scale:0,
            opacity:0,
            duration:0.2,  
            backgroundImage:`url(./photos/img555.jpg)`   
           })
        tl.to(ph1,{
            scale:1,
            opacity:1,
            duration:0.2,  
          })
        tl.to(ph4,{
            scale:1,
            opacity:1,
            duration:0.2,
    
         })
        tl.to(ph2,{
            scale:1,
            opacity:1,
            duration:0.2 ,  
         })
        tl.to(ph3,{
            scale:1,
            opacity:1,
            duration:0.2,
         })
        tl.to(ph5,{
            scale:1,
            opacity:1,
            duration:0.2,  
         })  
         i = 1
    }
}


function carding(){
    const tl = gsap.timeline()
    tl.to(icon1, {
        x:0,
        opacity:1
    })
    tl.to(CPtext1, {
        x:0,
        opacity:1
    })
    tl.to(icon2, {
        x:0,
        opacity:1
    })
    tl.to(CPtext2, {
        x:0,
        opacity:1
    })
    tl.to(icon3, {
        x:0,
        opacity:1
    })
    tl.to(CPtext3, {
        x:0,
        opacity:1
    })
}


console.log("Developed by Manuel Gonzalez https://github.com/Maznuel")




