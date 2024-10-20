//CONVERTIR A MAYUSCULAS

let cadena='Hola Robert';
function mayusculas(cadena){
   console.log(cadena.toUpperCase());
}
mayusculas(cadena);


//USANDO LA FUNCION FLECHA
const cambiarMaysucula=(cadena)=>{
    let mayuscula=cadena.toUpperCase();
    return mayuscula;
}

console.log(cambiarMaysucula(cadena));