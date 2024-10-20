//COMPROBAR SI UNA CADENA CONTIENE SOLO NUMEROS

//el metodo test() donde usamos ^ para indicar que inicia la cadena y $ que termina
let cadena='1234q';
const soloNumeros=(cadena)=>{
    return /^[0-9]+$/.test(cadena);
}
console.log(soloNumeros(cadena));