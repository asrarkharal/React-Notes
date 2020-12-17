
const notesList = [
    {id: 1, title: "Shopping", body: "Text A"},
    {id: 2, title: "Some Thing", body: "Text B"},
    ];


export function createNote(title, body){
    const note = {
    id : Date.now(),
    title, 
    body,
    }

    notesList.push(note)
    return note

}

export function readNote(id){
return notesList.find((note) => note.id === id)
}

export function readNotes(){
    return notesList
}



export function updateNote(id, title, body){
    const noteToUpdateIndex = notesList.findIndex((note) => note.id === id)

    const note = {
        id,
        title, 
        body,
        }
        notesList.splice(noteToUpdateIndex, 1, note)
        return notesList

}

export function deleteNote(id){
    const indexToDelete = notesList.findIndex((note) => note.id === id)
    if (indexToDelete >=0) notesList.splice(indexToDelete, 1,)
    return true

}

