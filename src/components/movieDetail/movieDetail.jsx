import React from 'react';
import './movieDetail.scss'


const MovieDetail = (({movie}) => {
    return (
        <React.Fragment>
            <div className = "movie">
                <div className = 'movie__img'>
                    <img src = {`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt = {movie.title}/>
                </div>
                <div className = 'movie__info'>
                    <h2>{movie.artista} - {movie.title}</h2>
                    <div className = 'movie__info__description'>
                        <h5>TRACKLIST</h5>
                        <h6>LADO A</h6>
                        <span>{movie.tracksA}</span>
                        <h6>LADO B</h6>
                        <span>{movie.ladoB}</span>
                    </div>
                <div>
                    <p>${movie.precio}</p>
                </div>
            </div>
        </div>
        </React.Fragment>
    )

});

export default MovieDetail;