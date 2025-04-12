const express=require('express');
const app=express();
require("dotenv").config();
const PORT=process.env.PORT || 4000;
app.use(express.json())


const todoRoutes=require("./routes/routes")
app.use("/api/v1",todoRoutes); 

// start server 
app.listen(PORT,()=>{
    console.log("App is running successfully ")
})

// connect to the database
const dbConnect=require("./config/db");
dbConnect();

// it is necessary to create default route
app.get("/",(req,res)=>{
    res.send("This is homepage")
})