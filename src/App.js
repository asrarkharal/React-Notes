import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import Form from 'react-bootstrap/Form';
import Mylist from './components/NoteList';
// import Editor from './components/Editor';
import Form1 from './components/Form1';
// import { readNotes } from './util/noteFunctions';
import { readNotes } from './util/notesLS';


// import * as Fnc from './util/noteFunctions'

function App() {
  const [selectedNote, setSelectedNote] = useState(undefined)
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const notes = readNotes()
    setNotes(notes)
  },[])

   
  const refreshList = () => {
    setSelectedNote(undefined)
    const notes = readNotes()
    setNotes([...notes])
    //it will create new array and fill with new contents..
  }

  const onClickNewNoteBtn = () => setSelectedNote(undefined)
  
  // Storage area


  return (
    <Container>
    <Jumbotron>
      <h1>My Notes Editor</h1>
    </Jumbotron>
   
  <Row>
  <Col  md = {4} sm ={12} xs = {12}>
      <Button onClick ={onClickNewNoteBtn}
       className = "mb-4" variant="dark" size = 'md' block>New Note</Button>
      <Mylist notes = {notes} selectedNote = {selectedNote} setSelectedNote = {setSelectedNote} />
      </Col>

      <Col md={8} sm={6} xs ={12}>
      <Form1 refreshList = {refreshList} selectedNote = {selectedNote} />
    </Col>
    </Row>
  
</Container>
  );
}

export default App;
