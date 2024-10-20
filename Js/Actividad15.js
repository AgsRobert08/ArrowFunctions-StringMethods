//OBTENER EL ULTIMO CARACTER DE UNA CADENA SIN USAR LENGTH

let cadena='roberto';
function ultimoCaracter(cadena){
    //usaremos el slice con el numero negativo que nos permitira acceder al ultmo elemento
    console.log(cadena.slice(-1));
}
ultimoCaracter(cadena);

//funcion flecha
const ultimoElemento=(cadena)=>{
    return cadena.slice(-1);
}
console.log(ultimoElemento(cadena));