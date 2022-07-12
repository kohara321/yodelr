import React from "react";
import GameList from "./GameList";

function Home({games}) {
    return (
        <div id="home">
            <GameList games={games} />
        </div>
    );
}
 
export default Home;