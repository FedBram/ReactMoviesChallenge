import React, { useContext } from 'react';
import MoviesDicovery from '../moviesDicovery/moviesDicovery';
import MoviesDicoveryFiltered from "./../moviesDiscoveryFiltered/moviesDicoveryFiltered";
import { MovieContext } from '../movieContext/movieContext';
import StarFilter from './../starFilter/starFilter';
import Hero from "./../hero/hero";
import "./moviesDiscoveryContainer.scss"

const MoviesDicoveryContainer = () => {

    const { movies, filteredMovies, avtiveFilter } = useContext(MovieContext);
    
        return (        
            <div >
                <Hero/>
                <div className='moviesDiscoveryContainer'>
                    <div className='moviesDiscoveryContainer__header'>
                        <h2>DESCUBRE PELICULAS</h2>
                        <StarFilter className="moviesDiscoveryContainer__filter"/>
                    </div>
                    {avtiveFilter === true ? 
                        <MoviesDicoveryFiltered data = {filteredMovies} key = {filteredMovies.id}/> 
                        : 
                        <MoviesDicovery data = {movies} key = {movies.id}/>} 
                </div>         
            </div>
        );
    };

export default MoviesDicoveryContainer;