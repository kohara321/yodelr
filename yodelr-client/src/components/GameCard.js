import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


function GameCard({games, onCardChange}){
  return (
    <Card style={{ width: '18rem' }} onClick={(e) => onCardChange(e, games)}>
      <Card.Img variant="top" src={games.thumbnail} />
      <Card.Body>
        <Card.Title>{games.title}</Card.Title>
        <Card.Text>
          {games.short_description}
        </Card.Text>
        <Link to='/reviews'>
            <Button variant="primary">Review</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default GameCard;