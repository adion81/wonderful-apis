import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import Poke from './Poke';
import Ability from './Ability';


const Pokemon = props => {
    const [poke,setPoke ]= useState(null);
    const [ability,setAbility] = useState(null);

    useEffect(() => {
        Axios.get(`https://pokeapi.co/api/v2/${props.query}/${props.id}`)
            .then(res => {
                if(props.query === "pokemon"){
                    setPoke(res.data);
                    setAbility(null);
                }
                else if(props.query === "ability"){
                    setAbility(res.data);
                    setPoke(null);
                }
            })
            .catch(err => console.log(err));
    },[props])

    return (
        <div>
            <h1>Welcome to Pokemon!!!</h1>
            {
                poke ? <Poke banana={poke} /> : null
            }
            {
                ability ? <Ability banana={ability} /> : null
            }
        </div>
    );
}

export default Pokemon;