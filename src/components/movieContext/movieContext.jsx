import React, {useState, createContext} from 'react';
import axios from 'axios';

export const MovieContext = createContext()

export const MovieProvider = ({children}) => {

    const [movies, setMovies] = useState([]);
    const [avtiveFilter, setActiveFilter] = useState(false);
    const [filteredMovies, setfilteredMovies] = useState([]);
    

    // Trae las peliculas mas populares
    const getMoviesPopular = () => {
        axios.get(
            'https://api.themoviedb.org/3/discover/movie?api_key=804e095a9ef1fdc1237eaceaf753ca44&sort_by=popularity.desc&include_adult=false'
        ).then((res) => {setMovies(res.data.results)});
    }

    // Trae las peliculas segun parametros de busqueda
    const getMoviesSearch = (value) => {
        if(value !== ''){
        axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=804e095a9ef1fdc1237eaceaf753ca44&query=${value}&include_adult=false`
        ).then((res) => setMovies(res.data.results));
        }else{
            getMoviesPopular();
        }
    };

    // Filtra peliculas por calificacion
    const filterByRating = (index, param) => {
        setfilteredMovies(movies.filter(e => parseInt(e.vote_average, 10) === index || parseInt(e.vote_average, 10) === param));
    };

    return (
        <MovieContext.Provider value ={{movies, filteredMovies, avtiveFilter, setActiveFilter, getMoviesPopular, getMoviesSearch, filterByRating}}>
            {children}
        </MovieContext.Provider>
    );
};