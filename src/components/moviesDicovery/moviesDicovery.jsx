import React from "react";
import Movie from '../movie/movie';
import './moviesDicovery.scss';

const MoviesDicovery = ({data}) => {
    return (
        <div className="movies">
            <div className="movies__cards">
                {data.length === 0 ?
                    <p>No se encontraron peliculas</p>
                    :
                    data.map((e) => {
                        return (
                            < Movie data = {e} key = {e.id} />
                        )
                    })}
            </div>
        </div>
    );
};

export default MoviesDicovery;