const express=require("express");
const app=express();
require('dotenv').config()

const PORT=process.env.PORT || 4000;

app.use(express.json())

const routes=require("./routes/routes")
app.use("api/v1",routes);

app.use("/",(req,res)=>{
    res.send("This is a Homepage")
})

const dbConnect=require("./config/config")
dbConnect()

app.listen(PORT,()=> console.log("server is running successfully on PORT 3000"));