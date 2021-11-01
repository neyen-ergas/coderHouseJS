let tempCelcius = ingresoDeTemperaturaCelcius();
let tempFahrenheit = cambioDeTemperaturaAFahrenheit(tempCelcius);
imprimirResultados(tempCelcius,tempFahrenheit);

function ingresoDeTemperaturaCelcius() { 
    let temperatura = parseInt(prompt("Ingrese temperatura en Celcius que desea ser pasada a Fahrenheit"));
    return temperatura;
};
function cambioDeTemperaturaAFahrenheit (temperatura) {
    return temperatura * 9/5 + 32;
};
function imprimirResultados (celcius,fahrenheit)  {
    document.write(celcius +" grados Celcius es igual a "+ fahrenheit +" fahrenheit.");
}