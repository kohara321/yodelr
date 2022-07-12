import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GameCard from './GameCard'
function GameList({games}){

    const gameInfo = games.map(game => {
        return(
            <GameCard key={game.id}
            title={game.title}
            thumbnail={game.thumbnail}
            description={game.short_description}
            publisher={game.publisher}
            developer={game.developer}
            releaseDate={game.releaseDate}
            gameURL={game.game_url} />
        )
    })

    return(
        <Container fluid>
        <Row xs={1} md={2} className="g-4">
          {/* <Col>1 of 1</Col> */}
            {gameInfo}
        </Row>
      </Container>
    );
}
export default GameList;