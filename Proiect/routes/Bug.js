const Bug = require("../models/Bug");

const router = require("express").Router();

router.route("/Bug").get(async(req,res)=>{
    try{
        const bug = await Bug.findAll();
        return res.status(200).json(Bug);
    }
    catch(err)
    {
        return res.status(500).json(err);
    }
}).post(async (req,res)=>{
    try{
        const newBug = await Bug.create(req.body);
        return res.status(200).json(newBug)
    }
    catch(err)
    {
        return res.status(500).json(err)
    }
})

module.exports = router;