//COMPROBAR SI UNA CADENA TIENE UNA PALABRA
//ver si existe una 'palabra' en una cadena

let cadena='Hola Robert';
let palabra='Robert';


function verPalabra(cadena,palabra){
   console.log(cadena.includes(palabra));
}

verPalabra(cadena,palabra);


//usando la funcion flecha

const palabraExistente=(cadena, palabra)=>{
    let verExiste=cadena.includes(palabra);
    return verExiste;
}

console.log(palabraExistente(cadena, palabra));
