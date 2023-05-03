const express = require("express");
const router = express();
require("../models/governmentDetails")
const mongoose = require("mongoose");
const Government = mongoose.model("GovernmentInfo");

router.get("/getAllGov", async(req, res) => {
    try {
        const allGov = await Government.find({});
        res.send({ status: "ok", data: allGov });
    }   
    catch (error) {
        console.log(error);
    }
})

module.exports=router;