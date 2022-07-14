import React from "react";
import GameList from "./GameList";

function Home({games, onCardChange,value,setValue}) {
    return (
        <div id="home">
            <GameList games={games} 
            onCardChange={onCardChange}
            value={value}
            setValue={setValue}
            />
            
        </div>
    );
}
 
export default Home;