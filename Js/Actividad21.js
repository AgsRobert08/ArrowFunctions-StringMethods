//REMPLAZAR TODAS LAS OCURRENCIAS DE UNA PALABRA

let cadena='hola, bienvenido a JavaScript';
let palabra='usuario';

function remplazarOcurrencia(cadena){
    console.log(cadena.replaceAll('hola',palabra));
}
remplazarOcurrencia(cadena,palabra);

//funcion flecha
const ocurrenciaRemplazada=(cadena,palabra)=>{
    return cadena.replaceAll('hola',palabra);
}
console.log(ocurrenciaRemplazada(cadena,palabra));