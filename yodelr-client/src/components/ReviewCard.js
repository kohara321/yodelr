import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ReviewCard({games, onDeleteClick}){
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={games.thumbnail} />
      <Card.Body>
        <Card.Title>{games.title}</Card.Title>
        <Card.Text>
          {/* {games.short_description} */}
        </Card.Text>
        <Button variant="primary" onClick={() => onDeleteClick(games)}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default ReviewCard;