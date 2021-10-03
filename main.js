const botonAmigo = document.querySelector("#botonAmigo");
const reset = document.querySelector("#reset");
const botonEnemigo = document.querySelector("#botonEnemigo");
const marcadorAmigo = document.querySelector("#marcadorAmigo");
const marcadorEnemigo = document.querySelector("#marcadorEnemigo");

var numeroAmigo = 0;
var numeroEnemigo = 0;

botonAmigo.addEventListener("click", (evento)=> {
    alert("+1 gol equipo amigo");
    numeroAmigo++;
    marcadorAmigo.textContent = numeroAmigo;
});

reset.addEventListener("click", (evento)=> {
    
    var opcion = confirm("¿Seguro que quieres resetear el marcador?");

    if(opcion){
        marcadorAmigo.textContent = 0;
        marcadorEnemigo.textContent = 0;
        alert("Has reseteado el marcador");
    }else
    alert("El marcador no ha sido reseteado");

});

botonEnemigo.addEventListener("click", (evento)=> {
    alert("+1 gol equipo enemigo");
    numeroEnemigo++;
    marcadorEnemigo.textContent = numeroEnemigo;
});



