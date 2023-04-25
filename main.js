let radio = 80; 
let lado = radio * (130 / 55);
let ancho_img = lado * (120 / 237);



let porcen_c = {

    "1":90, //Porcentaje habilidad HTML
    "2":80, //Porcentaje habilidad Css
    "3":85, //Porcentaje habilidad JS
    "4":75, //Porcentaje habilidad PHP
    "5":70, //Porcentaje habilidad MySql
    "6":60  //Porcentaje habilidad Laravel
};
let color_porcen={
    "1": "#E44D25", //color habilidad HTML
    "2": "#13a0dd", //color habilidad Css
    "3": "#fedd20", //color habilidad JS
    "4": "#6c7eb7", //color habilidad PHP
    "5": "#e48c02", //color habilidad MySql
    "6": "#fb7770"  //color habilidad Laravel
};

let trabajos=[
    {
        "titulo":"CRUD",
        
        "descripcion":`Aplicacion desarrollada con Laravel. Permite registrar, actualizar, 
        borrar y visualizar la informacion de una persona. Utiliza MySql como 
        gestor de base de datos y la versión 10 de Laravel.`,
        
        "video":"assets/video/crud.mp4",
        "github":"",
        "imagen":"assets/trabajos/crud.png",
    },
    {
        "titulo":"CONSTRUCTORA",
        
        "descripcion":`Sitio web hecho con HTML, Css y JavaScript puros.`,
        
        "video":"assets/video/promina.mp4",
        "github":"",
        "imagen":"assets/trabajos/logo-dark.png",
    },
    {
        "titulo":"App del Clima",
        
        "descripcion":`Muestra el pronostico del clima. 
        Consume una Api de la que extrae la información.
        Sitio web hecho con HTML, Css y JavaScript puros.`,
        
        "video":"assets/video/clima.mp4",
        "github":"https://github.com/Karl-Espindola/clima.git",
        "imagen":"assets/trabajos/clima.jpg",
    },
    {
        "titulo":"Pokedex",
        
        "descripcion":`Buscador de Pokemons. Consume una Api de la que extrae la información.
        Sitio web hecho con HTML, Css y JavaScript puros.`,
        
        "video":"assets/video/",
        "github":"https://github.com/Karl-Espindola/pokedex.git",
        "imagen":"assets/trabajos/pokemon.jpg",
    },
    {
        "titulo":"DASHBOARD",
        
        "descripcion":`Página sencilla Dashboard
        Sitio web hecho con HTML, Css y JavaScript puros.`,
        
        "video":"assets/video/dashboard.mp4",
        "github":"",
        "imagen":"assets/trabajos/graficas.jpg",
    }
];

let text_porcen = document.getElementsByClassName("num-porcen");

let porta=document.getElementById("portafolio");
let seccionPortafolio=document.getElementById("conte_portafolio");
let acerca=document.getElementById("acerca");
let seccionAcerca=document.getElementById("conte_acerca");
let habil=document.getElementById("habil");
let seccionHabilidades=document.getElementById("conte_habilidades");
let contacto=document.getElementById("contacto");
let seccionContacto=document.getElementById("conte_contacto");
let cv=document.getElementById("cv");
let chevronUp=document.getElementById("chevronUp");
let chevronRight=document.getElementById("chevronRight");
let chevronLeft=document.getElementById("chevronLeft");
let chevronown=document.getElementById("chevronDown");
let svg_circles = document.getElementsByClassName("svg-circles");
let circulos = document.getElementsByTagName("circle");


let circle = document.getElementsByClassName("circle");
let img_habilidades = document.getElementsByClassName("img-habilidades");

let contenedor_video = document.getElementById("contenedor_video");
let video_demo = document.getElementById("video_demo");
let cerrar = document.getElementById("svg8");
cerrar.addEventListener("click", cerrarVideo);

function cerrarVideo(){
    contenedor_video.style.display="none";
}

