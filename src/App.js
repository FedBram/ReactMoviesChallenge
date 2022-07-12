import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import {MovieProvider} from './components/movieContext/movieContext';
import MoviesPopularContainer from './components/moviesPopularContainer/moviesPopularContainer';
import MovieDetailContainer from './components/movieDetailContainer/movieDetailContainer';
import SearchBar from './components/searchBar/searchBar';

function App() {
  return (
    <MovieProvider>
      <Router>
        <div className="App">
          <main className="App-header">
            <Routes>
              <Route exact path = '/' element = {<MoviesPopularContainer/>}/>
              {/* <Route exact path = '/' element = {<SearchBar/>}/> */}
              <Route exact path = '/movie/:movieId' element = {<MovieDetailContainer/>}/>
            </Routes>
          </main>
        </div>
      </Router>
    </MovieProvider>
  );
};

export default App;
