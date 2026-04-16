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
        <h1>This is my Complete Working CICD Pipeline</h1>
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

app.get("/login-in",(req,res)=>{
    res.send(
        `
        <h1>user LogIn Successfully.</h1>
        `
    )
})

app.get("/login-out",(req,res)=>{
    res.send(
        `
        <h1>Log Out User Sucessfully.</h1>
        `
    )
})


app.listen(PORT,()=>{
    console.log("Server Is Running on http://localhost:"+PORT);    
})