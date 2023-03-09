import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

export const AddForm = () => {

    let character = {
        id: "",
        name: ""
    };

    const [valor, setValor] = useState(character);     //Hook useState
    const {id, name} = valor;

    const newValue = ({target}) => {
        // console.log (target);

        const {name, value} = target;
        setValor({...valor,[name]:value});
    }

return (
<>
<Form className='container w-25 mt-5 text-light'>
    <Form.Group className="mb-3">
        <div className='mx-auto fs-2 mb-4 text-center border rounded'>
            Add Character
        </div>
        <Form.Label>Identifier</Form.Label>
        <Form.Control type="text" name="id" value={id} onChange={newValue} placeholder="Enter Identifier" />
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={name} onChange={newValue} placeholder="Enter Name" />
    </Form.Group>
    <div className='text-center'>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </div>
</Form>
</>
)
}


