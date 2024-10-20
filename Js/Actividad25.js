//REMOVER CARACTERES ESPECIALES EN UNA CADENA

let cadena='hola@ de nuevo, ya vamos por me-nos';
const eliminarCaracterEspecial=(cadena)=>{
    return cadena.replace(/[^A-Za-z0-9]/g, '');
}
console.log(eliminarCaracterEspecial(cadena));
