//CONTAR OCURRENCIAS DE UNA LETRA EN UNA CADENA

//usando el ciclo for separando el total de elementos del array y comparando
let cadena='JavaScript';
let letra='a';
function ocurrencesLetter(cadena,letra){
    let contador=0;
    for(let i=0; i<cadena.length; i++){
        if(cadena[i]==letra){
            contador++;
        }
    }
    console.log(contador);
}
ocurrencesLetter(cadena,letra);

//funcion flecha con metodos
const contLetter=(cadena,letra)=>{
    //primero vamos a dividir por caracteres la cadena
    let caracteres=cadena.split('');
    //luego vamos a fltrar por cada uno de ellos 
    let total=caracteres.filter(elemento=>elemento===letra).length
    return total;
}

console.log(contLetter(cadena,letra));