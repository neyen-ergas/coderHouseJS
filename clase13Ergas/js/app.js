let listaCatalogo = [];
let listaCarrito = localStorage.listaCarrito ? JSON.parse(localStorage.listaCarrito) : [];

let parrafo;
let totalPagar;
let prodAgregados;

document.addEventListener("DOMContentLoaded", function(){
    parrafo = document.getElementById("agrego")
    totalPagar = document.getElementById("totalNum")
    prodAgregados = document.getElementById("prodAgregados")
    agegarCatalogoLista();
    cargaCarritoPrevio();
    
})


function agegarCatalogoLista(){
    $.ajax({
        url: "catalogo.json",
        success: function(data){
            data.forEach(prod => {
                listaCatalogo.push(prod)
            });
        },
        error: function (error) {
            console.log("ERROR")
        }
    });    
}

function agregarAlCarrito(idProd){
    listaCatalogo.forEach(prod => {
        if (prod.id == idProd) {
            listaCarrito.push(prod);
            localStorage.listaCarrito = JSON.stringify(listaCarrito);
        }
    });
    mostrarProdsAgregados();
}

function calcularTotal(){
    let total = 0;
    listaCarrito.forEach(prod => {
        total = total + prod.precio;
    });
    return total;
}

function modificarTotal(){
    totalPagar.textContent = " ";
    totalPagar.textContent = "$"+calcularTotal()
}

function mostrarProdsAgregados(){
    let contador = listaCarrito.length;

    prodAgregados.innerHTML = `${contador}`

    if (contador>=1) {
        prodAgregados.classList.add("prodAgregados");

    }else if(contador==0){
        prodAgregados.classList.remove("prodAgregados")
    }

    modificarTotal();
}

function cargaCarritoPrevio(){
    if (listaCarrito.length>=1) {
        mostrarProdsAgregados()
        agegarCatalogoLista();
    }
}

function borrarCarrito(){
    listaCarrito.length=0;
    mostrarProdsAgregados();
}

function realizarCompra(){
Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Compra realizada',
    showConfirmButton: false,
    timer: 1500
  })
  borrarCarrito();
}