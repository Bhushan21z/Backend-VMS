const mongoose = require("mongoose");

const DepartmentDetailsSchema = new mongoose.Schema(
    {
        metamask: String,
        fname: String,
        government: String,
        govmetamaskid: String,
        email: String,
        upipin: String,
        password: String,
    },
    {
        collection: "DepartmentInfo",
    }
);

mongoose.model("DepartmentInfo", DepartmentDetailsSchema);