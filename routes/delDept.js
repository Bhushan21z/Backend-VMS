const express = require("express");
const router = express();
require("../models/departmentDetails")
const mongoose = require("mongoose");
const Department = mongoose.model("DepartmentInfo");

router.post("/deleteDept", async(req, res) => {
    const {deptid} = req.body;
    try {
        Department.deleteOne(
            {_id: deptid}, function(err, res){
                console.log(err);
            }
        );
        res.send({ status: "ok", data: "Deleted" });
    }   
    catch (error) {
        console.log(error);
    }
})

module.exports=router;