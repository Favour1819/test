// // import the module
// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// // create a server
// const server = http.createServer((req, res) => {
// //   // get the path specified from the request url
// //   const filePath = path.join(__dirname, "static", req.url);
// //   fs.exists(filePath, (fileExist) => {
// //     if (fileExist) {
// //       // read the file
// //       fs.readFile(filePath, "utf8", (err, data) => {
// //         if (err) {
// //           res.writeHead(500, { "Content-Type": "text/plain" });
// //           res.end("Server error");
// //         } else {
// //           // pass the content of the file here
// //           const contentType = getContentType(filePath);
// //           res.writeHead(200, { "Content-Type": contentType });
// //           res.end(data);
// //         }
// //       });
// //     } else {
// //       res.writeHead(404, { "Content-Type": "text/plain" });
// //       res.end("This file does not exist.");
// //     }
// //   });
// // });

// // // create a dynamic function for tracking file extensions using the switch
// // const getContentType = (filePath) => {
// //   // get the extension name
// //   const extensionName = path.extname(filePath);
// //   // switch the extension names
// //   switch (extensionName) {
// //     case "html":
// //       return "text/html";
// //     case "js":
// //       return "application/javascript";
// //     case "css":
// //       return "text/css";
// //     case "txt":
// //       return "text/plain";
// //     case "jpeg":
// //       return "image/jpeg";
// //     default:
// //       return "application/octet-stream";
// //   }
// // };

// // const port = 2000
// // server.listen(port, ()=>{
// //     console.log(`Server is listening on: http://localhost:${port}`)
// // }) ;






//  const express = require("express");
//  const fs = require("fs");
//  const path = require("path");
//  const Port = 2005;
// const app = express();

//  app.use(express.static("static"));

// app.get('/*', (req, res) => {
//   const filepath = path.join(__dirname, req.url);
//   fs.exists(filepath, (fileExists) => {
//   if (fileExists) {
//    fs.readFile(filepath, "utf8", (error, data) => {
//      if (error) {
//         res.status(500)
//         res.send("Server error");
//       } else {    
//     // Determine the content type based on file extension
//       const contentType = getContentType(filepath);
//    res.status(200);
//       res.send(data);
//      });
//    } else {
//     res.status(404)
//      res.send("File not found");
//   });
// });









const express = require("express");
const fs = require("fs");
const path = require("path");
const Port = 2006;
const app = express();

app.use(express.static("static"));

app.get('*', (req, res) => {
  const filepath = path.join(__dirname, req.url);
  fs.exists(filepath, (fileExists) => {
    if (fileExists) {
      fs.readFile(filepath, "utf-8", (error, data) => {
        if (error) {
          res.status(500)
          res.send("Server error");
        } else {
          // Determine the content type based on file extension
          // const contentType = getContentType(filepath);
           res.status(200,{"content-Type": "contentType"});
          res.send(data);
        }
      });
    } else {
      res.status(404)
      res.send("File not found");
    }
  });
});

// Create a dynamic function for tracking file extensions using a switch
const getContentType = (filePath) => {
  const extensionName = path.extname(filePath).toLowerCase();
  switch (extensionName) {
    case ".html":
      return "text/html";
    case ".js":
      return "application/javascript";
    case ".css":
      return "text/css";
    case ".txt":
      return "text/plain";
    case ".jpeg":
    case ".jpg":
      return "image/jpeg";
    default:
      return "application/octet-stream";
  }
};
app.listen(Port, () => {
  console.log(`Server is running on http://localhost:${Port}`);
});


