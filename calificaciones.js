

function aprobado(alumno = "", calificacionA = 0){

    if(calificacionA < 6){
        return `El alumno ${alumno} esta reprobado`;
    } else if(calificacionA > 9){
        return `El alumno ${alumno} ha obtenido un exelente trabajo`;
    } else {
        return `El alumno ${alumno} esta aprobado`;
    }

}


console.log(aprobado("Pancho", 6));
console.log(aprobado("Oscar", 4.5));
console.log(aprobado("Noe", 10));