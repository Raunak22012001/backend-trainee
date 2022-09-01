let axios = require("axios")


let getMeme = async function (req, res) {

    let options = {
        method: 'get',
        url: 'https://api.imgflip.com/get_memes'
    }
    let result = await axios(options)
    console.log(result.data)
    res.status(200).send({ msg: result.data })

}
//____________________________ create meme______________________________________________

let createMeme = async function (req, res) {

    try {
        let id = req.query.template_id
        let nameZero = req.query.text0
        let nameOne = req.query.text1
        let username = req.query.username
        let password = req.query.password

        let options = {
            method: 'post',
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${nameZero}&text1=${nameOne}&username=${username}&password=${password}`
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })

    }

    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



module.exports.getMeme = getMeme
module.exports.createMeme = createMeme