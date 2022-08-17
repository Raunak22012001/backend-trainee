const mongoose= require("mongoose")

const bookschema= new mongoose.Schema({

    name:String,
    author_id:Number,
    ratings:Number,
    price:Number

}, {timestamps:true});

module.exports=mongoose.model("newbookschema",bookschema)