let chances= 0
let correcto= false

do{
let nombre= prompt("Cual es el primer nombre profesor de la catedra 25315 de Java Script?")

if(nombre.toUpperCase() === "ADRIAN"){
    correcto = true 
    document.write("Ganaste :)")
}else(
    chances ++ 
)
}while(chances < 3 && correcto === false)
if(!correcto){document.write("Perdiste tus 3 intentos :(")}
