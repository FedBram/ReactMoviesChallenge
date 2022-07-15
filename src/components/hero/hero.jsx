import React from "react";
import SearchBar from "./../searchBar/searchBar";
import "./hero.scss"

const Hero = () => {
    
    return(
        <div className="hero">
            <div className="hero__image">
                <h1>TUS PELICULAS FAVORITAS</h1>
                <SearchBar className="hero__srchBar"/>
            </div>
        </div>
    );
};


export default Hero