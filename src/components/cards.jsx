import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Card1 = ({characterProp}) => {
  return (
    <Card className="d-inline-flex m-1" style={{ width: '15rem' }}>
      <Card.Img variant="top" src={characterProp.image} />
      <Card.Body>
        <Card.Title>Id: {characterProp.id}</Card.Title>
        <Card.Title>Name: {characterProp.name}</Card.Title>
        <Card.Text>Status: {characterProp.status}</Card.Text>
        <Card.Text>Species: {characterProp.species}</Card.Text>
        <Card.Text>Gender: {characterProp.gender}</Card.Text>
        <div className='text-center'>
          <Button className="text-center" variant="primary" onClick>Ver más</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

