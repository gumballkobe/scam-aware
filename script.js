gsap.registerPlugin(ScrollTrigger)

gsap.from(".hero h1",{
y:100,
opacity:0,
duration:1.5
})

gsap.to("#wavePath",{
scrollTrigger:{
trigger:".hero",
start:"bottom bottom",
end:"+=400",
scrub:true
},
attr:{
d:"M0,96L80,128C160,160,320,224,480,224C640,224,800,160,960,128C1120,96,1280,96,1360,112L1440,128V320H0Z"
}
})


gsap.utils.toArray("section").forEach(section=>{

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


document.querySelectorAll(".counter").forEach(counter=>{

let target=+counter.dataset.target

let update=()=>{

let current=+counter.innerText

let inc=target/200

if(current<target){

counter.innerText=Math.ceil(current+inc)

setTimeout(update,10)

}else{

counter.innerText=target

}

}

update()

})


window.addEventListener("scroll",()=>{

let scrollTop=document.documentElement.scrollTop

let height=document.documentElement.scrollHeight-document.documentElement.clientHeight

document.getElementById("progress").style.width=(scrollTop/height)*100+"%"

})
