function random(username){
    return `${username} is here`;
}
console.log(random()) //will return undefined is 


function random(username){
    if(!username){
        console.log("Please enter username")
        return
    }
    return `${username} is here`;
}
console.log(random("ritesh")) 


//Output of above execution including both functions : Second function overwrites the first one
// Please enter username 
// undefined --> in random() if block I wrote return so it returns undefined (return ka undefined hai ye)
// ritesh is here