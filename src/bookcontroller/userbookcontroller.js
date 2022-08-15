const BookModelUser = require("../bookschema/bookuser")

const createbookdata = async function (req, res) {
    let getData = req.body
    let myData = await BookModelUser.create(getData)
    res.send({ msg: myData })
}

   const getbookdata = async function (req, res) {
        let alldata = await BookModelUser.find()
        res.send({ YourDataIsHere: alldata })
    }

module.exports.createbookdata= createbookdata
module.exports.getbookdata = getbookdata 
