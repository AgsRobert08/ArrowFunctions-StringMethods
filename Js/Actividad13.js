//CONCATENAR DOS CADENAS USANDO concat()

let cadena1='Hola Robert';
let cadena2='Bienvenido a JavaScript';

function concatenarCadenas(cadena1,cadena2){
    let newCadena=cadena1.concat(cadena2);
    console.log(newCadena);
}

concatenarCadenas(cadena1,cadena2);

//Usando una funcion flecha

const concatenar=(cadena1,cadena2)=>{
    return cadena1.concat(cadena2);
}

console.log(concatenar(cadena1+','+cadena2));
