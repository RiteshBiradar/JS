//Falsy values
//false, 0, -0, BigInt 0n, "", null, undefined, NaN


//Truthy values
//"0", 'false', [], function(){}, {}


//How to check array is empty or not

const arr = [];
if(arr.length==0){
    console.log("Array is empty")
}


//How to check object is empty or not

const obj = {}
if(Object.keys(obj).length==0){    //Object.keys(obj) this will return a array of keys 
    console.log("Object is empty")
}


// Nullish coalescing operator (Basically check karta ki if value jo aayi has some value, then assign karden variable ko or else assign null)

let var1 = 5??10
console.log(var1) //5

var1 = null??10
console.log(var1) //10

var1 = undefined??null //null
var1 = null??undefined //undefined
console.log(var1)