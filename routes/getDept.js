const express = require("express");
const router = express();
require("../models/departmentDetails")
const mongoose = require("mongoose");
const Department = mongoose.model("DepartmentInfo");

router.get("/getAllDept", async(req, res) => {
    try {
        const allDept = await Department.find({});
        res.send({ status: "ok", data: allDept });
    }   
    catch (error) {
        console.log(error);
    }
})

module.exports=router;