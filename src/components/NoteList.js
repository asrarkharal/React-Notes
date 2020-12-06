import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

import {notesList} from '../util/noteFunctions';


export default function NoteList(props) {

    return (
        <>
            <ListGroup defaultActiveKey="#link1">
            {notesList.map((x)=><ListGroup.Item action href="">{x.Title}</ListGroup.Item>)}
            </ListGroup>
        </>
    )

}

