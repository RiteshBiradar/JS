//Syntax - 1 Explicit return

const user = (num1,num2) =>{
    return num1+num2
}
console.log(user(3,4));


//Syntax - 2 Implicit return

const imp = (num1,num2) => num1+num2 //num1,num2 doesn't work
console.log(imp()) //Outputs NaN because both num1 and num2 are undefined so performing operation on them results in NaN
//console.log(imp(3,4)) 

//Or

const obj = (num1,num2) => (num1,num2) //this causes return of undefined
console.log(obj()) //return undefined because it considers only last element that is undefined
console.log(obj(2,13)) //return 13

//to pass object
const object = (num1,num2) => ({name:"ritesh"})
console.log(object(3,4)) //returns name:"ritesh" 