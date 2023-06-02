const express = require('express');
const router = express.Router();
const Note = require('./../models/notes')

//NotesList Route with Username/id
router.post("/list", async function (req, res) {
    const notes = await Note.find({userid:req.body.userid});
    res.json(notes);
})


//Adding a Note Route
router.post("/add", async function (req, res) {
    
//Not for repeating Data
     await Note.deleteOne({id:req.body.id});
    // res.json(req.body);
    const newNote = new Note({
        id: req.body.id,
        userid: req.body.userid,
        title: req.body.title,
        content: req.body.content,
    });
    await newNote.save();
    const response = { message: "New Note Created!" +`id:${req.body.id}` };
    res.json(response);

})


// Delete a Note
router.post("/delete", async function (req,res) {
    await Note.deleteOne({id:req.body.id});
    const response = {message: "Note Deleted!"+ `id:${req.body.id}`};
    res.json(response);
})

//exports router
module.exports = router;