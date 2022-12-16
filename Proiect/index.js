"use strict";

// require("dotenv").config();
const express = require("express");
const sequelize = require("./sequelize")
const Proiect = require("./models/Proiect");
const Bug = require("./models/Bug");
const MembruEchipa = require("./models/MembruEchipa");
const { noExtendRight } = require("sequelize/types/lib/operators");
const { application } = require("express");
const app = express();
Proiect.hasMany(Bug);
Proiect.hasMany(MembruEchipa);


app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

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

app.get("/create", async (req, res, next) => {
    try {
      await sequelize.sync({ force: true });
      res.status(201).json({ message: "Baza de date a fost creata cu succes cu modelele." });
    } catch (err) {
      next(err);
    }
  });

  app.get("/proiecte", async (req, res, next) => {
    try {
      const proiecte = await Proiect.findAll();
      res.status(200).json(proiecte);
    } catch (err) {
      next(err);
    }
  });

  app.post("/proiect", async (req, res, next) => {
    try {
      await Proiect.create(req.body);
      res.status(201).json({ message: "Proiect creat!" });
    } catch (err) {
      next(err);
    }
  });

  app.get("/membriiEchipa", async (req, res, next) => {
    try {
      const membriiEchipa = await MembruEchipa.findAll();
      res.status(200).json(membriiEchipa);
    } catch (err) {
      next(err);
    }
  }); 

  app.post("/proiecte/:proiecteId/membriiEchipa", async (req, res, next) => {
    try {
      const proiect = await Proiect.findByPk(req.params.universityId);
      if (proiect) {
        const membruEchipa = new MembruEchipa(req.body);
        membruEchipa.proiectId = proiect.id;
        await membruEchipa.save();
        res.status(201).json({ message: 'Membrrul echipei a fost adaugat!'});
      } else {
        res.status(404).json({ message: '404 - Proiectul nu a fost gasit!'});
      }
    } catch (error) {
      next(error);
    }
  });

  app.get("/proiecte/:proiecteId/membriiEchipa", async (req, res, next) => {
    try {
        const proiect = await Proiect.findByPk(req.params.universityId, {
        include: [MembruEchipa]
      });
      if (proiect) {
        res.status(200).json(proiect.membruEchipa);
      } else {
        res.status(404).json({ message: '404 - Proiectul nu a fost gasit!'});
      }
    } catch(error) {
      next(error);
    }
  });
