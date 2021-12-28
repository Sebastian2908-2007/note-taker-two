const path = require('path');
const router = require('express').Router();


// serve notes.html
router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../../assets/notes.html'))
});

// sends you home if anything besides /notes is added to url
router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname,'../../assets/index.html'));
});

module.exports = router;