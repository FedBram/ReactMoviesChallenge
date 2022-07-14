import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import {MovieProvider} from './components/movieContext/movieContext';
import MoviesDicoveryContainer from './components/moviesDicoveryContainer/moviesDicoveryContainer';
import MovieDetailContainer from './components/movieDetailContainer/movieDetailContainer';


function App() {
  return (
    <MovieProvider>
      <Router>
        <div className="App">
          <main className="App-header">
            <Routes>
              <Route exact path = '/' element = {<MoviesDicoveryContainer/>}/>
              <Route exact path = '/movie/:movieId' element = {<MovieDetailContainer/>}/>
            </Routes>
          </main>
        </div>
      </Router>
    </MovieProvider>
  );
};

export default App;
