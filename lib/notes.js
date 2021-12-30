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

function deleteNote(note,notesArray) {
  
   for (i=0; i < notesArray.length; i++) {
      if (notesArray[i].id === note.id) {
          notesArray.splice(i,1);

          break;
      }
  } 

   fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes:notesArray},null,2),
    );


return notesArray;

};

module.exports = {getNotes, createNewNote, deleteNote};