const mongoose = require('mongoose')
const Schema = mongoose.Schema

const listSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    dueDate:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    pinned:{
        type: Boolean,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("Lists", listSchema)