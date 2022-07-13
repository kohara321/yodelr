import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GameCard from './GameCard'
function GameList({games,onCardChange}){

    const gameInfo = games.map(game => {
        return(
            <GameCard key={game.id}
            games={game}
            onCardChange={onCardChange}
            />
        )
    })

    return(
        <div id="cards">
        <Container fluid="md">
        <Row xs={1} md={4} className="m-4 g-4 p-5">
            {gameInfo}
        </Row>
      </Container>
      </div>
    );
}
export default GameList;