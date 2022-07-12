import React, {useState, createContext, useEffect} from 'react';
import axios from 'axios';

export const MovieContext = createContext()

export const MovieProvider = ({children}) => {

    const [movies, setMovies] = useState([])
    // const [search, setSearch] = useState('')

    const getMoviesPopular = () => {
        axios.get(
            'https://api.themoviedb.org/3/discover/movie?api_key=804e095a9ef1fdc1237eaceaf753ca44&sort_by=popularity.desc'
        ).then((res) => {setMovies(res.data.results)});
    }

    const getMoviesSearch = (value) => {
        // setSearch(value)
        if(value !== ''){
        axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=804e095a9ef1fdc1237eaceaf753ca44&query=${value}`
        ).then((res) => setMovies(res.data.results));
        }else{
            getMoviesPopular()
        }
    };


    return (
        <MovieContext.Provider value ={{movies, getMoviesPopular, getMoviesSearch}}>
            {children}
        </MovieContext.Provider>
    )
}