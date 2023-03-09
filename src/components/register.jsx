import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
        <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </div>
      <div className='col-6'>
        <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </div>
    </div>
    <div className='row'>
      <div className='col-6'>
        <Form.Group className="mb-2">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
        </Form.Group>
      </div>
      <div className='col-6'>
        <Form.Group className="mb-2">
        <Form.Label>Surname</Form.Label>
        <Form.Control type="text" placeholder="Surname" />
        </Form.Group>
      </div>
    </div>
    <div className='row'>
      <div className='col-6'>
        <Form.Group className="mb-2">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City" />
        </Form.Group>
      </div>
      <div className='col-6'>
        <Form.Group className="mb-2">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Phone" />
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

