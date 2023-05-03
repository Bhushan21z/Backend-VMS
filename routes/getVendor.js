const express = require("express");
const router = express();
require("../models/vendorDetails")
const mongoose = require("mongoose");
const Vendor = mongoose.model("VendorInfo");

router.get("/getAllVendor", async(req, res) => {
    try {
        const allVendor = await Vendor.find({});
        res.send({ status: "ok", data: allVendor });
    }   
    catch (error) {
        console.log(error);
    }
})

module.exports=router;