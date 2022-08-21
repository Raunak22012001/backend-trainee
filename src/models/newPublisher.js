const mongoose = require('mongoose')

const newpublisherSchema2 = new mongoose.Schema({

    name: String,
    headQuarter: String,


}, { timestamps: true })

module.exports = mongoose.model("newPublisher", newpublisherSchema2)