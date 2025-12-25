const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    name:String,
    mobile:Number,
    email:String
})

module.exports = mongoose.model("Contact",contactSchema)
