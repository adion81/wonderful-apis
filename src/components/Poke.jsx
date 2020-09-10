import React from 'react';


const Poke = props => {
    const {banana} = props;
    return(
        <div className="card col-3">
            <img src={banana.sprites.front_default} alt={banana.name} className="card-img-top"/>
            <div className="card-body">
                <h4 className="card-title">{banana.name}</h4>
                <p className="card-text">Abilities:</p>
                <ul className="list-group list-group-flush">
                    {
                        banana.abilities.map((ab,i) => {
                            return <li key={i} className="list-group-item">{ab.ability.name}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Poke;