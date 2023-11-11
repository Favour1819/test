// working with async/Await
// import the file system module

const fs = require ("fs")


async function readFromFile (){
    try{

    await fs.readFile("./testFile.txt", "utf8", (error, data)=>{
        if(error){
            console.log("this file dosent exit")
        }else{
            console.log(data)
        }
    })

    }catch(e){
        console.log(e)
    }   
}
readFromFile()