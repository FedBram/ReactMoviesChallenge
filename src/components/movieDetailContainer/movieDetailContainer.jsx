import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MovieDetail from './../movieDetail/movieDetail';

const MovieDetailContainer = (() => {

    const [dataDetail, setDataDetail] = useState({});

    const {movieId} = useParams();

    
    useEffect(() => {
        axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=804e095a9ef1fdc1237eaceaf753ca44`
        ).then((res) => setDataDetail(res.data))
    }, [movieId])

    return (
        <div>
        <   MovieDetail movie = {dataDetail} key = {dataDetail.id} />
        </div>
    );    
});

export default MovieDetailContainer;