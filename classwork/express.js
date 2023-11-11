// //promises
// // const fs = require ('fs').promises;
// // //promises 
// // function writeFileWithpromises(way,data){
// //     return fs.writeFile(way,data);

// // }
// // writeFileWithpromises('out.txt', 'Hi Favor')
// // .then(()=>{
// //     console.log('File written successfully');
// // })
// // .catch(()=>{
// //     console.log(error)
// // });

// //using Callback














// // AsyncAwait

// const fs = require('fs')

// async function writefromFile(){
//     try{
//         const content = "this is a write file"
//         await fs.writeFile("./out.txt", content,(error)=>{
//             if (error){
//                 console.log(error)
//             }else{
//                 console.log("successfully")
//             }
                
//             })
    
//     }
//     catch(error){
//         console.log(error.message)
//     }
// }
// writefromFile()














// const express = require('express');
// const Port = 4040;

// const app = express();

// app.get('/', async(req, res)=>{
//     res.send('Welcome')
// })

// app.listen(PORT, ()=>{
//   console.log(`server is listening to PORT:${PORT}`);  
// })







// const http = require ("http")
// const host = "localhost"
// const port = 2005
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{"content-Type" :"txt/plain"})
// res.end("Hello World");

// });
// server.listen((port,host)=>{
//     console.log(`this server is listening to:${host} ${port}`);  


// });






// const express = require ("express");
// const Port =  2005
// const app= express()

// app.get = ('/', async (req,res )=>{
//     res.end("hello world")

// });

// app.listen(Port,()=>{
//     console.log(`this is on port:${port}`)
// })


















// 

const express = require ("express");
const Port = 2003
const app = express();
app.get('/',async(req,res)=>{
    res.send("welcome")
});
app.listen(Port,()=>{
    console.log(`this server is on port:${Port}`)
});



















