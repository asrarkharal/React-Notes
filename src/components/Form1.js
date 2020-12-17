import React, {useState, useEffect} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

// import {createNote, readNotes, updateNote, deleteNote} from '../util/noteFunctions'
import {createNote, readNotes, updateNote, deleteNote} from '../util/notesLS'


export default function Form1({selectedNote, refreshList}) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('') //changeBody
    const [status, setStatus] = useState('')
    const [variantt, setVariant] = useState('')

useEffect(() =>{
    setTimeout(() => {
        setStatus('')
        setVariant('')
    }, 4000);
},[status, variantt]);

    useEffect(() =>{
        if (selectedNote) return setTitle(selectedNote.title)
        setTitle('')

    },[selectedNote])
  
    useEffect(() =>{
        
        if (selectedNote) return setBody(selectedNote.body)//bodyChange
        setBody('')//BdyChange

    },[selectedNote])


    const onChangeTitle = (e) =>  setTitle(e.target.value)
    const onChangeBody = (e) =>  setBody(e.target.value)//change Body

    const onSave = (e) => {
        e.preventDefault()
        setTitle('')
        setBody('') // Body Change
        
        if(selectedNote)
        {
            // updateNote(selectedNote.id, title, "Random Text")
            updateNote(selectedNote.id, title, body)
            setStatus('Note Updated') // body Change
            setVariant('success')
            return refreshList()
            
        }
    // console.log("Save new Note...")
    // createNote(title, "Random Body") //Old code for only title
    createNote(title, body) // body Change
    refreshList()
    setStatus('New Note Created')
    setVariant('success')
    }

const onDelete = (e) => {
    e.preventDefault()
    const {id} = selectedNote
    deleteNote(id)
    setStatus('Note Deleted')
    setVariant('danger')
    refreshList()
    setTitle('')
    setBody('') // Bdoby Change
    
}

    const onRead = (e) => {
    e.preventDefault()
    console.log(readNotes())
   }
   

    return(
        
        <Form>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                {/* <Form.Control sz = "lg" className = "mb-2" onChange={onChangeTitle}></Form.Control> */}
                <Form.Control sz = "lg" className = "mb-2" 
                value = {title}
                onChange ={onChangeTitle}
                >
            </Form.Control>

                <Form.Label>Note</Form.Label>
                <Form.Control as = "textarea" sz = "lg" className = "mb-2"
                value = {body} //body Change
                onChange ={onChangeBody} //bodyChange
            
            ></Form.Control>
            </Form.Group>

            <Button className = "mr-2" variant = "primary" onClick = {onSave} >Save</Button>
           {selectedNote && <Button className = "mr-2" variant = "danger" onClick = {onDelete}>Delete</Button>}
            <button onClick = {onRead}>click</button>

            {status && <Alert className ="mt-2" variant = {variantt}>{status}</Alert>}

        </Form>
        

    )
}
