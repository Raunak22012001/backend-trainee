const purchasermodel = require("../models/purchaserModel")
const productmodel = require("../models/productModel")
const ordermodel = require("../models/orderModel")



const myOrder = async function (req, res) {

    const Data = req.body
    const Myheader = req.headers.isfreeappuser
    Data.isFreeAppUser=req.headers.isfreeappuser
    const Userid = Data.purchaserId
    const productid = Data.productId
    const validUser = await purchasermodel.findById(Userid)
    const validProduct = await productmodel.findById(productid)
    if (!validUser) {
        res.send({ status: false, msg: "invalid User" })
    }
    if (!validProduct) {
        res.send({ status: false, msg: "invalid product" })
    }

    const createOrder = await ordermodel.create(Data)
    if (Myheader == "true") {
       
        const updateOrder = await ordermodel.updateOne(
            { _id: createOrder._id },
            { $set: { amount: 0 } },
            { new: true }
        )
        res.send({ msg: createOrder })
    }
    else if (Myheader == "false") {

        if (validUser.balance >= Data.amount) {
            const productPrice = validProduct.price
            await purchasermodel.updateOne({ _id: validUser }, { $inc: { balance:-productPrice } }, { $set: { isFreeAppUser: Myheader } })
            await ordermodel.updateOne({_id:createOrder._id},{$set:{amount:productPrice}},{new:true})
            res.send({createOrder})
        }
        else {res.send({msg:"Balance is very very low please rechage the Phone otherwise go to hell"})}
    }
}
module.exports=myOrder