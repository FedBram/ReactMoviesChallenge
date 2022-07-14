import React, {useState, createContext, useEffect} from 'react';
import axios from 'axios';

export const MovieContext = createContext()

export const MovieProvider = ({children}) => {

    const [movies, setMovies] = useState([])
    const [filteredMovies, setfilteredMovies] = useState([])
    // const [search, setSearch] = useState('')

    const getMoviesPopular = () => {
        axios.get(
            'https://api.themoviedb.org/3/discover/movie?api_key=804e095a9ef1fdc1237eaceaf753ca44&sort_by=popularity.desc&include_adult=false'
        ).then((res) => {setMovies(res.data.results)});
    }

    const getMoviesSearch = (value) => {
        // setSearch(value)
        if(value !== ''){
        axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=804e095a9ef1fdc1237eaceaf753ca44&query=${value}&include_adult=false`
        ).then((res) => setMovies(res.data.results));
        }else{
            getMoviesPopular();
        }
    };

    const filterByRating = (index, param) => {
        setfilteredMovies(movies.filter(e => parseInt(e.vote_average, 10) === index || parseInt(e.vote_average, 10) === param));
    };
    

    // getMoviesPopular()

    // useEffect(() => {
    //     if(filteredMovies.length !== 0){
    //         console.log('Pelis filradas:', filteredMovies)
    //     }else(
    //         console.log('Todas Las pelis', movies)
    //     )
    // },[filteredMovies])

    return (
        <MovieContext.Provider value ={{movies, filteredMovies, getMoviesPopular, getMoviesSearch, filterByRating}}>
            {children}
        </MovieContext.Provider>
    );
};