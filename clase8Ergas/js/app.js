
function crearAxie(){

let axies =[]

let nombreAxie = prompt("Ingrese nombre del Axie");
let precioAxie = parseInt (prompt("Ingrese precio del Axie"));
let tipoAxie = prompt("Ingrese tipo del Axie");

function axie (nombre,precio,tipo) {
    this.nombre = nombre;
    this.precio = precio;
    this.tipo = tipo;
}

let nuevoAxie = new axie(nombreAxie,precioAxie,tipoAxie);

axies.push(nuevoAxie);

document.querySelector("#contenedor-carta").innerHTML=mapeoAxie(nuevoAxie)

document.querySelector("#btn").textContent="Cambiar axie"



}

function mapeoAxie(axie){
return `
<div class="card text-center sombras">
<img class="card img-top" id="imagen" src="https://miro.medium.com/max/784/0*hHrpP8vfkK_cCg1C.gif">
<div class="card-body">
    <p class= "font-weight-bold" id="Nombre">${axie.nombre}</p>
    <p id="Precio"><span>${axie.precio}</span></p>
    <p id="Tipo"><span>${axie.tipo}</span></p>
</div>
</div>`
}

