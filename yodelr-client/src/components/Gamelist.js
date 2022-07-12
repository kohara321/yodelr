import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GameCard from './GameCard'
function Gamelist(games){

    gameInfo = games.map(game => {
        return(
            <GameCard />
        )
    })

    return(
        <Container fluid>
        <Row>
          <Col md={4}>1 of 1</Col>
            {gameInfo}
        </Row>
      </Container>
    );
}
export default Gamelist;