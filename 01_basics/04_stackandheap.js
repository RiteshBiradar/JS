//Primitive datatype is stored in Stack, when you store a value of one variable in another variable, ek copy jati instead of
//that original variable, so changes made in 2nd variable don't effect 1st variable 

let var1 = "ritesh"
var2 = var1
var2="rohan"
console.log(var2)
console.log(var1)

//Non-primitive datatype, When one variable value is stored in another, changes made to second variable will effect the first 
//variable meaning they both are referring to same value

let obj1 = {
    email:"xyz@gmail.com",
    age:28
}
let obj2 = obj1;
obj2.age=18;
console.log(obj2.age)
console.log(obj1.age)