import React from 'react';
import LoadingIcon from '../../components/LoadingIcon/LoadingIcon.jsx'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs.jsx';
import {useGifs} from '../../hooks/useGifs.jsx';

function SearchResults({params}) {
    const {keyword} = params;
    const {loading, gifs} = useGifs({keyword});

    return <>
        {loading
        ? <LoadingIcon />
        : <ListOfGifs gifs={gifs} />
        }
    </>
}

export default SearchResults;