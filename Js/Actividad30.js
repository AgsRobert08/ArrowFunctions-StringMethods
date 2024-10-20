
let cadena='roberto';
function contarFrecuenciaCaracteres(cadena) {
    let frecuencia = {};

    for (let char of cadena) {
        if (frecuencia[char]) {
            frecuencia[char]++;
        } else {
            frecuencia[char] = 1;
        }
    }

    console.log(frecuencia);
}
contarFrecuenciaCaracteres(cadena);
