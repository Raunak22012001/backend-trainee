const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const bookmodel =require("../bookschema/bookuser")
const bookcontroller=require("../bookcontroller/userbookcontroller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)


router.post("/createbookdata", bookcontroller.createbookdata  )

router.get("/getbookdata", bookcontroller.getbookdata)
module.exports = router;




////////////////////////////
