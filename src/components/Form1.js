import React, {useState, useEffect} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {createNote, readNotes, updateNote} from '../util/noteFunctions'


export default function Form1({selectedNote, refreshList}) {
    const [title, setTitle] = useState('')
    
    useEffect(() =>{
        if (selectedNote) setTitle(selectedNote.title)
    },[selectedNote])
    
    const onChangeTitle = (e) =>  setTitle(e.target.value)
    const onSave = (e) => {

        if(selectedNote)
        {
            updateNote(selectedNote.id, title, 'body text')
            return refreshList()
        }

    // console.log("Save new Note...")
    createNote(title, "Random Body")
    refreshList()
    }

    const onRead = (e) => {
    e.preventDefault()
    console.log(readNotes())
   }
   

    return(
        
        <Form>
            <Form.Group>
                <Form.Label>Title-Testing</Form.Label>
                {/* <Form.Control sz = "lg" className = "mb-2" onChange={onChangeTitle}></Form.Control> */}
                <Form.Control sz = "lg" className = "mb-2" 
                value = {title}
                onChange ={onChangeTitle}
                >

                </Form.Control>

                <Form.Label>Note</Form.Label>
                <Form.Control as = "textarea" sz = "lg" className = "mb-2"></Form.Control>
            </Form.Group>

            <Button className = "mr-2" variant = "primary" onClick = {onSave} >Save</Button>
            <Button className = "mr-2" variant = "danger">Delete</Button>
            <button onClick = {onRead}>click</button>
        </Form>
        

    )
}
