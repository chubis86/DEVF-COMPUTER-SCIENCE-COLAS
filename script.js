/* 
1.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra.
*/
console.log("1.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra.");

const original= [ "amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"];
const cola1= [];
const cola2= [];

for(let i=1; i<=original.length;i++ ){
    if(i%2!=0){
        cola1.push(original[i-1]);
    }
    else{
        cola2.push(original[i-1]);
    }
}

console.log("ARREGLO ORIGINAL:");
console.log(original);
console.log("COLA 1:");
console.log(cola1);
console.log("COLA 2:");
console.log(cola2);

/* 
   2.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, llegada la hora de inicio hay muchos “colados”, es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira. 
*/

console.log("2.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, llegada la hora de inicio hay muchos 'colados', es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final. Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.\b");


const cola= [ 
    { user:'User1', ticket:true }, 
    { user:'User2', ticket:true },
    { user:'User3', ticket:false },
    { user:'User4', ticket:true },
    { user:'User5', ticket:false },
    { user:'User6', ticket:false },
    { user:'User7', ticket:true },
    { user:'User8', ticket:true },
    { user:'User9', ticket:true },
    { user:'User10', ticket:false },
    { user:'User11', ticket:true },
];

console.log("ARREGLO ORIGINAL:");
console.log(cola);

//Con este procedimiento podemos obtener el arreglo con tickets true

/* 
const temporal = [];
for(let i=cola.length-1; i>=0; i--){
    if(cola[i].ticket){
        temporal.push(cola[i]);
    }
}
console.log(temporal); */

//Con este procedimiento simulamos más el proceso sugerido por el problema

//Copiamos el arreglo
const temporal2 =[];
cola.forEach(function(numero) {
   temporal2.push(numero);
});


//Vaciamos arreglo cola
let dimension= cola.length;

for(let j=0; j<dimension;j++){
    cola.pop();
}


//pasamos del arreglo de apoyo al arreglo origianl solo los valores con ticket=true
temporal2.forEach(function(numero) {
    if(numero.ticket){
        cola.push(numero);
    }
});


//Imprimimos el arreglo cola final
console.log("ARREGLO COLA FINAL:");
console.log(cola);