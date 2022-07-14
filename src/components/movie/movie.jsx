import React from "react";
import { Link } from "react-router-dom";
import './movie.scss';


const Movie = ({data}) => {
    return (
        <div className="movies__card__elements">
            <Link to = {`/movie/${data.id}`}>
                <img src= {`https://image.tmdb.org/t/p/w220_and_h330_face/${data.poster_path}`} alt = {`${data.title}`}/>
                {/* <h6>{data.title}</h6> */}
            </Link>
        </div>
    )

}

export default Movie