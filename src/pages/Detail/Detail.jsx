import React, {useContext} from 'react';
import GifsContext from '../../context/GifsContext.jsx';
import Gif from '../../components/Gif/Gif.jsx';

export default function Detail({params}) {

    const {gifs} = useContext(GifsContext);

    const gif = gifs.find(singleGif => singleGif.id === params.id);

    return <Gif {...gif} />
}