
// La diferencia entre el GRD y
// el siguiente multiplo de 5 es menor de 3 redondedo

// Si es nenor que 38 no dedondea por que sigue siendo reprobatorio

//menor a cuarenta reprobatorio

// 73 ==> 75
// 67 ==> 67
// 38 ==> 40
// 33 ==> 33

// let gradingStudents = grades => {

//     if(grades < 38){
//         console.log(grades);
//     } else {

//         if((grades+2)%5 == 0 && (grades+2)%10 != 0 || (grades+1)%5 == 0 && (grades+1)%10 != 0 ){
//             grades = grades/10;
//             console.log((Math.round(grades)*10)+5);
//         } else if((grades+2)%10 == 0 || (grades+1)%10 == 0 ){
//             grades = grades/10;
//             console.log(Math.round(grades)*10);
//          } 
//     }
   
// }

// let gradingStudents = (grades =[]) => {
   

//     for(let i = 0; i < grades.length; i++){
//         if(grades[i]<38){
//             return grades;
//        } else {
//            switch (0) {
//                case (grades[i]+1)%5:
//                    return grades[i]+1;
//                    break;
//                case (grades[i]+2)%5:
//                    return grades[i]+2;
//                    break;
           
//                default:
//                    return grades[i];
//                    break;
//            }
//        }
//     }
// }

let gradingStudents = (grades=[])=>{
    let newArray = [];
    for(let i = 0; i < grades.length; i++){
        if(grades[i]>37){
            switch (0) {
               case (grades[i]+1)%5:
                   newArray.push(grades[i]+1);
                   break;
               case (grades[i]+2)%5:
                   newArray.push(grades[i]+2);
                   break;
               default:
                   newArray.push(grades[i]);
                   break;}
        } else {newArray.push(grades[i]);}
    } return newArray;
}

console.log(gradingStudents(grades =[73,67,38,33,89]));
