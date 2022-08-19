/*
var tab1 = [2,6,3,4,9,10]
//console.log(tab1);

return resultat = tab1 * 2;

function showlast(tab1){
    return tab1(tab1(length-1));
}

var tab1 = [2,6,3,4,9,10];
for (var k = 0 ; k <= tab1.length;k++);
var resultat = tab1[k*2];

 var tab1 = [2,6,3,4,9,10];
 for (let i = 0;i <= tab1.length ;i--){
    
    console.log(tab1(length-1))
 
 }
*/
correction_________

var tab1 = [1, 2, 3, 4];
console.log(tab1)

//tab(i*2)
var tab2 = []
for(let i =0; i<= tab1.length-1;i++){
    tab2.push(tab1[i]*2)   
}
console.log(tab2)


//showlast

function showlast(tab1){

    return tab1.pop()
}
console.log(showlast(tab1))


var tab3 = []
for(let i= tab1.length-1 ; i>= 0; i--){
    tab3.push(tab1[i])
}
console.log(tab3)