
// La diferencia entre el GRD y
// el siguiente multiplo de 5 es menor de 3 redondedo

// Si es nenor que 38 no dedondea por que sigue siendo reprobatorio

//menor a cuarenta reprobatorio

// 73 ==> 75
// 67 ==> 67
// 38 ==> 40
// 33 ==> 33

let gradingStudents = grades => {

    if(grades < 38){
        console.log(grades);
    } else {

        if((grades+2)%5 == 0 && (grades+2)%10 != 0 || (grades+1)%5 == 0 && (grades+1)%10 != 0 ){
            grades = grades/10;
            console.log((Math.round(grades)*10)+5);
        } else if((grades+2)%10 == 0 || (grades+1)%10 == 0 ){
            grades = grades/10;
            console.log(Math.round(grades)*10);
         }
    }
   
}

gradingStudents(37);
gradingStudents(38);
gradingStudents(63);
gradingStudents(73);
gradingStudents(83);