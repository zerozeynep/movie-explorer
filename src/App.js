import React from 'react';
import './App.css';
import movies from './data';
import MoviesList from "./MoviesList"
import Header from "./Header"

export default class App extends React.Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
        <Header />
        <MoviesList list={movies.results} />
        </div>
        
      </div>
    );
  }
}

// export default App;
