//Menu lateral mediante JavaScript

//Se declaran las variables
var menu_visible = false;
let menu = document.getElementById("nav");

/**Se define una función que ante un evento onclick va a mostrar u ocultar el menu 
 * (segun el estado que se encuentre previamente)*/
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}