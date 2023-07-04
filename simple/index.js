const http  = require('http');
const server = http.createServer((req,res)=>{
    res.end("Hello from the server")
});

//port,address, callback function executed when server connected successfully
server.listen(8000,"localhost",()=>{
    console.log("Server started successfully");    
});
