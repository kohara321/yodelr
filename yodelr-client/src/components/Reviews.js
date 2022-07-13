import React from 'react';
import GameCard from './GameCard';
import ReviewCard from './ReviewCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Reviews({reviewedGame, onDeleteClick}){

    const reviewedGameInfo = reviewedGame.map(game => {
        return(
            <ReviewCard key={game.id}
            games={game}
            onDeleteClick={onDeleteClick}
            />
        )
    })
    return(
        <div id="cards">
        <Container fluid="md">
        <Row xs={1} md={4} className="m-4 g-4 p-5">
            {reviewedGameInfo}
        </Row>
      </Container>
      </div>
    );
}
export default Reviews;