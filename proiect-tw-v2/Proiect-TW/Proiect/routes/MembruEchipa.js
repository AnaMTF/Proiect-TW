const MembruEchipa = require("../models/MembruEchipa");

const router = require("express").Router();

router.route("/MembruEchipa").get(async(req,res)=>{
    try{
        const membruEchipa = await MembruEchipa.findAll();
        return res.status(200).json(MembruEchipa);
    }
    catch(err)
    {
        return res.status(500).json(err);
    }
}).post(async (req,res)=>{
    try{
        const newmembruEchipa = await MembruEchipa.create(req.body);
        return res.status(200).json(newmembruEchipa)
    }
    catch(err)
    {
        return res.status(500).json(err)
    }
})

module.exports = router;