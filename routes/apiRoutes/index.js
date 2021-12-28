const router = require('express').Router();
const {notes} = require('../../db/db.json');
const {getNotes, createNewNote} = require('../../lib/notes');
const uniquid = require('uniqid');

router.get('/notes', (req,res) => {
    let results = getNotes(notes);

    res.json(results)
});

router.post('/notes', (req,res) => {
    req.body.id = uniquid();
    const note = createNewNote(req.body,notes);
    res.json(note);
});

module.exports = router;