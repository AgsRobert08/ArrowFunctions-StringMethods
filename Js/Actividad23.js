//TRUNCAR UNA CADENA A UN NUMERO DE CARACTERES

let cadena='Ya falta poco, animate';
let numCaracter=31;
function truncarCadena(cadena,numCaracter){
    /*el metodo substring le damos dos valores para que 
    devuelva los caracteres, y la otra opcion seria el slice() o el substr()
  let cadenatrunca=cadena.substring(0,numCaracter);
    console.log(cadenatrunca);*/
    let truncarCadena=cadena.slice(0,numCaracter);
    console.log('cadena truncada: '+truncarCadena);
    if (cadena.length >= truncarCadena.length){
        console.log('la cadena es mas larga')
    }else{
        console.log('la cadena se completa ya que no tiene suficientes elementos')
    }
}
truncarCadena(cadena,numCaracter)