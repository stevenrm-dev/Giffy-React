import React from 'react';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import { useGifs } from '../../hooks/useGifs';

function SearchResults({params}) {
    const {keyword} = params;
    const {gifs} = useGifs({keyword});

    return <ListOfGifs gifs={gifs} />
}

export default React.memo(SearchResults);