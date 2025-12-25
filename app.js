const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const contactRoutes = require("./routes/contactRoutes")

const app = express()

app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.send("home")
})

app.use("/api/contact",contactRoutes)


app.listen(5000,()=>{
    console.log("listening on port");
})

async function db() {
    try {
        const res = await mongoose.connect("mongodb+srv://adityapisal:adityapisal@cluster0.i39llby.mongodb.net/?appName=Cluster0")
        console.log(res.default.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}
db()