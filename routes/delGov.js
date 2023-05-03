const express = require("express");
const router = express();
require("../models/governmentDetails")
const mongoose = require("mongoose");
const Government = mongoose.model("GovernmentInfo");

router.post("/deleteGov", async(req, res) => {
    const {govid} = req.body;
    try {
        Government.deleteOne(
            {_id: govid}, function(err, res){
                console.log(err);
            }
        );
        res.send({ status: "ok", data: "Deleted" });
    }   
    catch (error) {
        console.log(error);
    }
})

// router.post('/deleteGov', async (req, res) => {
//     try {
//       const { govid } = req.body;
//       const deletedGov = await Government.findByIdAndDelete(govid);
//       if (deletedGov) {
//         res.json({ message: 'Government official deleted successfully.' });
//       } else {
//         res.status(404).json({ message: 'Government official not found.' });
//       }
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Server Error' });
//     }
//   });

module.exports=router;