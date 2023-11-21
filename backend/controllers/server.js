require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const listRoutes = require("./routes/lists")
const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use("/api/lists", listRoutes)
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected to db and listenting to port number.")
        })
    })
    .catch((error) => {
        console.log(error)
    })