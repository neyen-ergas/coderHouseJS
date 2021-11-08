mangas =[]
let contador = 0;
let cantidad = parseInt(prompt("Cuantos mangas desea agregar?"));
do{
let nombreManga = prompt("Ingrese nombre del Manga");
let precioManga = parseInt (prompt("Ingrese precio del Manga"));
let autorManga = prompt("Ingrese autor del Manga");

function Manga (nombre,precio,autor) {
    this.nombre = nombre;
    this.precio = precio;
    this.autor = autor;
    this.datos = function(){ document.write(" El nombre es "+this.nombre+" su precio es "+this.precio+" su autor es "+this.color) };
    this.presentacion = function(){ this.datos()} 
}

let nuevoManga = new Manga(nombreManga,precioManga,autorManga);
mangas.push(nuevoManga);
contador ++;

}while(contador!=cantidad);

let orden = prompt("Desea ordenar la list por Nombre, Precio o Autor?").toLowerCase()
if(orden == "nombre"){
    mangas.sort((a,b) => (a.nombre > b.nombre) ? 1 : ((b.nombre > a.nombre) ? -1 : 0))
}
if(orden == "precio"){
    mangas.sort((a,b) => (a.precio > b.precio) ? 1 : ((b.precio > a.precio) ? -1 : 0))
}
if(orden == "autor"){
    mangas.sort((a,b) => (a.autor > b.autor) ? 1 : ((b.autor > a.autor) ? -1 : 0))
}

console.table(mangas);




