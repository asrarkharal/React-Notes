
export const notesList = [
    {id: 1, Title: "Shopping", Body: "Some Text"},
    {id: 2, Title: "Some Thing", Body: "Some Text"},
    {id: 3, Title: "Running", Body: "Some Text"},
    {id: 4, Title: "Study", Body: "Some Text"},
    ];


export function createNote(newNote){
    
    //One can use notes.push("newNote")
    //it should receive value from Title input and 
    //Note input and add in notes Array. And return the whole array
    // in my app solution, i have created a seprate Component NoteList.js with
    // notesList. And in my NoteList.js there should be iterator that iterate 
    //iterate notes array values with Bootstrap li tags, to show in proper formate.
    
    //To Add Both Title and Note Text we need to have probably Array of object
    // e.g., notes = [{Title:"Note Text"},{},{}]
}

export function readNote(){

    //
}