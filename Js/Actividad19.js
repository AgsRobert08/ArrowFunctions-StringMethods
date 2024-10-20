//COMPROBAR SI UNA CADENA COMIENZA CON UNA PALABRA

let cadena='Bienvenido a JavaScript';
function verPalabraCadena(cadena){
    console.log(cadena.startsWith('Bienvenido'));
}
verPalabraCadena(cadena);

//funcion flecha

const iniciaPalabra=()=>{
    let cadena='bienvenido a JavaScript';
    return cadena.startsWith('bienvenido');
}

console.log(iniciaPalabra());