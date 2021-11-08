
axies =[]
let contador = 0;
let cantidad = parseInt(prompt("Cuantos axies desea agregar?"));
do{
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

axies.push(nuevoAxie);

contador ++;

}while(contador!=cantidad)

console.table(axies)


