
function initializeNotes() {
  // sets localstorage for the first time
  localStorage.setItem("notes", JSON.stringify([]));
  // returns an array
  return [];
}

export function readNotes() {
  let notes = localStorage.getItem("notes");
  if (!notes) {
    notes = initializeNotes();
  }
  const parsedNotes = JSON.parse(notes);
  return parsedNotes;
}

export function createNote(title, body) {
  const notes = readNotes();
  const newNote = { id : Date.now(), title, body };
  notes.push(newNote);
  console.log("about to save", notes);
  const jsonNoteArray = JSON.stringify(notes);
  localStorage.setItem("notes", jsonNoteArray);
}


// export function readNote(id){
//   const mylist = readNotes();
// return mylist.find((note) => note.id === id)
// }

export function updateNote(id, title, body){
  const notes = readNotes();
  const noteToUpdateIndex = notes.findIndex((note) => note.id === id)
  const note = {
        id,
        title, 
        body,
        }
  notes.splice(noteToUpdateIndex, 1, note)
  const jsonNoteArray = JSON.stringify(notes);
  localStorage.setItem("notes", jsonNoteArray);
  moveNote(noteToUpdateIndex)
  return true
}

export function moveNote(indexToMove) {
  const notes = readNotes();
  const noteToMove = notes.length > 0 ? notes[indexToMove] : null;
  notes.splice(indexToMove, 1);
  notes.splice(notes.length, 0, noteToMove);
  const jsonNoteArray = JSON.stringify(notes);
  localStorage.setItem("notes", jsonNoteArray);
}


export function deleteNote(id){
  const notes = readNotes();
    const indexToDelete = notes.findIndex((note) => note.id === id)
    if (indexToDelete >=0) notes.splice(indexToDelete, 1,)

    const jsonNoteArray = JSON.stringify(notes);
    localStorage.setItem("notes", jsonNoteArray);
    return true

}

