const mongoose = require('mongoose')
const ObjesctId = mongoose.Schema.Types.ObjectId


const newbookSchema = new mongoose.Schema({

    name: String,
    price: Number,
    ratings: Number,

    author_id: {
        type: ObjesctId,
         ref: "newAuthor"
    },

    publisher_id: {
        type: ObjesctId,
         ref: "newPublisher"
    },
    
    isHardCover:{

     type:Boolean,
     default:false

    }

},{timestamps:true})

module.exports=mongoose.model("newBook",newbookSchema)

