
var typed = new Typed(".auto-type", {
    strings: ["Learning, Innovating and Developing!"],
    typeSpeed: 100,
    loop: false
});


const cursor=document.querySelector('.cursor');

document.addEventListener('mousemove',mouse =>{
    cursor.setAttribute("style","top:"+(mouse.pageY -15)+"px; left:"+(mouse.pageX-15)+"px;")
})
document.addEventListener('hover',mouse =>{
    cursor.setAttribute("style","top:"+(mouse.pageY -15)+"px; left:"+(mouse.pageX-15)+"px;")
})

