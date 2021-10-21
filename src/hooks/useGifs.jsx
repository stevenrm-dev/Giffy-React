import {useContext, useEffect, useState} from 'react';
import getGifs from '../services/getGifs.jsx';
import GifsContext from '../context/GifsContext.jsx'

export function useGifs({keyword} = {keyword: null}) {
    const [loading, setLoading] = useState(false)
    // const [gifs, setGifs] = useState([])
    const {gifs, setGifs} = useContext(GifsContext)

    useEffect(function() {
      setLoading(true)
      const keywordToUse = keyword || localStorage.getItem
      ('lastKeyword') || 'random'

      getGifs({keyword: keywordToUse})
        .then(gifs => {
          setGifs(gifs)
          setLoading(false)
          localStorage.setItem('lastKeyword', keyword)
        })
    }, [keyword, setGifs])

    return {loading, gifs}
}