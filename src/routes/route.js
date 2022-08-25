const { Router } = require('express');
const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const  newAuthorcontroller=require("../controllers/newAuthorController")
const newBookcontroller=require("../controllers/newBookController")
const newPublishercontroller=require("../controllers/newPublisher")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


router.post("/NewAuthor",newAuthorcontroller.createAuthor)
router.get("/getAuthor",newAuthorcontroller.getAuthordata)

router.post("/newbooks",newBookcontroller.createBook)
router.get("/getbook",newBookcontroller.getBook)

router.post("/newPublisher",newPublishercontroller.createnewPublisher)
router.get("/getpublisher",newPublishercontroller.getPublisher)

router.put("/updatedprice",newBookcontroller.updateprice)

router.put("/updatekey",newBookcontroller.updateHardcover)

module.exports = router;