//CONVERTIR UNA CADENA EN UN ARRAY DE PALABRAS

function convertirCadena(){
    let cadena='Hola, Bienvenido a JavaScript';
    console.log(cadena.split(' '));
}
convertirCadena();

//funcion flecha
const cadenaArray=()=>{
    let cadena='Bienvenido a JS';
    return cadena.split(' ');
}

console.log(cadenaArray());