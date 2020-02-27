import React from 'react';
import './App.css';
import movies from './data';
import MoviesList from "./MoviesList"

export default class App extends React.Component {
  render() {
    // console.log(movies.results);
    return (
      <div className="App">
        <MoviesList list={movies.results} />
        
      </div>
    );
  }
}

// export default App;
