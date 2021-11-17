let boton;
let axies =[]
let html = ""

function axie (nombre,precio,tipo) {
    this.nombre = nombre;
    this.precio = precio;
    this.tipo = tipo;
}

document.addEventListener("DOMContentLoaded", ()=>{
    boton = document.querySelector("#btn");
    boton.addEventListener("click", ()=>{

        let cantidad = prompt("Cuantos axie desea ingresar?");

        do{  
        let nombreAxie = prompt("Ingrese nombre del Axie");
        let precioAxie = parseInt (prompt("Ingrese precio del Axie"));
        let tipoAxie = prompt("Ingrese tipo del Axie");
        
        let nuevoAxie = new axie(nombreAxie,precioAxie,tipoAxie);
        
        axies.push(nuevoAxie);
        }while(axies.length <= cantidad-1)
        
        axies.forEach(axie => {
            html= html + mapeoAxie(axie)
        });

        document.querySelector("#contenedor-carta").innerHTML=html
        
        document.querySelector("#btn").classList.add("displaynone")
    }
    )
})

function mapeoAxie(axie){
return `
<div class="col-3 distancia"> 
<div class="card text-center sombras">
<img class="card img-top" id="imagen" src="https://miro.medium.com/max/784/0*hHrpP8vfkK_cCg1C.gif">
<div class="card-body">
    <p class= "font-weight-bold" id="Nombre">${axie.nombre}</p>
    <p id="Precio"><span>${axie.precio}</span></p>
    <p id="Tipo"><span>${axie.tipo}</span></p>
</div>
</div>
</div>`
}

