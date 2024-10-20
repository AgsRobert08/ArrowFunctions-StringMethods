//REVERTIR UNA CADENA 
let cadena='Robert';
function revertString(cadena){
    //primero el split va a crear un arreglo de caracteres, luego reverse los va a invertir y por ultimo join ara la cadena 
    let NewString=cadena.split('').reverse().join('');
    console.log(NewString);
    
}

revertString(cadena);

// funcion flecha
const invertString=(cadena)=>{
    return cadena.split('').reverse().join('');

}

console.log(invertString(cadena));