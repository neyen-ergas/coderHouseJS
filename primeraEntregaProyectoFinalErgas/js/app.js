mangas=[]

function aa(){
    return console.log("god");
}
function Manga (nombre,precio,autor) {
    this.nombre = nombre;
    this.precio = precio;
    this.autor = autor;
}

let manga1 = new Manga("Oyasumi Punpun",350,"Inio Asano");
let manga2 = new Manga("Chainsawman",400,"Tatsuki Fujimoto");
let manga3 = new Manga("Berserk",300,"Kintaro Miura");
let manga4 = new Manga("Jujutsu Kaisen",450,"Gege Akutami");


mangas.push(manga1);
mangas.push(manga2);
mangas.push(manga3);
mangas.push(manga4);

function compraManga(){
let eleccion = parseInt(prompt("Seleccione un manga 1)"+ mangas[0].nombre+" 2)"+mangas[1].nombre+" 3)"+mangas[2].nombre+" 4)"+mangas[3].nombre));

while(eleccion!=1 && eleccion!=2 && eleccion!=3 && eleccion!=4 ){
    alert("Porfavor seleccion el numero del manga ")
    eleccion = parseInt(prompt("Seleccione un manga 1)"+ mangas[0].nombre+" 2)"+mangas[1].nombre+" 3)"+mangas[2].nombre+" 4)"+mangas[3].nombre));
}

switch(eleccion)
{
    case 1:
    alert("Compra realizada :) Manga: "+mangas[eleccion-1].nombre+" Precio final con 15% de descuento: $"+precioFinal(eleccion));
    ;break;
    case 2: 
    alert("Compra realizada :) Manga: "+mangas[eleccion-1].nombre+" Precio final con 15% de descuento: $"+precioFinal(eleccion));
    ;break;
    case 3:
    alert("Compra realizada :) Manga: "+mangas[eleccion-1].nombre+" Precio final con 15% de descuento: $"+precioFinal(eleccion));
    ;break
    case 4:
    alert("Compra realizada :) Manga: "+mangas[eleccion-1].nombre+" Precio final con 15% de descuento: $"+precioFinal(eleccion));
    ;break
}



function precioFinal (mangaNumero){
    return precio = mangas[mangaNumero-1].precio*0.85;
}
}




