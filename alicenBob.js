
/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a = [], b = []) {
 
    let pointAlice = 0;
    let pointBob = 0;
    // let empate = 0;

    for(let i = 0; i < a.length; i++){
        if(a[i]> b[i]){
            pointAlice ++;
        } else if (b[i]> a[i]){
            pointBob++;
        // } else {
        //     empate++;
        // }
    }
}

    let matriz = [];
    matriz.push(pointAlice, pointBob)
    return matriz;
    // return `Alice ${pointAlice} y Bob ${pointBob}`;
}

console.log(compareTriplets(a = [1,2,3], b = [3,2,1]));