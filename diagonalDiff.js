
// La primera línea contiene un solo entero N,
// el número de filas y columnas en 
// la matriz cuadrada ARR

// cada uno de los siguientes N líneas 
// describe una fila, ARR, 
// y consta deenteros separados por espacios.

function diagonalDifference(arr = []) {
    // Write your code here


    let raiz = Math.sqrt(arr.length); 
    let matrizCompleta = [];
//SEPARO ARRAY EN PARTES IGUALES A LA RAIZ Y LO UNO EN UN NUEVO ARRAY
    for(let i = 0; i < arr.length; i +raiz){
        let filas = arr.slice(i, i += raiz);
        matrizCompleta.push(filas);
    }

    
    //SEPARO EL ARRAY EN #RAIZ DIFERENTES
    let sumInit = 0;
    for(let j = 0; j < matrizCompleta.length; j++){
        let aux = matrizCompleta[j];
      
        //SUMO LAS VARIABLES DE POSISICION IGUAL A LA POCISION DE SU ARRRAY
        if(aux[j]!=matrizCompleta[j]){
            sumInit += aux[j];
            }
        }
        // console.log(sumInit);
        let sumSeg = 0;
        matrizCompleta.reverse(); //Voltie el array
        for(let j = 0; j < matrizCompleta.length; j++){
            let aux = matrizCompleta[j];
        
            //SUMO LAS VARIABLES DE POSISICION IGUAL A LA POCISION DE SU ARRRAY
            if(aux[j]!=matrizCompleta[j]){
                sumSeg += aux[j];
                }
            }
      
              let valor = sumInit - sumSeg;
    //    console.log(Math.abs(valor));
    console.log( Math.abs(valor));
        }




        let diagonalDifference2 = (arr=[]) =>{
            let raiz = Math.sqrt(arr.length); 
            let matrizCompleta = [];
        //SEPARO ARRAY EN PARTES IGUALES A LA RAIZ Y LO UNO EN UN NUEVO ARRAY
            for(let i = 0; i < arr.length; i +raiz){
                let filas = arr.slice(i, i += raiz);
                matrizCompleta.push(filas);
            }

            let diagonal1 =0;
            let diagonal2 = 0;

            // console.log(matrizCompleta)
            for(let i = 0; i <matrizCompleta.length; i++){
                // console.log(matrizCompleta[i][i]);
                diagonal1 += matrizCompleta[i][i];
                diagonal2 += matrizCompleta[i][matrizCompleta.length-1 - i];
            }
            console.log(Math.abs(diagonal1-diagonal2));
            
        
        }

        let diagonalDifference3 = (arr) =>{
            let diagonal1 = 0;
  let diagonal2 = 0;

  for (let i = 0; i < arr.length; i++) {
    diagonal1 += arr[i][i];
    diagonal2 += arr[i][arr.length - 1 - i];
  }

  console.log(Math.abs(diagonal1 - diagonal2));
        }

    diagonalDifference2( arr = [
        11,2,4,
        4,5,6,
        10,8,-12
    ]);



// diagonalDifference( arr = [
//     1,2,3,
//     4,5,6,
//     7,8,9
// ]);

// cada 4 sigue uno
 // 9- 1 -> /2 = 4

// diagonalDifference( arr = [
//     1,2,3,4,
//     5,6,7,8,
//     9,10,11,12,
//     13,14,15,16
// ]);

//cada 5 sigue uno
// //16-1 -> /3 = 5