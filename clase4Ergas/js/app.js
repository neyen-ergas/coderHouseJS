let ladoUsuario =parseInt(prompt("Ingrese uno de los lados del cuadrado para calcular su area"));

document.write("El area del cuadrado es: " + calcularArea(ladoUsuario));

function calcularArea (lado){return lado * lado}