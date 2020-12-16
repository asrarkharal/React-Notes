import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

/*
-highligt
-send as prop the selected note

*/

export default function NoteList({selectedNote, setSelectedNote, notes}) {
        const onSelectNote = (note) =>  {
        setSelectedNote(note)
    }

    return (
        <ListGroup as = "ul">
        
        {notes.map((note, index) => (
        <ListGroup.Item 
        active ={selectedNote ? note.id === selectedNote.id : false}
        onClick={() => onSelectNote(note)} as="li">
         {note.title}
        
        </ListGroup.Item>
            ))}
        </ListGroup>
        
    )

}

