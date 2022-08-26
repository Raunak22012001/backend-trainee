const purchaserModel = require("../models/purchaserModel")
const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")

const purchaserMid = function(req,res,next){
    if(!req.headers['isfreeappuser'])
        res.send({msg : "Header not found!"})
    
    else
        next()
    
}
module.exports=purchaserMid