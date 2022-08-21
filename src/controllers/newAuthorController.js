const newAuthormodel=require("../models/newAuthor")

const createAuthor=async function(req,res){

const data=req.body
let saveData=await newAuthormodel.create(data)
res.send({msg:saveData})

}
//////////////////////////////////


const getAuthordata= async function(req,res){

    let authors=await newAuthormodel.find()
    res.send({msg:authors})

}
module.exports.createAuthor=createAuthor
module.exports.getAuthordata=getAuthordata