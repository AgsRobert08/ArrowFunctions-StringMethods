//ELIMINAR ESPACIOS AL INICIO Y AL FINAL

function eliminarEspacio(){
    let cadena=' Hola Robert ';
    console.log('Este es un ejemplo de cadena con espacios '+cadena);
    console.log('Ejemplo de cadena sin eliminando espacio '+cadena.trim());
}
eliminarEspacio();

//usando una funcion cadena
let cadena=' Robert Agustin ';
const eliminar=(cadena)=>{
    let eliminado=cadena.trim();
    return eliminado;
}
console.log(eliminar(cadena));