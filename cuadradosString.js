
//a es un numero al cuadrado
//b es el ultimo numero al cuadrado de una sucesion

//retornar cuantos numeros cuadrados hay en la sucesion incluyendo a y b.

function squares(a, b) {
let totales = 0;
for(let i = a; i < b+1; i++){
    let cuadrado = Math.sqrt(i);
    if(Number.isInteger(cuadrado)){
        totales+=1;
    }
} return totales;
}


//Primero sacas ceil numero mas proximo a entero hacia arriba
//sacas numero proximo entero hacia abajo con floor
//das la diferencia +1 para tener el rango completo de los numeros
function squares(a, b) {
    // Write your code here
a = Math.ceil(Math.sqrt(a));
b = Math.floor(Math.sqrt(b));
return b-a+1;
}

console.log(squares(24, 49));
