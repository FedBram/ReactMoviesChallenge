import React, {useState, useContext} from 'react';
import { MovieContext } from './../movieContext/movieContext';
import "./searchBar.scss"

const SearchBar = () => {

    const [search, setSearch] = useState('');
    const {getMoviesSearch} = useContext(MovieContext)

    const handleSearch = (e) => setSearch(e.target.value);

    getMoviesSearch(search)

    return(
        <form className='srchBar'>
            {/* <label htmlFor='search'>Bucar</label> */}
            <input type='text' name='search' id='search' value={search} onChange={handleSearch} placeholder = "Buscar pelicula..."/>
            {/* <button type='submit'>Buscar</button> */}
        </form>
    );
};


export default SearchBar