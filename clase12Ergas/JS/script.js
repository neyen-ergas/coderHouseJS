
let menuNav;

window.onload = function (){

    menuNav = document.querySelector(".menu_nav")
    


    $( ".menu_click" ).click(function() {
        menuHandler();
      });
    
    cargarCatalogo();
    
}

function cargarCatalogo(){
    $(".ul_prods").html(" "); 
    let html = " ";

    $.ajax({
        url: "catalogo.json",
        success: function(data){
            console.log(data)
            data.forEach(prod => {
                html = html + htmlCatalogo(prod);
            });
            $(".ul_prods").html(html)
            
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
    $(".menu_nav").toggleClass("bajar_menu_nav")   
}