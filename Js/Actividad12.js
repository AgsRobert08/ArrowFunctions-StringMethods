//comprobar si una palabra es un palindromo
let palabra='letra';
function esPalindromo(palabra){
    let palabraInvert=palabra.split('').reverse().join('');
    if(palabraInvert===palabra){
        console.log('La palabra '+palabra+' es un palindromo')
    }else{
        console.log('La palabra '+palabra+' no es un palindromo')
    }
}

esPalindromo(palabra);

//funcion flecha
const palindromo=(palabra)=>{
    let invertir=(palabra.split('').reverse().join(''));
    if (invertir==palabra){
        console.log('Es palindromo')
    }else{
        console.log('No es palindromo')
    }

}

console.log(palindromo(palabra));