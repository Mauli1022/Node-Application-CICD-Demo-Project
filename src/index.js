import express from "express"
import dotenv from "dotenv"

const app = express();
dotenv.config({
    path : "./.env"
})


const PORT = process.env.PORT ?? 8000

app.get("/",(req,res)=>{
    res.send(
        `
        <h1>This is My Cicd Demo Project</h1>
        `
    )
})
app.get("/message",(req,res)=>{
    res.send(
        `
        <h1>This is my New Route Which Gives us Message Hello World</h1>
        `
    )
})




app.listen(PORT,()=>{
    console.log("Server Is Running on http://localhost:"+PORT);    
})