import React from 'react';
import Home from './Home';
import NavBar from './NavBar';
import Reviews from './Reviews';
import Gamelist from './Gamelist';
import CreateReviews from './CreateReviews';


function App(){
    return(
        <div>
          <Home />
          <NavBar />
          <Reviews />
          <Gamelist />
          <CreateReviews />
        </div>
    )
}

export default App;