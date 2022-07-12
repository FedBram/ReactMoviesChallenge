import axios from 'axios';
import React, { useState } from 'react';
import MoviesPopular from './../moviesPopular/moviesPopular';

const movies = []
axios.get(
    'https://api.themoviedb.org/3/discover/movie?api_key=804e095a9ef1fdc1237eaceaf753ca44&sort_by=popularity.desc'
).then((res) => {(res.data.results.forEach((e) => {movies.push(e)}))})

const MoviesPopularContainer = () => {

    const [data, setData] = useState(movies);

    return (
        <div>
            <h1>PELICULAS POPULARES</h1>
            <MoviesPopular data = {data} />
        </div>
    );
};

export default MoviesPopularContainer;