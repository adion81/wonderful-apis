import React,{useState} from 'react';
import Axios from 'axios';


const CatFacts = props => {

    const [facts, setFacts] = useState(JSON.parse(window.localStorage.getItem("f")) || []);


    const handleCatFacts = () => {
        Axios.get("https://cat-fact.herokuapp.com/facts")
            .then(res =>  {
                setFacts(res.data.all);
                window.localStorage.setItem("f",JSON.stringify(res.data.all));
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Welcome to Cat Facts!!!</h1>
            <button 
                className="btn btn-primary"
                onClick={handleCatFacts}
            >Click For Cat Facts</button>
            {
                facts.map((f,i) => <p key={i} >{f.text}</p>)
            }
        </div>
    );
}

export default CatFacts;