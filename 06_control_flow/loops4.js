//A forEach loop doesn't have  any return value

const array = [1,2,3,4,5]

// const num = array.forEach((item) => {
//         console.log(item)
//         return item // this doesn't return anything , forEach doesn't return any value  
// });
// console.log(num)


//Filters
//Implicit Return
const num = array.filter((item)=> item>1)
console.log(num)

//Explicit return
const newNum = array.filter((item)=>{ //Whenever we open this scope we need to use the return keyword
    return item>4
})
console.log(newNum)


//Another way to return using forEach
const newN = []
array.forEach((item)=>{
    if(item>1){
        newN.push(item)
    }
})
console.log(newN)