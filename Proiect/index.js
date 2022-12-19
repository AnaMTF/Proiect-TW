"use strict";

// require("dotenv").config();

// Initializare Express
const express = require("express");
const app = express();
const port = 8000;

// Initializare Sequelize
const sequelize = require("./sequelize")

//Importare modele
const Proiect = require("./models/Proiect");
const Bug = require("./models/Bug");
const MembruEchipa = require("./models/MembruEchipa");

//Definire relatie intre modele
Proiect.hasMany(Bug);
Proiect.hasMany(MembruEchipa);

//Express middleware
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

app.use("/api",require("./routes/Bug"));


//middleware pentru eroare 500
app.use((err,req,res,next)=>{
    res.status(500).json({error: "Nu a functionat."})
})

app.set("port",process.env.PORT || 8000);


//Pornire server
app.listen(8000, async ()=>{
    console.log("Serverul http://localhost:"+port+" ruleaza");
    try{
        await sequelize.authenticate();
        console.log("Conexiunea a avut succes!")
    }catch(err)
    {
        console.log("Conexiunea la baza de date a esuat",err);
    }
});


/**
 * GET pentru a sincroniza modelele cu baza de date
 */

app.get("/create", async (req, res, next) => {
    try {
      await sequelize.sync({ force: true });
      res.status(201).json({ message: "Baza de date a fost creata cu succes cu modelele." });
    } catch (err) {
      next(err);
    }
  });


/**
 * GET toate proiectele din baza de date
 */

  app.get("/proiecte", async (req, res, next) => {
    try {
      const proiecte = await Proiect.findAll();
      res.status(200).json(proiecte);
    } catch (err) {
      next(err);
    }
  });


  /**
 * POST un nou proiect in baza de date
 */

  app.post("/proiect", async (req, res, next) => {
    try {
      await Proiect.create(req.body);
      res.status(201).json({ message: "Proiect creat!" });
    } catch (err) {
      next(err);
    }
  });

/**
 * GET toti membrii echipei
 */

  app.get("/membriiEchipa", async (req, res, next) => {
    try {
      const membriiEchipa = await MembruEchipa.findAll();
      res.status(200).json(membriiEchipa);
    } catch (err) {
      next(err);
    }
  }); 


  /**
 * GET toate bug-urile din baza de date
 */

  app.get("/bugs", async (req, res, next) => {
    try {
      const bugs = await Bug.findAll();
      res.status(200).json(bugs);
    } catch (err) {
      next(err);
    }
  });

