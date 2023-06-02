//Initialization of App
const express = require('express');
const app = express();
const Note = require("./models/notes");
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extented:false}));
app.use(bodyParser.json());

//Mongoose Connection
const mongoose = require('mongoose');
const mongoDbPath = "mongodb+srv://robinmandhotia:Robin123@rabincluster.ukgzcqb.mongodb.net/notesdb";
mongoose.connect(mongoDbPath).then(function () {
    //Home Route
    app.get("/", function (req, res) {
        const response = {message: "API Works"};
        res.json(response);
    });
    const noteRouter = require('./routes/routes_notes')
    app.use("/notes,",noteRouter);
    

})





//Starting Server on PORT
const PORT = process.env.PORT || 5000
app.listen(PORT, function () {

    console.log('Server Started at PORT:5000')
});