import React, {useEffect, useState} from 'react';
import Header from './Header'
import Home from './Home';
import NavBar from './NavBar';
import Reviews from './Reviews';
import CreateReviews from './CreateReviews';
import { Route, Switch } from "react-router-dom";


function App(){
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch("http://localhost:9393/games")
    .then(resp => resp.json())
    .then(data => setGames(data))
    .catch((err) => console.error(err))
},[])

    return(
        <div>
          <Header />
          <NavBar />
          <Switch>
          <Route exact path="/">
            <Home games={games} />
          </Route>
          <Route path="/reviews">
            <Reviews />
          </Route>
          <Route path="/create">
            <CreateReviews />
          </Route>
          </Switch>
        </div>
    )
}

export default App;