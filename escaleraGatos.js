





// let staircase= (n) => {
//     // Write your code here

// let espacio = new Array(n);  
// let indice = n;

// for(let i=0; i < n; i++){
//         // escalera.unshift("#");
//         // console.log(escalera.join(""));
//         indice -=1;
//         espacio[indice] = "#";
//         console.log(espacio.join(" "));

    
//     }

// }


let staircase= (n) => {
    // Write your code here

// let array = [" "," "," "," "," "," "];
let array = new Array(n);
array.fill(" ");

for(let i=n; i > 0; i--){
    array.splice(i-1, 1, "#");
    // array.shift();
    console.log(array.join(""));
    // let to =array.toString();
    // console.log(to.replace(/\,/g, ''));
    }

}


// function staircase2 (n) {
//     let espacios = n - 1; // indicates spaces (starts)
//     let asterisco = 1; // indicates symbol (starts with 1)
//     for(let i = 0; i < n; i++) { // for line
//         let cadena_renglon = "";
//         for(let j = 0; j < espacios; j++) { // for spaces
//             cadena_renglon += " ";
//         }
//         for (let k = 0; k < asterisco; k++) { // for symbol
//             cadena_renglon += "#";
//         }
//         asterisco++; // increase symbols
//         espacios--; // decrease spaces
//         console.log(cadena_renglon);
//     }
// }
staircase(6);