// import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import MoviesPopular from './../moviesPopular/moviesPopular';
import { MovieContext } from './../movieContext/movieContext';
import SearchBar from '../searchBar/searchBar';

const MoviesPopularContainer = () => {

    // const [data, setData] = useState([]);
    // const [search, setSearch, ] = useState('');
    // const [result, setResult] = useState([]);

    const { movies, getMoviesPopular, getMoviesSearch } = useContext(MovieContext)

    // const handleSearch = (e) => setSearch(e.target.value);
    
    
    // useEffect(() => {
    //     getMoviesPopular()
    //     // if(movies !== ''){
    //     //     getMoviesSearch(movies)
    //     // };
    // }, [movies]);

    return (        
        <div>
            {/* <form>
                <label htmlFor='search'>Bucar</label>
                <input type='text' name='search' id='search' value={search} onChange={handleSearch}/>
                <button type='submit'>Buscar</button>
            </form> */}
            <SearchBar/>
            <h1>PELICULAS POPULARES</h1>
            <MoviesPopular data = {movies} key = {movies.id}/> 
        </div>
    );
};

export default MoviesPopularContainer;