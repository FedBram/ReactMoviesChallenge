import React, {useState, useEffect} from 'react';
import axios from 'axios';

const SearchBar = () => {

    const [search, setSearch] = useState('');
    const [result, setResult] = useState([]);

    const handleSearch = (e) => setSearch(e.target.value);

    useEffect(async () => {
        if(search !== ''){
            await axios.get(
                `https://api.themoviedb.org/3/search/movie?api_key=804e095a9ef1fdc1237eaceaf753ca44&query=${search}`
            ).then((res) => setResult(res.data.results));
        }
    }, [search]);

    console.log(result)
    return(
        <form>
            <label htmlFor='search'>Bucar</label>
            <input type='text' name='search' id='search' value={search} onChange={handleSearch}/>
            <button type='submit'>Buscar</button>
        </form>
    );
};


export default SearchBar