import express from 'express';
const app = express();

app.use("/api/test",(req,res)=>{
    res.send("It works")
})

app.listen(8800,()=>{
    console.log("Server is running")
})

// 
// 12:56
// https://youtu.be/eJ3YysWaP_A?t=776