function videoDemo(src){
    video_demo.innerHTML= "<video src="+src+" autoplay='true' muted='true' loop='true' class='video'></video>";
    contenedor_video.style.display="flex";
    console.log(contenedor_video);
}


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
habil.addEventListener("click",function(){
    seccionHabilidades.classList.remove("ocultar");
    setTimeout(() => {
        seccionHabilidades.setAttribute("style","top:0");
    }, 1);
    animacionPorcentaje();
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
});
chevronDown.addEventListener("click",function(){
    seccionHabilidades.setAttribute("style","bottom:-100%");
    setTimeout(() => {
        seccionHabilidades.classList.add("ocultar");
    }, 500);
});





for(let svg_c of svg_circles){
    svg_c.setAttribute("style", "width:"+lado+"; height:"+lado);
}
for(let circulo of circulos){
    circulo.setAttribute("r", radio);
}
for (let img of img_habilidades){
    img.setAttribute("style", 
    "width:"+ancho_img+"px; top: calc(45% - "+ancho_img/2+"px); left: calc(50% - "+ancho_img/2+"px)");
}


function animacionPorcentaje(){
    let bucle = true;
    let porcen = new Array(circle.length);
    let porcenLimit = new Array(circle.length);
    porcen.fill(0);
    porcenLimit.fill(false);
    
    let timerId = setInterval(()=>{
        for(let i=0; i<circle.length; i++){
            porcen[i] < porcen_c[i+1] ? porcen[i]++ : porcenLimit[i] = true;
            circle[i].setAttribute("style", "stroke-dasharray: "+porcen[i]+" "+(100 - porcen[i])+"; stroke:"+color_porcen[i+1]+"");
            text_porcen[i].innerHTML = porcen[i]+"%";
        }
        const even = (element) => element == false;
        bucle = porcenLimit.some(even)
        console.log(bucle);
        if(!bucle){
            clearTimeout(timerId);
        }
        
    },25);
    
   
}

// animacionPorcentaje();


let contenedor_trabajos = document.querySelector(".contenedor-trabajos");

for(let i=0; i<trabajos.length; i++){

    let con_trabajo = document.createElement("div");
    let con_imagen = document.createElement("img");
    let con_titulo = document.createElement("h2");
    let con_descripcion = document.createElement("p");
    let con_links = document.createElement("div");
    let con_link_git = document.createElement("a");
    let con_ver_demo = document.createElement("p");
    let div_bg = document.createElement("div");
    
    let tex_titulo = document.createTextNode(trabajos[i].titulo);
    let tex_descripcion = document.createTextNode(trabajos[i].descripcion);
    let text_link_git = document.createTextNode("Repositorio en GitHub");
    let text_ver_demo = document.createTextNode("Ver Demo");
    
    
    con_trabajo.appendChild(con_imagen);
    con_trabajo.appendChild(con_titulo);
    con_trabajo.appendChild(con_links);
    con_trabajo.appendChild(con_descripcion);
    con_trabajo.appendChild(div_bg);
    contenedor_trabajos.appendChild(con_trabajo);
    
    con_titulo.appendChild(tex_titulo);
    con_links.appendChild(con_link_git);
    con_link_git.appendChild(text_link_git);
    con_links.appendChild(con_ver_demo);
    con_ver_demo.appendChild(text_ver_demo);
    

    con_descripcion.appendChild(tex_descripcion);
    con_imagen.src = trabajos[i].imagen;
    con_link_git.href = trabajos[i].github;
    con_link_git.target = "_blank"
    con_ver_demo.id="v"+i;
    con_ver_demo.addEventListener("click", () => videoDemo(trabajos[i].video))

    con_imagen.classList.add("img-trabajo");
    con_trabajo.classList.add("un-trabajo");
    con_titulo.classList.add("titulo-trabajo");
    con_descripcion.classList.add("descrip-trabajo");
    div_bg.classList.add("div-bg");
    con_link_git.classList.add("link");
    con_ver_demo.classList.add("link-demo");
}


