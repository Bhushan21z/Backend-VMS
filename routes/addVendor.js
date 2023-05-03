// const express = require("express");
// const router = express();
// require("../models/vendorDetails")
// const mongoose = require("mongoose");
// const Vendor = mongoose.model("VendorInfo");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const JWT_SECRET = "hasfhgasaksdasd(afjsaf0_FFSAFKLAFAS141421415asabersdiu2209r3iohrfkafa--f1we81edjaDAS9F[]ASNKU9sdasdasd"


// router.post("/register", async(req, res) => {
//     const { metamask, fname, department, email, mobile, address, password } = req.body;

//     const encryptedPassword = await bcrypt.hash(password, 10);
//     try{
//         const oldVendor = await Vendor.findOne({ email });
//         if(oldVendor){
//             return res.json({error: "Vendor Exists"});
//         }
//         await Vendor.create({
//             metamask,
//             fname,
//             department,
//             email,
//             mobile,
//             address,
//             password: encryptedPassword, 
//         });
//         res.send({Status: "ok"})
//     }
//     catch(error){
//         res.send({Status: "error"})
//     }
// })

// router.post("/login-vendor", async (req, res) => {
//     const { email, password } = req.body;

//     const vendor = await Vendor.findOne({ email }); 
//     if(!vendor){
//         return res.json({error: "User not found"});
//     }
//     if(await bcrypt.compare(password, vendor.password)){
//         const token = jwt.sign({}, JWT_SECRET);

//         if(res.status(201)){
//             return res.json({ status: "ok", data: token });
//         }
//         else{
//             return res.json({ status: "error"});
//         }
//     }
//     res.json({ status: "error", error: "Invalid password" });
// });

// module.exports=router;


const express = require("express");
const router = express();
require("../models/vendorDetails")
const mongoose = require("mongoose");
const Vendor = mongoose.model("VendorInfo");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "hasfhgasaksdasd(afjsaf0_FFSAFKLAFAS141421415asabersdiu2209r3iohrfkafa--f1we81edjaDAS9F[]ASNKU9sdasdasd"


router.post("/register", async(req, res) => {
    const { metamask, fname, department, email, mobile, address, password } = req.body;

    try{
        const oldVendor = await Vendor.findOne({ email });
        if(oldVendor){
            return res.json({error: "Vendor Exists"});
        }
        await Vendor.create({
            metamask,
            fname,
            department,
            email,
            mobile,
            address,
            password, 
        });
        res.send({Status: "ok"})
    }
    catch(error){
        res.send({Status: "error"})
    }
})

router.post("/login-vendor", async (req, res) => {
    const { email, password } = req.body;

    const vendor = await Vendor.findOne({ email }); 
    if(!vendor){
        return res.json({error: "User not found"});
    }
    if(password === vendor.password){
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
