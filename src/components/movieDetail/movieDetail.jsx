import React from 'react';
import './movieDetail.scss'


const MovieDetail = (({movie}) => {
    return (
        <React.Fragment>
            <div                        
                className = "movie"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}')`
                }}
            >
                <div className = 'movie__img'>
                    <img src = {`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt = {movie.title}/>
                </div>
                <div className = 'movie__info'>
                    <div className='movie__info__title'>
                        <h2>{movie.title}</h2>
                        <div className='movie__info__title__detail'>
                            <span>{movie.release_date} ({movie.original_language})</span>
                            <span>{movie.runtime} mins</span>
                        </div>
                    </div>
                    <div className='movie__info__rating'>
                        <span className='movie__info__rating__score'>{movie.vote_average}</span>
                        <span>Users <br/> Score</span>
                    </div>
                    <div className = 'movie__info__description'>
                        <span>{movie.tagline}</span>
                        <h5>SINOPSIS</h5>
                        <p>{movie.overview}</p>
                    </div>
            </div>
        </div>
        </React.Fragment>
    )

});

export default MovieDetail;