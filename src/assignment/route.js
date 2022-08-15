const express = require('express');
const abc = require('../introduction/intro')
const logger= require('../logger/logger.js')
const helper =require('../util/helper')
const formatter =require('../validator/formatter')
const lodash=require('lodash')
const router = express.Router();

router.get('/test-me', function (req, res) {
        console.log('My batch is', abc.name)
        abc.printName()
         logger.Welcome()
        helper.printDate()
        helper.printmonth()
        helper.getBatchInfo()
        formatter.trim()
        formatter.tolowercase()
        formatter.touppercase()
        ///////////////////////
        const month1 = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        console.log(lodash.chunk(month1,3))


        ///////////////////////
        let odd=[1,3,5,7,9,11,13,15,17,19];
        let oddarr=lodash.tail(odd)
        console.log(oddarr);

        /////////////////////////
        let Array = [[1, 2, 3, 4], [40, 34, 6], [3, 39, 40], [34, 56, 90, 67], [4, 39, 100]]
        console.log(lodash.union(Array))
        ////////////////////////

        const pairs=[["horror", "The shining"],["drama","titanic"],["thriller", "shutter island"],["Fantacy","pans lab"]]
            console.log(lodash.fromPairs(pairs));
                  res.send("todays date 5th aug")
              });

router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason