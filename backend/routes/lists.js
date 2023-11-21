const express = require("express")
const {
    getLists,
    createList
} = require("../controllers/listController")

const router = express.Router()

router.get("/", getLists)

router.post("/", createList)

module.exports = router