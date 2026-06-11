// Immediately Invoked Function Expressions (IIFE)


(function a (){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TO ${name}`);
} )('Nikhil')
 

 