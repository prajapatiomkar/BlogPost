require("dotenv").config()
const bodyParser = require("body-parser")
const express = require("express");
const connect = require("./config/db")
const router =  require("./routes/userRoutes")
const app = express()

// Connecting MongoDB Database
connect();
app.use(bodyParser.json());
// ("/") === ("/register")
app.use("/",router);
const PORT = process.env.PORT 
app.listen(PORT, () => {
    console.log("Your app is running...")
})