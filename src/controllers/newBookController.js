const newbookSchema=require("../models/newBook")
const  abc=require("../models/newAuthor")
const xyz=require("../models/newPublisher")



const getBook = async function(req,res){
    let  myNewbooks = await newbookSchema.find().populate(['author_id','publisher_id'])
    res.send({msg : myNewbooks})
}


const createBook=async function(req,res){

    let Bookdata=req.body
    const {author_id, publisher_id}=Bookdata
    if(!author_id){
        res.send({msg:"enter  author id "})
    }
    if( !publisher_id){
        res.send({msg:"enter a publisher id"})
    }
    let findauthor = await abc.findById(author_id)
    if(!findauthor){
        res.send({msg : "Wrong Author id, No such Author"})
    }

    let findpublisher = await xyz.findById(publisher_id)
    if(!findpublisher){
        res.send({msg : "Wrong publisher id, No such a publisher"})
    }

    else{
        let mybook = await newbookSchema.create(Bookdata)
        res.send({msg : mybook})
    }}
//////////////////////////////////////////////

const updateHardcover=async function(req,res){

let books= await newbookSchema.find().populate('publisher_id')
let updatecover=await newbookSchema.updateMany(

{$or:[{publisher_id:"63012d78a641ed51bdd82ff4"},{publisher_id:"63012773b2fcc5ecefa65d75"}]},
{$set:{isHardCover:true}},
{new:true}

)

res.send({msg:updatecover})

}

////////////////////////////////////////////////////
    const updateprice = async function(req,res){
        let authorRating = await abc.find({rating:{$gt:3.5}}).select("_id")
        let updatedprice= await newbookSchema.updateMany(
            {author_id:authorRating}, 
            {$inc: {price:+10}},
            ) 
        res.send({data : updatedprice})  
    }
    module.exports.createBook=createBook
    module.exports.getBook=getBook
    module.exports.updateHardcover=updateHardcover
    module.exports.updateprice=updateprice