import express from "express";

const app = express();

const port = 8081;

app.listen(port, () => {console.log(`Server is running on port ${port}`)})

app.get("/hello", (req,res)=>{
    console.log("consola pe ruta de hello")
    res.send("Hello!")
})