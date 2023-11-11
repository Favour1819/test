const fs = require('fs')
const myfile = "./out.txt";

fs.writeFile(myfile,"favour file", (error)=>{
    if(error){
        console.log("it file doesnot exit")
    }
    else{
        console.log('Favour"s File')
    }
});

