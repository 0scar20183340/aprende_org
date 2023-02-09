function simpleArraySum(ar = []) {
    // Write your code here
   

    let aux = 0;
    for(let i of ar){
        aux += i;
    }
    return aux;
   

}

console.log(simpleArraySum(ar = [1,2,3,4,10,11]));