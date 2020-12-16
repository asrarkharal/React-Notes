import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default function Editor() {

    return(
        
        <Form>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control sz = "lg" className = "mb-2"></Form.Control>

                <Form.Label>Note</Form.Label>
                <Form.Control as = "textarea" sz = "lg" className = "mb-2"></Form.Control>
            </Form.Group>

            <Button className = "mr-2" variant = "primary">Save</Button>

            <Button className = "mr-2" variant = "danger">Save</Button>
        </Form>
        

    )
}
