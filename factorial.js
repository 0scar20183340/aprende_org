
function factorial(n){

    let aux= 1;
    for(let i = 1; i < n+1; i++){
     aux*=i;
    }
    return aux;
}
// console.log(factorial(5));

function sumFactoriales (nFactorial){

    let aux =0;
    for(let i = 1; i<nFactorial+1; i++){
        aux += factorial(i);
    }
    console.log(aux);

       // for(let i = 1; i<nFactorial+1; i++){
    //     let aux = factorial(i);
    //     aux += aux; 
    //     console.log(aux)
    // }
}

sumFactoriales(5);