const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Raunak22012001:8329059512%40Ujwal@cluster0.tagnbhk.mongodb.net/Raunak_db?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next();
//   }
//   );
app.use(
    function (req, res, next) {
        let currentDate = new Date().toLocaleString()
        console.log("I Am Inside The Global Middleware")
        console.log(currentDate, req.ip, req.originalUrl)
        next();
    }
)

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
