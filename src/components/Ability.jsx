import React from 'react';


const Poke = props => {
    const {banana} = props;
    return(
        <div className="card col-3">
            <div className="card-body">
                <h4 className="card-title">{banana.name}</h4>
                <p className="card-text">Pokes that have {banana.name}: </p>
                <ul className="list-group list-group-flush">
                    {
                        banana.pokemon.map((p,i) => {
                            return <li key={i} className="list-group-item">{p.pokemon.name}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Poke;