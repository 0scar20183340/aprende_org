//Dia 256 del año DIA DEL PROGRAMADOR
//imprimir DD/MM/AAAA

//DESDE 1700 A ANTES DE 1918 AÑO BISIESTO CUALQUIERA DIVISIBLE ENTRE 4
//DESPUES DE 1918 AÑO BISIESTO DIVISIBLE ENTRE 400 PERO NO ENTRE 100

function dayOfProgrammer(year) {
    // Write your code here


    // let result  = 0;

    // if(year===1918){
    //     result = "26.09." + year;
    // } else if(year > 1918){
    //     result = year%400 || ((year%4===0)&&(year%100!==0))? "12.09." + year
    //     : "13.09."+year;
    // } else {
    //     result = year%4===0?"12.09."+year: "13.09."+ year;
    // }
    // console.log(result);
let result = 0;

if(year==1918){
    result="26.09."+year;
} else if(year>1918)
    { if(year%400==0|| year%4==0 &&year%100!=0) {
    result="12.09."+year;
    } else {
    result="13.09."+year;
    }
} else if(year%4==0) {
    result="12.09."+year;
} else {
    result="13.09."+year;
}
return result;
}

dayOfProgrammer(2020);