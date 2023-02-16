

// reacomodar el vector con el numero munimo de iteraciones posibles

// ejemplo     arr=[2,5,3,1] =>  arr=[1,5,3,2] => arr=[1,2,3,5] 
//                                     1 por 2          2 por 5

// function lilysHomework(arr = []) {
//     // Write your code here
// let contador = 0;

//     for(let i = 0; i<arr.length; i = i+2){
//         let aux = 0;
//         if(arr[i-1] > arr[i] && arr[i] > arr[i+1]){
//             aux = arr[i+1];
//             arr[i+1] = arr[i-1];
//             arr[i-1] = aux;
//             contador += 1;
//         }  if(arr[i-1] > arr[i]){
//             aux = arr[i-1];
//             arr[i-1] = arr[i];
//             arr[i] = aux;
//             contador += 1;
//             }
//             console.log(arr);
//     }

// //    3 ciclos for 

//     console.log(contador);
// }



let lilysHomework = (arr = []) => {
    

    let aux = 0;
    let contador  = 0;
    for(let i = 0; i<arr.length;i++){
        for(let j = i+1; j<arr.length; j++){
            for(let k = j+1; k < arr.length;k++){
                if(arr[i] > arr[j] && arr[j] > arr[k]){
                                aux = arr[k];
                                arr[k] = arr[i];
                                arr[i] = aux;
                                contador += 1;
                                console.log(arr);
                                
                }
            }
            if(arr[i] > arr[j]){
                aux = arr[j];
                arr[j] = arr[i];
                arr[i] = aux;
                contador += 1;
                console.log(arr);
            }
        }
    }

    console.log(contador);
}

lilysHomework(arr=[7,15,12,3]);

lilysHomework(arr=[3,4,2,5,1]);
//                [5,4,2,3,1]  el 5 por el 3
//                [5,4,3,2,1]  el 3 por el 1