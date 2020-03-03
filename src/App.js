import React from 'react';
import './App.css';
import movies from './data';
import MoviesList from "./MoviesList"
import Header from "./Header"
 

export default class App extends React.Component {
  render() {
    return (
      <div>
          <Header />
          <MoviesList list={movies.results} />     
      </div>
    );
  }
}

// export default App;

