console.log(addOne(5))

function addOne(num){
    return num+1
}


addTwo(5) // throws error Cannot access addTwo before initilizaton 

//addTwo is also called expression as it holds a function
const addTwo = function(num){
    return num+1
}