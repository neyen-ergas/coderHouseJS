let ulProds;
let menuClick;
let menuNav;

window.onload = function (){

    ulProds = document.querySelector(".ul_prods")
    menuClick = document.querySelector(".menu_click")
    menuNav = document.querySelector(".menu_nav")
    
    menuClick.addEventListener("click", menuHandler)
    
    cargarCatalogo();
    
}

function cargarCatalogo(){
    ulProds.innerHTML = " ";
    let html = " ";

    $.ajax({
        url: "catalogo.json",
        success: function(data){
            console.log(data)
            data.forEach(prod => {
                html = html + htmlCatalogo(prod);
            });
            ulProds.innerHTML = html;
            
        },
        error: function (error) {
            console.log("ERROR")
        }
    });

    
}

function htmlCatalogo(prod){
    return `
    <li class="card_prod" id="${prod.id}">
        <div>
            <div class="cont_img_card">
                <img class="img_card" src="${prod.img}" alt="${prod.autor}" >
            </div>
            <div class="titulo_card">${prod.titulo}</div>
            <div class="precio_card">$${prod.precio}</div>
        </div>
    </li>
    `
}

function menuHandler(){
    menuNav.classList.toggle("bajar_menu_nav")
    menuClick.classList.toggle("menu_active")
}