import React ,{useState} from 'react';
import {Router,Link,navigate} from "@reach/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import CatFacts from './components/CatFacts';
import Pokemon from './components/Pokemon';


function App() {
  const [query,setQuery] = useState({
    query:"pokemon",
    id:0
  })

  const handleInput = (e) => {
    setQuery({
      ...query,
      [e.target.name]:e.target.value
    })
  } 

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/${query.query}/${query.id}`)
  
  }

  return (
    <div className="">
      <div className="d-flex mx-auto col-5 justify-content-between">
        <Link to="/cat-facts" >Cat Facts</Link>
      </div>
      <form className="form-inline" onSubmit={handleSubmit}>
        <select name="query" onChange={handleInput}>
          <option value="">-- Select Query --</option>
          <option value="pokemon">Pokemon</option>
          <option value="ability">Ability</option>
        </select>
        <input type="number" name="id" value={query.id} onChange={handleInput} />
        <input type="submit" className="btn btn-info" value="Catch'em"/>
      </form>
      <Router>
        <CatFacts path="/cat-facts" />
        <Pokemon path="/:query/:id" />
      </Router>
      
    </div>
  );
}

export default App;
