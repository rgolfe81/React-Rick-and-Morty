import Card from 'react-bootstrap/Card';

export const CardDetail = ({characterProp}) => {
  return (
    <Card className="mx-auto" style={{ width: '24rem' }}>
      <Card.Img variant="top" src={characterProp.image} />
      <Card.Body>
        <Card.Title>Id: {characterProp.id}</Card.Title>
        <Card.Title>Name: {characterProp.name}</Card.Title>
        <Card.Text>Status: {characterProp.status}</Card.Text>
        <Card.Text>Species: {characterProp.species}</Card.Text>
        <Card.Text>Gender: {characterProp.gender}</Card.Text>
        <Card.Text>Origin: {characterProp.origin.name}</Card.Text>
        <Card.Text>Location: {characterProp.location.name}</Card.Text>
      </Card.Body>
    </Card>
  );
}
