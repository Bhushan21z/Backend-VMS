const express = require("express");
const router = express();
require("../models/vendorDetails")
const mongoose = require("mongoose");
const Vendor = mongoose.model("VendorInfo");

router.post("/deleteVendor", async(req, res) => {
    const {vendorid} = req.body;
    try {
        Vendor.deleteOne(
            {_id: vendorid}, function(err, res){
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