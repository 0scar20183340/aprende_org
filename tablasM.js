

console.log("REQUERIMIENTOS")
function tablas (nTabla){
    console.log(`${nTabla} * 1 = ${nTabla*1}`)
    console.log(`${nTabla} * 2 = ${nTabla*2}`)
    console.log(`${nTabla} * 3 = ${nTabla*3}`)
    console.log(`${nTabla} * 4 = ${nTabla*4}`)
    console.log(`${nTabla} * 5 = ${nTabla*5}`)
    console.log(`${nTabla} * 6 = ${nTabla*6}`)
    console.log(`${nTabla} * 7 = ${nTabla*7}`)
    console.log(`${nTabla} * 8 = ${nTabla*8}`)
    console.log(`${nTabla} * 9 = ${nTabla*9}`)
    console.log(`${nTabla} * 10 = ${nTabla*10}`)
}
tablas(3);

console.log("CICLO")
function tablas2(nTabla){
    for(let i = 1; i < 11; i++){
        console.log(`${nTabla} * ${i} = ${nTabla * i}`);
    }
}
tablas2(3);