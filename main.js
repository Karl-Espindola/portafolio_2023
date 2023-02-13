let porta=document.getElementById("portafolio");
let seccionPortafolio=document.getElementById("conte_portafolio");
let acerca=document.getElementById("acerca");
let seccionAcerca=document.getElementById("conte_acerca");
let habil=document.getElementById("habil");
let contacto=document.getElementById("contacto");
let seccionContacto=document.getElementById("conte_contacto");
let cv=document.getElementById("cv");
let chevronUp=document.getElementById("chevronUp");
let chevronRight=document.getElementById("chevronRight");
let chevronLeft=document.getElementById("chevronLeft");

porta.addEventListener("click",function(){
    seccionPortafolio.classList.remove("ocultar");
    setTimeout(() => {
        seccionPortafolio.setAttribute("style","left:0");
    }, 1);
});
acerca.addEventListener("click",function(){
    seccionAcerca.classList.remove("ocultar");
    setTimeout(() => {
        seccionAcerca.setAttribute("style","top:0");
    }, 1);
});
contacto.addEventListener("click",function(){
    seccionContacto.classList.remove("ocultar");
    setTimeout(() => {
        seccionContacto.setAttribute("style","right:0");
    }, 1);
});
chevronUp.addEventListener("click",function(){
    seccionAcerca.setAttribute("style","top:-100%");
    setTimeout(() => {
        seccionAcerca.classList.add("ocultar");
    }, 500);
});
chevronRight.addEventListener("click",function(){
    seccionPortafolio.setAttribute("style","left:-100%");
    setTimeout(() => {
        seccionPortafolio.classList.add("ocultar");
    }, 500);
});
chevronLeft.addEventListener("click",function(){
    seccionContacto.setAttribute("style","right:-100%");
    setTimeout(() => {
        seccionContacto.classList.add("ocultar");
    }, 500);

})


