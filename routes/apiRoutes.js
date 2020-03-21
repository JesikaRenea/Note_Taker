var fs = require("fs");
const util = require("util");
var router = require("express").Router();

router.get("/notes", function (req, res) {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    return res.json(notes)
});

router.post("/notes", function (req, res) {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));

    const newNote = req.body;
    newNote.id = Math.random();
    console.log(newNote);

    notes.push(newNote);
    console.log(notes);

    fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
        if (err)
            res.json(false).status(500);

        res.json(true);
    });
});

router.delete("/notes/:id", function (req, res) {
    const id = req.params.id;
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    const filteredNotes = notes.filter(note => note.id != id)

    fs.writeFile('./db/db.json', JSON.stringify(filteredNotes), (err) => {
        if (err)
            res.json(false).status(500);

        res.json(true);
    });

})

module.exports = router;