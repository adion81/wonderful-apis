import React,{useState,useEffect} from 'react';
import Axios from 'axios';


const Pokemon = props => {

    const [poke, setPoke] = useState([]);

    useEffect(() => {
        console.log(props.banana);
        Axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${props.banana}`)
            .then(res => {
                setPoke(res.data.results);
            })
            .catch(err => console.log(err));
    },[props])
    return (
        <div>
            <h1>Welcome to Pokemon!!!</h1>
            {
                poke.map((p,i) => <p key={i}>{p.name}</p>)
            }
        </div>
    );
}

export default Pokemon;