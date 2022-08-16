const BookModelUser = require("../bookschema/bookuser")

const createbookdata = async function (req, res) {
    let Data = req.body
    let finaldata = await BookModelUser.create(Data)
    res.send({ msg: finaldata })
}

   const getbookdata = async function (req, res) {
        let alldata = await BookModelUser.find()
        res.send({ YourDataIsHere: alldata })
    }

module.exports.createbookdata= createbookdata
module.exports.getbookdata = getbookdata 
