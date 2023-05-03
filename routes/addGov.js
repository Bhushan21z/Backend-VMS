const express = require("express");
const router = express();
require("../models/governmentDetails")
const mongoose = require("mongoose");
const Government = mongoose.model("GovernmentInfo");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "hasfhgasaksdasd(afjsaf0_FFSAFKLAFAS141421415asabersdiu2209r3iohrfkafa--f1we81edjaDAS9F[]ASNKU9sdasdasd"


router.post("/register", async(req, res) => {
    const { metamask, fname, email, upipin, password } = req.body;

    const encryptedPassword = await bcrypt.hash(password, 10);
    try{
        const oldGovernment = await Government.findOne({ email });
        if(oldGovernment){
            return res.json({error: "Government Exists"});
        }
        await Government.create({
            metamask,
            fname,
            email,
            upipin,
            password: encryptedPassword, 
        });
        res.send({Status: "ok"})
    }
    catch(error){
        res.send({Status: "error"})
    }
})

router.post("/login-government", async (req, res) => {
    const { email, password } = req.body;

    const government = await Government.findOne({ email }); 
    if(!government){
        return res.json({error: "User not found"});
    }
    if(await bcrypt.compare(password, government.password)){
        const token = jwt.sign({}, JWT_SECRET);

        if(res.status(201)){
            return res.json({ status: "ok", data: token });
        }
        else{
            return res.json({ status: "error"});
        }
    }
    res.json({ status: "error", error: "Invalid password" });
});

module.exports=router;
