//ESTRAER UNA PARTE DE UNA CADENA
//Funcion que devuelve una parte de una cadena usando sbstring

function extraerCadena(){
    let cadena='Roberto';
    console.log('Tu nombre de perfil es: '+cadena.substring(0,5));
}
extraerCadena();

//funcion flecha
let cadena='Roberto';
const parteCadena=(cadena)=>{
    let extraer=cadena.substring(0,5);
    return extraer;
}
console.log(parteCadena(cadena));

