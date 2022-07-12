import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GameCard(gameInfo, onButtonClick) {
    //render styling
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={gameInfo.thumbnail} />
      <Card.Body>
        <Card.Title>{gameInfo.title}</Card.Title>
        <Card.Text>
          {gameInfo.description}
        </Card.Text>
        <Button variant="primary" onButtonClick={onButtonClick}>Review</Button>
      </Card.Body>
    </Card>
  );
}

export default GameCard;