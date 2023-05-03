const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());

const mongoUrl = "mongodb+srv://saber:SABERkj90@cluster0.ciwj8cy.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoUrl, {
    useNewUrlParser:true
})
.then(() => {console.log("Connected to database");})
.catch((e) => console.log(e));

app.listen(8000, () => { //8000
    console.log("Server Started");
})

// vendor
const VendorModel= require("./models/vendorDetails");
const addVendor = require("./routes/addVendor");
app.use('/add-vendor', addVendor);

const getVendor = require("./routes/getVendor");
app.use('/get-vendor', getVendor); 

const delVendor = require("./routes/delVendor");
app.use("/del-vendor", delVendor);

// government
const GovernmentModel= require("./models/governmentDetails");
const addGov = require("./routes/addGov");
app.use('/add-government', addGov);

const getGov = require("./routes/getGov");
app.use('/get-gov', getGov); 

const delGov = require("./routes/delGov");
app.use("/del-gov", delGov);

// department 
const DepartmentModel= require("./models/departmentDetails");
const addDept = require("./routes/addDept");
app.use('/add-department', addDept);

const getDept = require("./routes/getDept");
app.use('/get-dept', getDept); 

const delDept = require("./routes/delDept");
app.use("/del-dept", delDept);

module.exports = app;

