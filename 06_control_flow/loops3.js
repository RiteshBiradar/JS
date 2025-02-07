//forEach 

const arr = ["a","b","c","d"];

//using Normal function
arr.forEach( function(item){ //as this is a call back function then no need of function name
    //console.log(item);
})


//using Arrow function
arr.forEach( (item)=>{
    //console.log(item)
})


//reference to a function
arr.forEach(printMe) //Why this work? Hoisting 
function printMe(item){
    //console.log(item)
}


arr.forEach((item,index,arr)=>{
    console.log(item,index,arr) //a 0 [ 'a', 'b', 'c', 'd' ] order of item,index,arr can't be changed and the variable name can be changed
})