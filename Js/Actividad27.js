//CONVERTIR UNA CADENA A SNAKE_CASE

let cadena='robert agustin zavaleta';
const convertirCadena=(cadena)=>{
    //convertimos a minuscula
    //con split dividimos la cadena en palabras
    //con join juntamos todo en una cadena usando _ como separacion
    return cadena.toLowerCase().split(' ').join('_');
}
console.log(convertirCadena(cadena));