const Proiect = require("../models/Proiect");

const router = require("express").Router();

router.route("/Proiect").get(async(req,res)=>{
    try{
        const proiect = await Proiect.findAll();
        return res.status(200).json(Proiect);
    }
    catch(err)
    {
        return res.status(500).json(err);
    }
}).post(async (req,res)=>{
    try{
        const newProiect = await Proiect.create(req.body);
        return res.status(200).json(newProiect)
    }
    catch(err)
    {
        return res.status(500).json(err)
    }
})

module.exports = router;