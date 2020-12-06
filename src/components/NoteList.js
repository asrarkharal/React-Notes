import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

import {notesList} from '../util/noteFunctions';


export default function NoteList(props) {

    return (
        <>
            <ListGroup as="ul">
            {notesList.map((x)=><ListGroup.Item>{x.Title}</ListGroup.Item>)}
            </ListGroup>
        </>
    )

}