const myBookModel = require('../models/bookschema')
const myAuthorModel = require('../models/authorschema')

const createAuthorData = async function (req, res) {
    let AuthorData = req.body
    let savedAuthorData = await myAuthorModel.create(AuthorData)
    res.send({ msg: savedAuthorData })
}

const createBookWithId = async function (req, res) {
    let bookWithId = req.body
    let savedBookWithId = await myBookModel.create(bookWithId)
    res.send({ msg: savedBookWithId })
}
/////////////////////////////////////////booklist
const booklist = async function (req, res) {
    let authorName = req.body
    let aid = await myAuthorModel.findOne(authorName).select({ author_id: 1, _id: 0 })

    let list = await myBookModel.find(aid)
    res.send({ msg: list })
}
/////////////////////////////////////////update price
const updatePrice = async function(req,res){
    let bookname = req.body
    let authorid = await myBookModel.findOne(bookname).select({author_id : 1, _id : 0})

    let authorname = await myAuthorModel.findOne(authorid).select({author_name: 1, _id : 0})

    let updateprice = await myBookModel.findOneAndUpdate(
        {name  : "Two states"},
        {$set : {price : 100}},
        {new : true}
    )
    res.send({msg : updateprice, authorname})

}

// const books = async function(req,res){
//     let getbooks = await myBookModel.find({price : {$gt : 50, $lte : 100}}).select({ author_id : 1, _id : 0 })



// }

module.exports.createAuthorData = createAuthorData
module.exports.createBookWithId = createBookWithId
module.exports.booklist = booklist
 module.exports.updatePrice = updatePrice
// module.exports.books = books