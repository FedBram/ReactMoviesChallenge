import React from "react";
import Movie from './../movie/movie';
import './moviesPopular.scss';

const MoviesPopular = ({data}) => {
    return (
        <div className="movies">
            <div className="movies__cards">
                {data.map((e) => {
                    return (
                        < Movie data = {e} key = {e} />
                    )
                })}
            </div>
        </div>
    );
};

export default MoviesPopular;