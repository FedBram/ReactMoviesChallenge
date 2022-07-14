// import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import MoviesDicovery from '../moviesDicovery/moviesDicovery';
import { MovieContext } from '../movieContext/movieContext';
import SearchBar from '../searchBar/searchBar';
import StarFilter from './../starFilter/starFilter';

const MoviesDicoveryContainer = () => {

    const { movies, filteredMovies } = useContext(MovieContext)
    
    
    // useEffect(() => {
    //     getMoviesPopular()
    //     // if(movies !== ''){
    //     //     getMoviesSearch(movies)
    //     // };
    // }, [movies]);

    return (        
        <div>
            <SearchBar/>
            <h1>PELICULAS POPULARES</h1>
            <StarFilter/>
            {filteredMovies.length !== 0 ? 
                <MoviesDicovery data = {filteredMovies} key = {filteredMovies.id}/> 
                : 
                <MoviesDicovery data = {movies} key = {movies.id}/>}           
        </div>
    );
};

export default MoviesDicoveryContainer;