//Check out objects notes to learn about more important things


const Jsuser = {
    name : "Ritesh", //By default name string raheta 
    age : 18,
    isAvailable : false,
    "Address State" : "Telangana"
}


// Two ways of accessing the elements 
console.log(Jsuser.name)
console.log(Jsuser["name"])


// Can't access address with . method, but . method is used more jaha nahi karsakte use it
// console.log(Jsuser.Address State) throws missing ) argument error
console.log(Jsuser["Address State"])


//Tofreeze things
//Object.freeze(Jsuser)
Jsuser.name = "Rohan"
console.log(Jsuser)


//Functions in Object
Jsuser.greeting = function(){
    console.log(`Hello World, I am ${this.name}`)
}
console.log(Jsuser.greeting) //Output [Function (anonymous)]
console.log(Jsuser.greeting()) //Output Hello World
