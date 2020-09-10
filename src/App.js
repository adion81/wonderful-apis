import React from 'react';
import {Router,Link} from "@reach/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import CatFacts from './components/CatFacts';
import Pokemon from './components/Pokemon';


function App() {
  return (
    <div className="">
      <div className="d-flex mx-auto col-5 justify-content-between">
        <Link to="/cat-facts" >Cat Facts</Link>
        <Link to="/pokemon">Pokemon</Link>
      </div>
      <Router>
        <CatFacts path="/cat-facts" />
        <Pokemon path="/pokemon/:banana" />
      </Router>
      
    </div>
  );
}

export default App;
