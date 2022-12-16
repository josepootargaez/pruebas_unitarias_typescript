import express  from "express";
const app= express();

app.get("/ping",(req,res)=>{
    res.status(200).json({status:true})
});

app.post("/createUser",(req,res)=>{
    res.status(201).json({status:true})
})

app.patch("/updateUser/:id",(req,res)=>{
    res.status(204).json({status:true})
})
app.delete("/deleteUser/:id",(req,res)=>{
    res.status(204).json({status:true})
})
 app.listen(2000);
console.log("Server is running on port 2000");

module.exports= app;
