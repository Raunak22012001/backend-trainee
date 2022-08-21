const newpublisherSchema = require("../models/newPublisher")

const createnewPublisher = async function(req,res){
    let mydata = req.body
    let data = await newpublisherSchema.create(mydata)
    res.send({msg : data})
}

const getPublisher = async function(req,res){
    let myPublisher= await newpublisherSchema.find()
    res.send({msg : myPublisher})
}

module.exports.createnewPublisher = createnewPublisher
module.exports.getPublisher = getPublisher