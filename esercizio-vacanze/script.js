/* Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.
 */


let arr=['ciao', 'hello', 'hola', 7, true, 'world', 'mondo', 'mundo', 1, 2, 100, 10000]

let a=3;

let b = 10;




function rangeTarget(a, b, array){
    
    let newArr = [];
    array.forEach(element => {
        let target = array.indexOf(element);
        if((target>=a)&&(target<b)){
           newArr.push(element)
        }

    });

    return console.log(array, newArr)
} 



function init(){
    rangeTarget( a, b, arr)
}
$(init);