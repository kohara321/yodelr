import React, {useEffect, useState} from 'react';
import Home from './Home';
import NavBar from './NavBar';
import Reviews from './Reviews';
import Gamelist from './Gamelist';
import CreateReviews from './CreateReviews';


function App(){
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/games")
    .then(resp => resp.json())
    .then(data => setGames(data))
},[])

    return(
        <div>
          <Home />
          <NavBar />
          <Reviews />
          <Gamelist games={games} />
          <CreateReviews />
        </div>
    )
}

export default App;