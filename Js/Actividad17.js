//CONTAR EL NUMERO DE PALABRAS EN UNA CADENA

function totalpalabras(){
    let cadena='Hola, Bienvenido a JS';
    console.log(cadena.split(' ').length);
}
totalpalabras();

//funcion flecha
const palabras=()=>{
    let cadena='Aprender JavaScrip es divertido';
    return cadena.split(' ').length;
}
console.log(palabras());