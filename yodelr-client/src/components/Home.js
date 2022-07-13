import React from "react";
import GameList from "./GameList";

function Home({games, onCardChange}) {
    return (
        <div id="home">
            <GameList games={games} onCardChange={onCardChange} />
        </div>
    );
}
 
export default Home;