// * Complete the 'bonAppetit' function below.
//  *
//  * The function accepts following parameters:
//  *  1. INTEGER_ARRAY bill
//  *  2. INTEGER k
//  *  3. INTEGER b
//  */


//bill es la cuenta = [];
//k : un número entero que representa el 
    //índice basado en cero del artículo que Anna no come
//b : la cantidad de dinero que Anna aportó a la cuenta

//imprimir lo que le devuelven a anna;
function bonAppetit(bill = [], k, b) {
    // Write your code here
    
    bill.splice(k,1);
    let pagar = 0;
    for(let i = 0; i < bill.length; i++){
        pagar += bill[i];
        // console.log(bill[i])
    }
    // console.log(pagar);
    pagar = pagar/2;
    let cambio = pagar-b;


    if(cambio < 0){
        
        console.log(Math.abs(cambio));
    } else if(cambio>0){
        console.log(cambio);
    } else {
        console.log("Bon Appetit");
    }
}

bonAppetit(
    bill=[4,6,8],
    k = 2,
    b = 4);