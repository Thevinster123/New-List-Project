const Lists = require('./models/listModel')
const mongoose = require('mongoose')

// get all lists 
const getLists = async (req, res) => {
    const lists = await Lists.find({}).sort({createdAt: -1})

    res.status(200).json(lists)
}


const createList = async (req, res) => {
    const {title, dueDate, description, pinned} = req.body

    let emptyFields = []

    if(!title){
        emptyFields.push("title")
    }
    if(!dueDate){
        emptyFields.push("dueDate")
    }
    if(!description){
        emptyFields.push("description")
    }
    if(!pinned){
        emptyFields.push("pinned")
    }
    if(emptyFields.length > 0){
        return res.status(400).json({error: "Please fill in all fields", emptyFields})
    }

    try{
        const list = await Lists.create({title, dueDate, description, pinned})
        res.status(200).json(list)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getLists,
    createList
}