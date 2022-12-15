"use strict";

// require("dotenv").config();
const express = require("express");
const sequelize = require("./sequelize")
require("./models/Proiect");
require("./models/Bug");
require("./models/MembruEchipa");

const app = express();
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json);

app.use("/api",require("./routes/Bug"));

app.use((err,req,res,next)=>{
    res.status(500).json({error: "Nu a functionat."})
})

app.set("port",process.env.PORT || 8000);

app.listen(8000, async ()=>{
    console.log("Serverul http://localhost:8000");
    try{
        await sequelize.authenticate();
        console.log("Conexiunea a avut succes!")
    }catch(err)
    {
        console.log("Conexiunea la baza de date a esuat",err);
    }
});

