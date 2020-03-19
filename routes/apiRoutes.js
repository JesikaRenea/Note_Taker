var router = require("express").Router();

let notes = [];

router.get("/api/notes", function(req, res) {
    return res.json(notes)
});

router.post("/api/notes", function(req, res) {
    var newNote = req.body;
    console.log(newNote);
    notes.push(newNote);
});

module.exports = router;