let axios = require("axios")

//_________________________weathere report of London
let getLondon = async function (req, res) {
    try {
        let city = req.query.q
        let id = req.query.appid

        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
        }
        let result = await axios(options)

        res.status(200).send({ msg: result.data })
    }
    catch (err) {

        res.status(500).send({ msg: err.message })
    }

}
//_______________________________get london temprature
let getTemp = async function (req, res) {
    try {
        let city = req.query.q
        let id = req.query.appid

        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
        }
        let result = await axios(options)

        res.status(200).send({ msg: result.data.main })
    }
    catch (err) {

        res.status(500).send({ msg: err.message })
    }
}


//____________________________ sort the city according to Temp.____________________


let getCitytemp= async function (req, res) {


 
    try{
        let array = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityTemp = []
        
        for(let i = 0; i < array.length; i++){
            let tempObj = {city : array[i]} 
            let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${array[i]}&appid=2301a63ed7466549d5f4d8423b1bee6f`)
            tempObj.temp = result.data.main.temp
            cityTemp.push(tempObj)
        }

        let sortedCity = cityTemp.sort((a,b)=>(a.temp-b.temp))
        res.status(200).send({msg : true, data : sortedCity})

    }

    catch(err){
        res.status(500).send({msg : "Error", error : err.message})
    }
}




module.exports.getLondon = getLondon
module.exports.getTemp = getTemp
module.exports.getCitytemp = getCitytemp