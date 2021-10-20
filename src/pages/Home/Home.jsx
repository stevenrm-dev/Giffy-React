import React, {useState} from 'react';
import {Link, useLocation} from 'wouter';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import {useGifs} from '../../hooks/useGifs';
import './Home.css';

const Popular_Gifs =['lotr', 'over garden wall', 'star wars']

export default function Home() {
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation]= useLocation();

    const {gifs} = useGifs();

    const handleSubmit = evt => {
        evt.preventDefault();
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input className="App-search" onChange={handleChange} type="text" value={keyword} placeholder="Busca aquí el GIF" />
                <button className="App-send">Encuéntralo</button>
            </form>
            <div className="LastSearch">
                <h3 className="App-title">Última busqueda</h3>
                <ListOfGifs gifs={gifs} />
            </div>
            <h3 className="App-title">Los gifs más populares</h3>
            <ul>
                {Popular_Gifs.map((popularGif) => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}