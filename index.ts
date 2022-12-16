import express  from "express";
const app= express();

app.get("/ping",(req,res)=>{
    res.send("hola");
})
 app.listen(2000);
console.log("Server is running on port 2000");

module.exports= app;
