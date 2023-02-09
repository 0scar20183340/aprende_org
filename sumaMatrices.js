

// La primera línea de la entrada consiste en un número entero..
// La siguiente línea contieneenteros separados por espacios contenidos en la matriz.

// Formato de salida

// Devuelve la suma entera de los elementos de la matriz.

function aVeryBigSum(ar = []) {
    // Write your code here
    let suma = 0;
    for(let i = 0; i<ar.length; i++){
        suma = suma + ar[i];
    }

    return suma;
}

console.log(aVeryBigSum(ar = [50005, 0001, 0001, 0002]));