//Archivo principal JavaScript//

//Variables//
var moneda = ['Elige tu Moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];
var valores = [NaN, 1, 20.50, 4065, 0.88, 0.74];
let monedaEntrada = document.getElementById("monedaEntrada");
let monedaConversion = document.getElementById("monedaConversion");

moneda.forEach(monedaNombre => {

    //Creación de opciones en el select 'Moneda de entrada'
    let optEntrada = document.createElement("option");
    optEntrada.textContent = monedaNombre;
    optEntrada.setAttribute("value", monedaNombre);
    monedaEntrada.appendChild(optEntrada);

    //Creación de opciones en el select 'Moneda de conversion'
    let optConversion = document.createElement("option");
    optConversion.textContent = monedaNombre; 
    optConversion.setAttribute("value", monedaNombre);
    monedaConversion.appendChild(optConversion);

});

//Creación sección de respuesta
let respuesta = document.getElementById("respuesta");
let respuestaTexto = document.createElement("p");
respuesta.appendChild(respuestaTexto);

function convertir(){

    let btnConvertir = document.getElementById("convertir");
    btnConvertir.addEventListener('click', ejecutarConversion);

}

function ejecutarConversion(){

    let valMonedaEntrada = monedaEntrada.value;
    let valMonedaConversion = monedaConversion.value;
    let valEntrada = NaN;
    let valConversion= NaN;

    for(let i=1; i<moneda.length; i++){
        
        if (valMonedaEntrada == moneda[i]){
            valEntrada = valores[i];
        };
        if (valMonedaConversion == moneda[i]){
            valConversion = valores[i];
        }

    }

    let valResultado = NaN;
    let cantidadDinero = document.getElementById("cantidad").value;
    let resultado = "";

    if ( isNaN(valEntrada) || isNaN(valConversion) ){
        resultado = "Elige una moneda";
    } 
    else{

        if ( (isNaN(cantidadDinero)) || (cantidadDinero<=0) ){
            resultado = "Ingresa una cantidad de dinero válida";
        }
        else{
            let conversion = (valConversion/valEntrada)*cantidadDinero;
            valResultado = Math.round(conversion*100)/100;
            resultado = `${cantidadDinero} ${valMonedaEntrada} equivalen a ${valResultado} ${valMonedaConversion}`;
        }
        
    }

    respuestaTexto.textContent = resultado;
    
}

convertir();
