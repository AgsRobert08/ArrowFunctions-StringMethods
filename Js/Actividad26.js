//CREAR UNA FUNCION QUE DEVUELVA LA PALABRA MAS LARGA EN UNA CADENA
let cadena = 'bienvenidos a JavaScript';

function palabraLarga(cadena) {
    let dividirPalabras = cadena.split(' ');

    let masLargo = dividirPalabras.reduce((a, b) => {
        if (a.length > b.length) {
            return a;
        } else {
            return b;
        }
    });

    return masLargo;
}

console.log(palabraLarga(cadena));
