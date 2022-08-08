const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    // logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res) {
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function (req, res) {
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request " + JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)

    res.send('Dummy response')
})
// 1st problem
// router.get('/movies', function (req, res){
//     const movies = ['kgf', 'black clover', 'moonfall','demon slayer']
//     console.log(movies)
//     res.send(movies)
// })



/////2 problem AND 3 rd

// router.get('/movies/:moviesNumber', function (req, res) {
//     const myMovies = ['kgf', 'black clover', 'moonfall', 'demon slayer']
//     let requestParams = req.params
//     let index = requestParams.moviesNumber
//     if (index < myMovies.length) {
//         res.send(myMovies[index])
//     }
//     else {
//         res.send("Enter Valid Number")
//     }

//     res.send("this is code")
// })


///4 th problem
// router.get('/films',function(req,res){
//     const film=[{'id':1,'name':'Death note'},{'id':2,'name':'naruto'},{'id':3,'name':'jujutsu kaisen'},{'id':4,'name':'pokemon'}]
//     res.send(film)

//5 th problem

router.get('/films/:filmNumber', function(req,res){
    let myMovies = [{'id':1,'name':'KGF 2'},{'id':2,'name':'inception'},{'id':3,'name':'x mem'},{'id':4,'name':'harry porter'}]
    let requestParams = req.params
    let index = requestParams.filmNumber

    if(index <= myMovies.length){
        index = index - 1
        res.send(myMovies[index])
    }
    else{
        res.send("No movie exists with this id")
    }

    res.send("falna ,mota mota ,patla patla 40% samja")
})






module.exports = router;