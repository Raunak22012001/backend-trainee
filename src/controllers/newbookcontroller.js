const myBookModel = require('../models/bookschema')
const myAuthorModel = require('../models/authorschema')
const authorschema = require('../models/authorschema')
////////////create author data
const createAuthorData = async function (req, res) {
    let AuthorData = req.body
    let savedAuthorData = await myAuthorModel.create(AuthorData)
    res.send({ msg: savedAuthorData })
}
///////create book data with id

const createBookWithId = async function (req, res) {
    let bookWithId = req.body
    let savedBookWithId = await myBookModel.create(bookWithId)
    res.send({ msg: savedBookWithId })
}
/////////////////////////////////////////booklist
// the entry(in neither the author collection nor the books collection)
// List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. 
//Then next query will get the list of books with that author_id )


const booklist = async function (req, res) {
    let authorName = req.body
    let aid = await myAuthorModel.findOne(authorName).select({ author_id: 1, _id: 0 })

    let list = await myBookModel.find(aid)
    res.send({ msg: list })
}
/////////////////////////////////////////update price
//find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.  
/// This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query aith author_id from previous query)
//

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
////////////////////////////////////////////
///Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.


 const books = async function(req,res){
    let getbooks = await myBookModel.find({price : {$gt : 50, $lte : 100}});
    let arr=getbooks.map(x=>x.author_id)
    let updatedreange=await authorschema.find({author_id:arr}).select({author_name:1, _id:0})
res.send( updatedreange)


 }

module.exports.createAuthorData = createAuthorData
module.exports.createBookWithId = createBookWithId
module.exports.booklist = booklist
 module.exports.updatePrice = updatePrice
 module.exports.books = books