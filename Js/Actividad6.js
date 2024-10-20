//REPETIR UNA CADENA
//Funcion que repite una cadena las veces especificadas
//Usamos metodo repeat();

function cadenaRepetir(){
    let cadena='Jaja';
    console.log("Hola... "+cadena.repeat(3));
}

cadenaRepetir();

//Usando la funcion flecha
let cadena='Robert';
const repetirCadena=(cadena)=>{
    let vecesRepetir=cadena.repeat(10);
    return vecesRepetir;
}
console.log(repetirCadena(cadena));
