const path = require('path');
const router = require('express').Router();


// serve notes.html
router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../../assets/notes.html'))
});

router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname,'../../assets/index.html'));
});

module.exports = router;