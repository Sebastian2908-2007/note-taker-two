const router = require('express').Router();
const {notes} = require('../../db/db.json');
const {getNotes, createNewNote,deleteNote} = require('../../lib/notes');
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

router.delete('/notes/:id', (req, res) => {
    const noteToDelete = req.params;
    if(!noteToDelete) {
       return res.sendStatus(404)
    }
    
    deleteNote(noteToDelete,notes);

});

module.exports = router;