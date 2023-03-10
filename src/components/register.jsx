import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";

export const RegisterForm = () => {

  let userRegister = {
    email: "",
    password: "",
    name: "",
    surname: "",
    city: "",
    phone: ""
  };

  const [valor, setValor] = useState(userRegister);
  const {email, password, name, surname, city, phone} = valor;

  const newValue = ({target}) => {
    // console.log (target);

    const {name, value} = target;
    setValor({...valor,[name]:value});
  }

  return (
    <>
    <Form className='container w-50 mt-5 text-light'>
    <div className='mx-auto fs-2 mb-4 text-center border rounded w-50'>
      Register Form
    </div>
    <div className='row'>
      <div className='col-6'>
        <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" value={email} onChange={newValue} placeholder="Enter email"/>
        </Form.Group>
      </div>
      <div className='col-6'>
        <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={password} onChange={newValue} placeholder="Password" />
        </Form.Group>
      </div>
    </div>
    <div className='row'>
      <div className='col-6'>
        <Form.Group className="mb-2">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={name} onChange={newValue} placeholder="Name" />
        </Form.Group>
      </div>
      <div className='col-6'>
        <Form.Group className="mb-2">
        <Form.Label>Surname</Form.Label>
        <Form.Control type="text" name="surname" value={surname} onChange={newValue} placeholder="Surname" />
        </Form.Group>
      </div>
    </div>
    <div className='row'>
      <div className='col-6'>
        <Form.Group className="mb-2">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" name="city" value={city} onChange={newValue}placeholder="City" />
        </Form.Group>
      </div>
      <div className='col-6'>
        <Form.Group className="mb-2">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" name="phone" value={phone} onChange={newValue}placeholder="Phone" />
        </Form.Group>
      </div>
    </div>
    <div className='text-center mt-4'>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </div>
    </Form>
    </>
  );
}

