//OBTENER LA LONGITUD DE UNA CADENA
let cadena='Robert';
function longitudCadena(cadena){
    console.log('La longitud de la cadena recibida es: '+cadena.length);
}

longitudCadena(cadena);

// El mismo resultado haciendo una funcion flecha

const longitud =(cadena) =>{
    return cadena.length;
}
let resultado=console.log(longitud(cadena));