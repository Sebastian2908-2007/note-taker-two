const fs = require('fs');
const path = require('path');

function getNotes(notesArray) {
if(!notesArray) {
    return false;
}
return notesArray;
};

function createNewNote(body, notesArray) {
     const note = body;
     notesArray.push(note);

     fs.writeFileSync(
         path.join(__dirname, '../db/db.json'),
         JSON.stringify({notes: notesArray},null,2)
     );
     return note;
};

module.exports = {getNotes, createNewNote};