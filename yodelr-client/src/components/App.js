import React, {useEffect, useState} from 'react';
import Home from './Home';
import NavBar from './NavBar';
import Reviews from './Reviews';
// import CreateReviews from './CreateReviews';
import { Route, Switch } from "react-router-dom";


function App(){
  const [games, setGames] = useState([])
  const [reviewGame, setReviewGame] = useState([])

  //initial fetch
  useEffect(() => {
    fetch("http://localhost:4200/games")
    .then(resp => resp.json())
    .then(data => setGames(data))
    .catch((err) => console.error(err))
},[])

function handleCardChange(e, gameToReview){
  if (e.target.textContent === "Review") {
    // console.log(gameToReview)
    fetch(`http://localhost:4200/reviewed`, {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        title: gameToReview.title,
        thumbnail: gameToReview.thumbnail,
        short_description: gameToReview.short_description
      }),
    })
    .then(resp => resp.json())
    .then(data => {
      let selectedGame = reviewGame
      selectedGame.push(data)
      setReviewGame(selectedGame)
    })
  }
}

useEffect(() => {
  fetch("http://localhost:4200/reviewed")
  .then(resp => resp.json())
  .then(data => setReviewGame(data))
  .catch((err) => console.error(err))
},[])

function handleRemove(reviewToRemove) {
  // console.log(reviewToRemove)
    fetch(`http://localhost:4200/reviewed/` + reviewToRemove.id, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(() =>  setReviewGame(reviewGame.filter((review) => review.title !== reviewToRemove.title)))
}

    return(
        <div>
          <NavBar />
          <Switch>
          <Route exact path="/"> 
            <Home games={games} onCardChange={handleCardChange} />
          </Route>
          <Route path="/reviews">
            <Reviews reviewedGame={reviewGame} onDeleteClick={handleRemove} />
          </Route>
          {/* <Route path="/create">
            <CreateReviews />
          </Route> */}
          </Switch>
        </div>
    )
}

export default App;