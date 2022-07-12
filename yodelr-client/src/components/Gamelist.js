import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GameCard from './GameCard'
function GameList({games,onButtonClick}){

    // prepares data to render
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
        //render data
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