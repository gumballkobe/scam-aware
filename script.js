gsap.registerPlugin(ScrollTrigger)

gsap.from(".hero h1",{
y:80,
opacity:0,
duration:1.5
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

gsap.utils.toArray(".timeline-item").forEach(item=>{

gsap.from(item,{
x:-120,
opacity:0,
duration:1,
scrollTrigger:{
trigger:item,
start:"top 85%"
}
})

})

gsap.utils.toArray(".fake-site").forEach(site=>{

gsap.from(site,{
scale:.8,
opacity:0,
duration:1,
scrollTrigger:{
trigger:site,
start:"top 85%"
}
})

})
