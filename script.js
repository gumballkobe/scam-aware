gsap.registerPlugin(ScrollTrigger)

gsap.from(".hero-content h1",{
y:100,
opacity:0,
duration:1.5
})

gsap.from(".hero-content p",{
y:40,
opacity:0,
delay:.5
})

gsap.utils.toArray(".section").forEach(section=>{

gsap.from(section,{
opacity:0,
y:100,
duration:1,
scrollTrigger:{
trigger:section,
start:"top 80%"
}
})

})

gsap.utils.toArray(".card").forEach(card=>{

gsap.from(card,{
scale:.8,
opacity:0,
duration:1,
scrollTrigger:{
trigger:card,
start:"top 90%"
}
})

})

window.addEventListener("scroll",()=>{

let scrollTop=document.documentElement.scrollTop
let height=document.documentElement.scrollHeight-document.documentElement.clientHeight

document.getElementById("progress").style.width=(scrollTop/height)*100+"%"

})
