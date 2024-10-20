//CONVERTIR LA PRIMERA LETRA A MAYUSCULA

let cadena='aprendiendo JavaScript';

function converterUpperCase(cadena){
    let cadenaNueva=(cadena.charAt(0).toUpperCase()+cadena.slice(1));
    console.log(cadenaNueva);
}
converterUpperCase(cadena);

//con la funcion flecha quedaria de la siguiente manera

const convertLetter=(cadena)=>{
    return cadena.charAt(0).toUpperCase()+cadena.slice(1);
}

console.log(convertLetter(cadena));

/*los metodos que use es charAt oara ubicar la posicion
de la primera letra, depues el toUpperCase para pasarlo a Mayuscula
y por ultimo concatenamos con la misma cadena usando el slice()para decirle
que comience desde el elemento 1 */