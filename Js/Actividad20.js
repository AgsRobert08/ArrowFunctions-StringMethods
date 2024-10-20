//COMPROBAR SI UNA CADENA TERMINA CON UNA PALABRA

function terminaPalbra(){
    let cadena='Bienvenido a JavaScript';
    console.log(cadena.endsWith('JavaScript'));
}
terminaPalbra();

//funcion flecha
const cadenaTermina=()=>{
    let cadena='Bienvenido a JavaScript';
    return cadena.endsWith('Bienvenido');
}

console.log(cadenaTermina());