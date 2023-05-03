const mongoose = require("mongoose");

const GovernmentDetailsSchema = new mongoose.Schema(
    {
        metamask: String,
        fname: String,
        email: String,
        upipin: String,
        password: String,
    },
    {
        collection: "GovernmentInfo",
    }
);

mongoose.model("GovernmentInfo", GovernmentDetailsSchema);