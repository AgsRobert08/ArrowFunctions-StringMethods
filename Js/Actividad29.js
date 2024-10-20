//COMPRIMIR UNA CADENA ELIMINANDO LETRAS CONSECUTIVAS REPETIDAS
let cadena='ooh me gusta la muuuusica';
function eliminarRepetidasConsecutivas(cadena) {
    console.log(cadena.split('').filter((char, index, arr) => char !== arr[index - 1]).join(''));
}
eliminarRepetidasConsecutivas(cadena);
