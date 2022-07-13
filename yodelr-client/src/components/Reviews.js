import React from 'react';
import GameCard from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Reviews({reviewedGame}){

   // const reviewedGameInfo = reviewedGame.map(game => {
    //     return (
    //         <GameCard key={game.id + "reviewed game"} games={game} />
    //     )
    // })
    console.log(reviewedGame)
    const reviewedGameInfo = reviewedGame.map( (game) => {
      return(  <GameCard key = {game.id} games = {game}/> )
    } )
    return(
        <div>
        <Container fluid="md">
        <Row xs={1} md={4} className="m-4 g-4 p-5">
            {reviewedGameInfo}
        </Row>
      </Container>
      </div>
    );
}
export default Reviews;