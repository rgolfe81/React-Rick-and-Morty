import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

export const LoginForm = () => {

  let user = {
    email: "",
    password: ""
  };

  const [valor, setValor] = useState(user);    //Hook useState
  const {email, password} = valor;

  const newValue = ({target}) => {
    // console.log (target);

    const {name, value} = target;
    setValor({...valor,[name]:value});
  }

  return (
    <>
    <Form className='container w-25 mt-5 text-light'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <div className='mx-auto fs-2 mb-4 text-center border rounded'>
          Login Form
        </div>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" value={email} onChange={newValue} placeholder="user@domain.com" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={password} onChange={newValue} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div className='text-center'>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
    </>
  );
}
