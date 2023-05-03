const mongoose = require("mongoose");

const VendorDetailsSchema = new mongoose.Schema(
    {
        metamask: String,
        fname: String,
        department: String,
        email: String,
        mobile: String,
        address: String,
        password: String,
    },
    {
        collection: "VendorInfo",
    }
);

mongoose.model("VendorInfo", VendorDetailsSchema);