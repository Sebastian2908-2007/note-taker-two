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
   


   //console.log(notesArray)
  const newArray = notesArray.filter((el) => {return el.id != note.id});
 // console.log(newArray);


    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: newArray},null,2)
    );

    const data = fs.readFileSync(path.join(__dirname,'../db/db.json'));
    
 console.log(data.toString());

return data;

};

module.exports = {getNotes, createNewNote, deleteNote};