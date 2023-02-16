
// convertir horario de12 hrs a 24 hrs
// se retornara un string AM/PM a 24 hrs completas

//  '12:01:00AM' return '00:01:00'


// si tiene pm de 01 a 11 se le sumaran 12
//si tiene am y es 12 restar 12

// si tiene am de 1 a 11 se imprime igual ||
//  si pm de 12 se imprimira igual

let timeConversion = s => {
    
    let horario = s.substring(s.length-2); //guardo si es AM o PM
    s = s.substring(0,2); //elimino los ultimos 2 valores del string
    let arr = s.split(":"); //converto el strin en array cada division por : 

}

timeConversion('04:01:00PM')


// 01 => 12 am
// 06 => 6 am
// 07 => 7am
// 08 => 8am
// 11 => 11 am
// 12  => 12 pm
// 13  => 1 pm
// 14  => 2 pm
// 15
// 24