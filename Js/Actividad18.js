//ELIMINAR TODAS LAS VOCALES DE UNA PALABRA

let cadena='bienvenidos a javascript';
const eliminarVocales=(cadena)=>{
    return cadena.replace(/[aeiouAEIOU]/g, '');
}
console.log(eliminarVocales(cadena));