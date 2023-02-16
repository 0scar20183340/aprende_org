// recibo un array de 5 numeros 
//regresar la suma mas pequeña posible con 4 numerros 
//regresar la suma mas grande posible con 4 numeros

let acomodar = (vec = []) =>{

    for(let i = 0; i <vec.length; i++){
        for(let j = i+1; j < vec.length; j++){
            let aux = 0;

            if(vec[i] > vec[j]){
                aux = vec[j];
                vec[j] = vec[i];
                vec[i] = aux;
            }
        }
    }

    return vec;
}

// console.log(acomodar(vec =[1,3,4,6,2]));

function miniMaxSum(arr=[]) {
    // Write your code here
    // console.log(arr);

    acomodar(arr);
    // arr.sort();
    let sumMin = 0;
    let sumMax = 0;
    for(let i = 0; i < arr.length-1; i++){
        sumMin += arr[i];
        sumMax += arr[arr.length-1 - i];
    }
    console.log(sumMin, sumMax);
}

miniMaxSum(arr = [1,2,5,4,3]);