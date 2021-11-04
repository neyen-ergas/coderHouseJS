
axies =[]

let nombreAxie = prompt("Ingrese nombre del Axie");
let precioAxie = parseInt (prompt("Ingrese precio del Axie"));
let colorAxie = prompt("Ingrese color del Axie");

function axie (nombre,precio,color) {
    this.nombre = nombre;
    this.precio = precio;
    this.color = color;
    this.datos = function(){ document.write(" El nombre es "+this.nombre+" su precio es "+this.precio+" su color es "+this.color) };
    this.presentacion = function(){ this.datos()} 
}

let nuevoAxie = new axie(nombreAxie,precioAxie,colorAxie);

nuevoAxie.datos();
 

