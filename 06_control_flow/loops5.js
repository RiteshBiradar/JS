const arr = [1,2,3,4,5,6]

//We can't use filter here because it returns a boolean value, so use map instead to modify elements
const newNum = arr.map((item)=> item+10)
//console.log(newNum);


//Chaining
const num = arr
            .map((item)=>item*10)
            .map((item)=>item+1)
            .filter((item)=> item>=31)
console.log(num)

