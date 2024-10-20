//REMPLAZAR UNA PALABRA EN UNA CADENA
// funcion que remplaza una palabra especifica en una cadena usando replace()

function remplazarPalabra(){
    let cadena='Hola Robert. Bienvenido';
    console.log(cadena.replace('Robert','Amigo'));
}

remplazarPalabra();

//funcion flecha
let cadena='Hola Robert.Bienvenido';
const palabraRemplazada=(cadena)=>{
    let cadenaRemplazada=cadena.replace('Bienvenido','Un gusto Saludar');
    return cadenaRemplazada;
}

console.log(palabraRemplazada(cadena));
