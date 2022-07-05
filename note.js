const express = require("express");
const router = express.Router();
const db = require(__dirname + "/db");

router.route("/")
    .get((req, res) => {
        db.Notes.find({}, (err, notes) => {
            if(!err) {
            
                res.json(notes);
            } else {
                console.log(err);
            }
        });
        
    })
    .post(async (req, res) => {
        const newNote = new db.Notes({
            title: req.body.title,
            content: req.body.content
        });
        await newNote.save();
        res.end();
    });

router.route("/:id")
    .delete((req, res) => {
        db.Notes.find({} , (err,notes) => {
            if (!err) {
                
                notes.forEach(async (note, index) => {
                    if(index === parseInt(req.params.id)) {
                       await db.Notes.deleteOne(note);
                       res.end();
                    }
                });
            } else {
                console.log(err);
            }
        });
    });

module.exports = router;