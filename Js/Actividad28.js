//CAPITALIZAR TODAS LAS PALABRAS DE UNA FRASE
let cadena='bienvenido a javascript, exito!!';

function capitalizarPalabra(cadena) {
    //dividimos la cadena en un array de palabras
    console.log(cadena.split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(' '));
//depues se ubicara cada inicio de cada palabra convirtiendo en mayuscula
//finaliza uniendo con join en una cadena 
}

capitalizarPalabra(cadena);
