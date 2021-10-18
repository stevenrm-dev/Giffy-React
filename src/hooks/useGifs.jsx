import { useState, useEffect } from 'react';
import getGifs from '../services/getGifs';

export function useGifs({keyword} = {keyword: null}) {

    const [gifs, setGifs] = useState([]);

    useEffect(function () {
      const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';

      getGifs({keyword: keywordToUse})
        .then(gifs => {
          setGifs(gifs)
          localStorage.setItem('lastKeyword', keyword)
        });
    }, [keyword]);

    return {gifs}
}