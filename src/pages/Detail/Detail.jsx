import React, {useContext} from 'react';
import GifsContext from '../../context/GifsContext.jsx';

export default function Detail({params}) {

    const gifsContext = useContext(GifsContext);
    console.log(gifsContext);

    return <h1>GIF con id {params.id}</h1>
}