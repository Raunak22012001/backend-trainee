const express = require('express');
const abc = require('../introduction/intro')
const log= require('../logger/logger.js')
const helper =require('../util/helper')
const formatter =require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
        console.log('My batch is', abc.name)
        abc.printName()
        log.Welcome()
        helper.printDate()
        helper.printmonth()
        helper.getBatchInfo()
        formatter.trim()
        formatter.tolowercase()
        formatter.touppercase()
        res.send("todays date 5th aug")
       
    });




router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason