const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const memeController=require("../controllers/memeController")
const weathercontroller= require("../controllers/weatherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/cowin/distict_id", CowinController.distictbyId)
router.get("/meme/getmeme",memeController.getMeme)
router.post("/meme/createMeme",memeController.createMeme)


//////____________________________weather controller_______________________

router.get("/getlondon",weathercontroller.getLondon)
router.get("/gettemp",weathercontroller.getTemp)
router.get("/getsort",weathercontroller.getCitytemp)

module.exports = router;