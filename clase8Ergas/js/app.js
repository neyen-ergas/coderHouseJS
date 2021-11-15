

function crearAxie(){

axies =[]

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

document.getElementById("Nombre").textContent= nombreAxie
document.getElementById("Precio").textContent=precioAxie
document.getElementById("Tipo").textContent= tipoAxie



}

