const express = require("express");
const router = express();
require("../models/departmentDetails")
const mongoose = require("mongoose");
const Department = mongoose.model("DepartmentInfo");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "hasfhgasaksdasd(afjsaf0_FFSAFKLAFAS141421415asabersdiu2209r3iohrfkafa--f1we81edjaDAS9F[]ASNKU9sdasdasd"


router.post("/register", async(req, res) => {
    const { metamask, fname, government, govmetamaskid, email, upipin, password } = req.body;

    const encryptedPassword = await bcrypt.hash(password, 10);
    try{
        const oldDepartment = await Department.findOne({ email });
        if(oldDepartment){
            return res.json({error: "Department Exists"});
        }
        await Department.create({
            metamask,
            fname,
            government,
            govmetamaskid,
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

router.post("/login-department", async (req, res) => {
    const { email, password } = req.body;

    const department = await Department.findOne({ email }); 
    if(!department){
        return res.json({error: "User not found"});
    }
    if(await bcrypt.compare(password, department.password)){
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