/**
 * POST un membru nou al echipei intr-un proiect
 */

  app.post("/proiecte/:proiectId/membruEchipa", async (req, res, next) => {
    try {
      const proiect = await Proiect.findByPk(req.params.proiectId);
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


  /**
 * POST un nou bug intr-un proiect
 */

  app.post("/proiecte/:proiectId/Bug", async (req, res, next) => {
    try {
      const proiect = await Proiect.findByPk(req.params.proiectId);
      if (proiect) {
        const bug = new Bug(req.body);
        bug.proiectId = proiect.id;
        await bug.save();
        res.status(201).json({ message: 'Bug-ul a fost adaugat!'});
      } else {
        res.status(404).json({ message: '404 - Proiectul nu a fost gasit!'});
      }
    } catch (error) {
      next(error);
    }
  });


  /**
 * GET toti membrii echipei dintr-un proiect folosind include
 */

  app.get("/proiecte/:proiectId/membriiEchipa", async (req, res, next) => {
    try {
        const proiect = await Proiect.findByPk(req.params.proiectId, {
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


 /**
 * GET toate bug-urile dintr-un proiect folosind include
 */

 app.get("/proiecte/:proiectId/bugs", async (req, res, next) => {
  try {
      const proiect = await Proiect.findByPk(req.params.proiectId, {
      include: [Bug]
    });
    if (proiect) {
      res.status(200).json(proiect.bug);
    } else {
      res.status(404).json({ message: '404 - Proiectul nu a fost gasit!'});
    }
  } catch(error) {
    next(error);
  }
});

  /**
 * PUT pentru a actualiza un membru al echipei dintr-un proiect
 */

app.put("/proiecte/:proiectId/membriiEchipa/:membruEchipaId", async (req, res, next) => {
  try {
    const proiect = await Proiect.findByPk(req.params.proiectId);
    if (proiect) {
      const membriiEchipa = await proiect.getMembriiEchipa({ id: req.params.membruEchipaId });
      const membruEchipa = membriiEchipa.shift();
      if (membruEchipa) {
        membruEchipa.numeMembru = req.body.numeMembru;
        membruEchipa.prenumeMembru = req.body.prenumeMembru;
        membruEchipa.emailMembru = req.body.emailMembru;
        await membruEchipa.save();
        res.status(202).json({ message: 'Membrul echipei a fost actualizat cu succes!' });
      } else {
        res.status(404).json({ message: '404 - Membrul echipei nu a fost gasit!'});
      }
    } else {
      res.status(404).json({ message: '404 - Proiectul nu a fost gasit!'});
    }
  } catch (error) {
    next(error);
  }
});


  /**
 * PUT pentru a actualiza un bug dintr-un proiect
 */

  app.put("/proiecte/:proiectId/bugs/:bugId", async (req, res, next) => {
    try {
      const proiect = await Proiect.findByPk(req.params.proiectId);
      if (proiect) {
        const bugs = await proiect.getBugs({ id: req.params.bugId });
        const bug = bugs.shift();
        if (bug) {
          bug.numeBug = req.body.numeBug;
          bug.descriereBug = req.body.descriereBug;
          bug.severitateBug = req.body.severitateBug;
          bug.prioritateBug = req.body.prioritateBug;
          await bug.save();
          res.status(202).json({ message: 'Bug-ul a fost actualizat cu succes!' });
        } else {
          res.status(404).json({ message: '404 - Bug-ul nu a fost gasit!'});
        }
      } else {
        res.status(404).json({ message: '404 - Proiectul nu a fost gasit!'});
      }
    } catch (error) {
      next(error);
    }
  });


/**
 * GET un membru al echipei dupa id dintr-o echipa anume dupa id
 */

app.get('/proiecte/:proiectId/membriiEchipa/:membruEchipaId', async (req, res, next) => {
  try {
    const proiect = await Proiect.findByPk(req.params.proiectId);
    if (proiect) {
      const membriiEchipa = await proiect.getMembriiEchipa({ id: req.params.membruEchipaId });
      const membruEchipa = membriiEchipa.shift();
      if (membruEchipa) {
        res.status(202).json(membruEchipa);
      } else {
        res.status(404).json({ message: '404 - Membrul echipei nu a fost gasit!' })
      }
    } else {
      res.status(404).json({ message: '404 - Proiectul nu a fost gasit!' })
    }
  } catch (err) {
    next(err);
  }
});


/**
 * GET un bug dupa id dintr-o echipa anume dupa id
 */

app.get('/proiecte/:proiectId/bugs/:bugId', async (req, res, next) => {
  try {
    const proiect = await Proiect.findByPk(req.params.proiectId);
    if (proiect) {
      const bugs = await proiect.getBugs({ id: req.params.bugId });
      const bug = bugs.shift();
      if (bug) {
        res.status(202).json(bug);
      } else {
        res.status(404).json({ message: '404 - Bug-ul nu a fost gasit!' })
      }
    } else {
      res.status(404).json({ message: '404 - Proiectul nu a fost gasit!' })
    }
  } catch (err) {
    next(err);
  }
});

/**
 * DELETE un membru al echipei dintr-un proiect
 */

app.delete('/proiecte/:proiectId/membriiEchipa/:membruEchipaId', async (req, res, next) => {
  try {
    const proiect = await Proiect.findByPk(req.params.proiectId);
    if (proiect) {
      const membriiEchipa = await proiect.getMembriiEchipa({ id: req.params.membruEchipaId });
      const membruEchipa = membriiEchipa.shift();
      if (membruEchipa) {
        await membruEchipa.destroy()
        res.status(202).json({ message: 'Membrul echipei a fost sters cu succes!'})
      } else {
        res.status(404).json({ message: '404 - Membrul echipei nu a fost gasit!' })
      }
    } else {
      res.status(404).json({ message: '404 - Proiectul nu a fost gasit!' })
    }
  } catch (err) {
    next(err);
  }
});


/**
 * DELETE un bug dintr-un proiect
 */

app.delete('/proiecte/:proiectId/bugs/:bugId', async (req, res, next) => {
  try {
    const proiect = await Proiect.findByPk(req.params.proiectId);
    if (proiect) {
      const bugs = await proiect.getBugs({ id: req.params.bugId });
      const bug = bugs.shift();
      if (bug) {
        await bug.destroy()
        res.status(202).json({ message: 'Bug-ul a fost sters cu succes!'})
      } else {
        res.status(404).json({ message: '404 - Bug-ul nu a fost gasit!' })
      }
    } else {
      res.status(404).json({ message: '404 - Proiectul nu a fost gasit!' })
    }
  } catch (err) {
    next(err);
  }
});


/**
 * DELETE un proiect
 */

app.delete('/proiecte/:proiectId', async (req, res, next) => {
  try {
    const proiecte = await proiect.getProiect({ id: req.params.proiectId });
    const proiect = proiecte.shift();
    if (proiect) {
      await proiect.destroy()
        res.status(202).json({ message: 'Proiectul a fost sters cu succes!'})
      } else {
        res.status(404).json({ message: '404 - Proiectul nu a fost gasit!' })
      }
  } catch (err) {
    next(err);
  }
});
