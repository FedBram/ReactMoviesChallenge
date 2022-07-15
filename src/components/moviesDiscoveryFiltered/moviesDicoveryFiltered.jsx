import React from "react";
import Movie from '../movie/movie';
import './../moviesDicovery/moviesDicovery.scss';

const MoviesDicoveryFiltered = ({data}) => {
    return (
        <div className="movies">
            <div className="movies__cards">
                {data.length !== 0 ?
                    data.map((e) => {
                        return (
                            < Movie data = {e} key = {e.id} />
                        )
                    }) 
                    : 
                    <p>No se encontraron peliculas</p>
                }
            </div>
        </div>
    );
};

export default MoviesDicoveryFiltered;