function seccionar(e){
    let i=0;
    for(let opc of arr_opc){
        console.log(opc);
        console.log(e.target);
        if(opc==e.target){
            arr_indicador[i].setAttribute("style","background:blue")
        }
        else{
            arr_indicador[i].setAttribute("style","background:none")
        }
        i++;
    }
}

let bars=document.getElementById("bars");
let nom_opc=document.getElementsByClassName("nom-opc");
let menu=document.getElementById("menu");
let arr_opc=document.getElementsByClassName("opcion");
let arr_indicador=document.getElementsByClassName("indicador");
arr_indicador[0].setAttribute("style","background:blue");


bars.addEventListener("click",function(){
    for(let opc of nom_opc){
        opc.classList.toggle("ocultar");
    }
    menu.classList.toggle("extendido");

});

for(let opc of arr_opc){
   
    opc.addEventListener("click",e=>{
        seccionar(e)
    });
   
}