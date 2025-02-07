//Named IIFE
(function name(){
    console.log("ritesh");
})();


//Simple IIFE
(function name(){
    console.log("ritesh");
})(); // Don't forget to add ; other function() doesn't no when to end 


((name)=>{
    console.log(`${name} is here`);
})('ritesh');