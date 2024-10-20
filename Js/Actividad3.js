//CONVERTIR A MINUSCULAS
let cadena="HOLA ROBERT AGUSTIN";

function minusculas(cadena){
    console.log(cadena.toLowerCase());
}

minusculas(cadena);

//haciendo la funcion flecha quedaria asi;

const cambiarMinusculas=(cadena)=>{
    let minuscula=cadena.toLowerCase();
    return minuscula;
}

console.log(cambiarMinusculas(cadena));
