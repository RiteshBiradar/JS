const user = {
    name:"ritesh",
    welcome : function(){
        console.log(`Hello ${this.name}`) //referring to the current name
        console.log(this) //output { name: 'ritesh', welcome: [Function: welcome] }
    }
}
user.welcome();
user.name="sam"
user.welcome();


//Nodejs vs Windows
console.log(this) //returns {}
console.log(this) //in the browser console will return windows


//this keyword in function
function ok(){
    let username = "ritesh"
    console.log(this.username)//returns undefined, function ko bind karna padta with this using .apply() or .call()
    console.log(this) //bada kuch value return karta
}
ok();


//this keyword in arrow function
const arrow = () =>{
    let username = "ritesh"
    console.log(this.username) //returns undefined
    console.log(this) //return {} empty string
}
arrow()