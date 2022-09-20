require("dotenv").config()
const mongoose = require("mongoose")

module.exports = connect = async () => {
    try {
        const response = await mongoose.connect(process.env.URL);
        console.log("Connection Created");
    } catch (error) {
        console.log(error)
    }
}