var fs = require("fs");
const util = require("util");
var router = require("express").Router();

let notes = JSON.parse(fs.readFileSync('../db/db.json'));
console.log(notes);

let notesArray = [];

router.get("/api/notes", function(req, res) {
    return res.json(notes)
});

router.post("/api/notes", function(req, res) {
    var newNote = req.body;
    console.log(newNote);
    notesArray.push(newNote);
});

module.exports = router;