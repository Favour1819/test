// setTimeout(() => {
//     console.log("backend,12")
// }, 4000);




//using callback to implement an asynchronous program
// import the fs module 

const fs = require ('fs');

// get the document 
let myDocument = "/.callbacktest.txt";

// implement the read operation with a callback
fs.readFile(myDocument, "utf8", (error, data)=>{
    if(error){
        console.log("message:",error);
        console.log ("message:unbale to read file" +myDocument);

    }
    else{
        console.log(data);
    }
});